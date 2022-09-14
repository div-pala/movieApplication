import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MovieList, Result } from 'src/app/interfaces/movies-list';
import { MovieAPIService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  //Properties
  movieList : MovieList | undefined;
  movieResults : Result[] | undefined;
  errorMessage: string = '';
  //Constructor
  constructor(private movieApi: MovieAPIService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getMovieDetail();
  }

  //Methods
  getMovieDetail() : void {
    this.movieApi.getPopularMoviesFromSrv().subscribe(
      res => {
        if (res){
          this.movieList = res;
        }
      }, error => {
        this.errorMessage = error;
      }, () => {
        this.changeDetectorRef.detectChanges();
        console.log(this.movieList);
        this.movieResults = this.movieList?.results;
      }
    );
  }

}
