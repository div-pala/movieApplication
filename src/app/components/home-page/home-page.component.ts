import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.getNowPlayingApiResponse();
  }
  
  getNowPlayingApiResponse() {
    this.movieApi.getNowPlayingMovies().subscribe((data) => {console.log(data),
       console.log(data.results),
       this.movieResults = data.results});
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

  getPopularApiResponse(){
    this.movieApi.getPopularMovies().subscribe((data) => {console.log(data),
      console.log(data.results),
      this.movieResults = data.results});
  }

  getTopratedApiResponse(){
    this.movieApi.getTopratedMoviesEndpoint().subscribe((data) => {console.log(data),
      console.log(data.results),
      this.movieResults = data.results});
  }

  getUpcomingApiResponse(){
    this.movieApi.getUpcomingMoviesEndpoint().subscribe((data) => {console.log(data),
      console.log(data.results),
      this.movieResults = data.results});
  }

  onOptionSelected(option:any):void{
    console.log("Value selected is", option);
  }
}
