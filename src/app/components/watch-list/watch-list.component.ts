import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  WatchListRead } from 'src/app/interfaces/watchList';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  //Propeties
  watchList: WatchListRead[] = [];
  loading: boolean = true;
  //Constructor
  constructor(private watchListApi: WatchlistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadWatchList();
  }

  //Methods
  loadWatchList(){
    this.loading = true;
    this.watchListApi.getWatchList().subscribe(res => {
      this.watchList = res;
      this.loading = false;
      console.log(this.watchList);
    });
  }

  removeFromWatchList(_id: string) : void{
    this.loading = true;
    this.watchListApi.removeFromWatchList(_id).subscribe(() => {
      this.loadWatchList();
    });
  }
}
