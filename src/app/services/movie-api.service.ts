import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../interfaces/movieDetail';
import { MovieImages } from '../interfaces/movieImages';
import { MovieList } from '../interfaces/movies-list';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  //Properties

  //Constructor 
  constructor(private httpClient: HttpClient) { }

  //Services
  getMovieDetailFromSrv(movieId: number) : Observable<MovieDetail>{
    let finalEndPoint: string = environment.theMovieDbBaseUrl + "movie/" + movieId + "?api_key=" + environment.apiKey;
    var resultSet = this.httpClient.get<MovieDetail>(finalEndPoint);
    return resultSet;
  }

  getMovieImagesFromSrv(movieId: number) : Observable<MovieImages>{
    let finalEndPoint: string = environment.theMovieDbBaseUrl + "movie/" + movieId + "/images?api_key=" + environment.apiKey;
    var resultSet = this.httpClient.get<MovieImages>(finalEndPoint);
    return resultSet;
  }

  getPopularMoviesFromSrv() : Observable<MovieList>{
    let finalEndPoint: string = environment.theMovieDbBaseUrl + "movie/popular" + "?api_key=" + environment.apiKey + "&language=en-US&page=1";
    console.log(finalEndPoint);
    var resultSet = this.httpClient.get<MovieList>(finalEndPoint);
    return resultSet;
  }

   //calls and returns the nowplaying movies
  getNowPlayingMovies(pageNo: number) : Observable<MovieList>{
      return this.httpClient.get<MovieList>(environment.nowPlayingMoviesEndpoint + "&language=en-US&page=" + pageNo);
     
  }

  //calls and returns the popular movies
  getPopularMovies(pageNo: number) : Observable<MovieList>{
       return this.httpClient.get<MovieList>(environment.popularMoviesEndpoint+ "&language=en-US&page=" + pageNo);    
  }

   //calls and returns the toprated movies
  getTopratedMoviesEndpoint(pageNo: number) : Observable<MovieList>{
    return this.httpClient.get<MovieList>(environment.topratedMoviesEndpoint+ "&language=en-US&page=" + pageNo);    
  }

   //calls and returns the uocoming movies
  getUpcomingMoviesEndpoint(pageNo: number) : Observable<MovieList>{
    return this.httpClient.get<MovieList>(environment.upcomingMoviesEndpoint+ "&language=en-US&page=" + pageNo);    
  }
}
