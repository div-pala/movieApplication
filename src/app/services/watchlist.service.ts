import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    console.log(result);
    return result;
  }



}
