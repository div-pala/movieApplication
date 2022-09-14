import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WatchList } from '../interfaces/watchList';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  //Properties
  private baseUrl = environment.restDbApiBaseUrl;
  private restDbApiKey = environment.restDbApiKey;

  //Constructor
  constructor(private httpClient: HttpClient) { }

  //Observables
  getWatchList(): Observable<WatchList[]> {
    var result = this.httpClient.get<WatchList[]>(`${this.baseUrl}`, {
      headers: { "x-apikey": this.restDbApiKey }
    });
    return result;
  }

  AddToWatchList(item: WatchList) : Observable<WatchList>{
    var result = this.httpClient.post<WatchList>(`${this.baseUrl}`, item, {
      headers: { "x-apikey": this.restDbApiKey }
    });
    return result;
  }

  removeFromWatchList(movieId?: number) : Observable<void> {
    if(!movieId){
      return of();
    }
    var result = this.httpClient.delete<void>(`${this.baseUrl}/${movieId}`, {
      headers: { "x-apikey": this.restDbApiKey }
    });
    return result;
  }

}
