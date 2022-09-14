import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MovieDetail } from '../interfaces/movieDetail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {

  getMovieDetailFromSrv(movieId: number) : Observable<MovieDetail>{
    let finalEndPoint: string = environment.theMovieDbBaseUrl+"movie/" + movieId + "?api_key=" + environment.apiKey;
    var returnVar = this.httpClient.get<MovieDetail>(finalEndPoint);
    return returnVar;
  }

  constructor(private httpClient: HttpClient) { }
}
