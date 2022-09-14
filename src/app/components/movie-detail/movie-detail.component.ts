import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private movieApi: MovieAPIService, private changeDetectorRef: ChangeDetectorRef) {
    this.errorMessage = '';
   }

  ngOnInit(): void {
    this.getMovieDetail(297761);
  }

  getMovieDetail(movieId: number) : void {
    this.movieApi.getMovieDetailFromSrv(movieId).subscribe(
      res => {
        if (res){
          this.movieDetail = res;
        }
      }, error => {
        this.errorMessage = error;
      }, () => {
        this.changeDetectorRef.detectChanges();
        console.log(this.movieDetail);
      }
    );
  }

}
