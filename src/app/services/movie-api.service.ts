import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MovieDetail } from '../interfaces/movieDetail';
import { environment } from 'src/environments/environment';
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

  getPopularMoviesFromSrv() : Observable<MovieList>{
    let finalEndPoint: string = environment.theMovieDbBaseUrl + "movie/popular" + "?api_key=" + environment.apiKey + "&language=en-US&page=1";
    console.log(finalEndPoint);
    var resultSet = this.httpClient.get<MovieList>(finalEndPoint);
    return resultSet;
  }

}
