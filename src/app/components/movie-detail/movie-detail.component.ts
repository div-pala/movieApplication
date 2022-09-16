import { isNgContainer } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/movieDetail';
import { Backdrop, BackdropFinalUrl, MovieImages } from 'src/app/interfaces/movieImages';
import { WatchListWrite } from 'src/app/interfaces/watchList';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  //Properties
  errorMessage: string = '';
  movieDetail: MovieDetail | undefined;
  movieId: number = 297761;
  moviePosterPath: string = '';
  movieImages: MovieImages | undefined;
  movieBackdrops: Backdrop[] | undefined;
  backdropFinalUrl: BackdropFinalUrl[]  = [];
  isSuccess: string = '';

  //Constructor
  constructor(private movieApi: MovieAPIService, 
    private changeDetectorRef: ChangeDetectorRef, 
    private route: ActivatedRoute,
    private watchListApi: WatchlistService) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('movieId'));
      this.getMovieDetail();
    })
  }

  //Methods
  getMovieDetail() : void {
    this.movieApi.getMovieDetailFromSrv(this.movieId).subscribe(
      res => {
        if (res){
          this.movieDetail = res;
        }
      }, error => {
        this.errorMessage = error;
      }, () => {
        this.changeDetectorRef.detectChanges();
        this.movieDetail = this.movieDetail;
        this.moviePosterPath = environment.theMovieDbImageUrl + this.movieDetail?.backdrop_path;
        this.getMovieBackdrops();
      }
    );
  }

  getMovieBackdrops() : void {
    this.movieApi.getMovieImagesFromSrv(this.movieId).subscribe(
      res => {
        if (res){
          this.movieImages = res;
        }
      }, error => {
        this.errorMessage = error;
      }, () => {
        this.movieBackdrops = this.movieImages?.backdrops;

        // for (let i = 0 ; i < 10 ; i++){
        //   this.backdropFinalUrl.push({ backdropUrl : environment.theMovieDbImageUrl + this.movieBackdrops?. });
        // }
        this.movieBackdrops?.forEach(element => {
          this.backdropFinalUrl.push({ backdropUrl : environment.theMovieDbImageUrl + element?.file_path });
        });
      }
    );
  }

  addToWatchList() : void{
    var item: WatchListWrite = {
      movieId: this.movieDetail?.id,
      movieTitle: this.movieDetail?.title,
      movieGenre: this.movieDetail?.genres[0].name,
      moviePoster: this.moviePosterPath
    }
    // console.log('add to watchlist'+item.moviePoster);
    this.watchListApi.AddToWatchList(item).subscribe(list => {}, error => {}, () => {
      this.isSuccess = "Added to WatchList!!!";
      // alert("Added to WatchList!!");
    });
    

  }


}
