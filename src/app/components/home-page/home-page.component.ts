import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieList, Result } from 'src/app/interfaces/movies-list';
import { MovieAPIService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private httpClient:HttpClient, 
              private movieAPIService: MovieAPIService) {

  }
  ngOnInit(): void {
    this.getNowPlayingApiResponse();
  }
  movieList: Result[] = [];

  getNowPlayingApiResponse() {
    this.movieAPIService.getNowPlayingMovies().subscribe((data) => {console.log(data),
       console.log(data.results),
       this.movieList = data.results});
  }

  getPopularApiResponse(){
    this.movieAPIService.getPopularMovies().subscribe((data) => {console.log(data),
      console.log(data.results),
      this.movieList = data.results});
  }

  getTopratedApiResponse(){
    this.movieAPIService.getTopratedMoviesEndpoint().subscribe((data) => {console.log(data),
      console.log(data.results),
      this.movieList = data.results});
  }

  getUpcomingApiResponse(){
    this.movieAPIService.getUpcomingMoviesEndpoint().subscribe((data) => {console.log(data),
      console.log(data.results),
      this.movieList = data.results});
  }

  onOptionSelected(option:any):void{
    console.log("Value selected is", option);
  }
}
