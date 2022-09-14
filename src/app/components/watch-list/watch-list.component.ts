import { Component, OnInit } from '@angular/core';
import { WatchList } from 'src/app/interfaces/watchList';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  //Propeties
  watchList: WatchList[] = [];
  loading: boolean = true;
  //Constructor
  constructor(private watchListApi: WatchlistService) { }

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

  removeFromWatchList(movieId: number) : void{
    console.log(movieId);
    this.loading = true;
    this.watchListApi.removeFromWatchList(movieId).subscribe(() => {
      this.loadWatchList();
    });
  }
}
