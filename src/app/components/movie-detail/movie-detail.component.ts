import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/movieDetail';
import { MovieAPIService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  errorMessage: string;
  movieDetail: MovieDetail | undefined;
  movieId: number = 297761;

  constructor(private movieApi: MovieAPIService, private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute) {
    this.errorMessage = '';
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('movieId'));
      console.log(this.movieId);
      this.getMovieDetail();
    })
  }

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
        console.log(this.movieDetail);
      }
    );
  }

}
