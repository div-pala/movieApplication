import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieList, Result } from 'src/app/interfaces/movies-list';
import { WatchListWrite } from 'src/app/interfaces/watchList';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { environment } from 'src/environments/environment';

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
  moviePosterPath: string[] = [];
  title:string='Now Playing';
  isSuccess: string = '';
  selectedOption:string = '';
  pageNumber: number = 1;

  //Constructor
  constructor(private movieApi: MovieAPIService, private watchListApi: WatchlistService, private changeDetectorRef: ChangeDetectorRef) { 
    this.pageNumber = 1;
    this.selectedOption ="nowPlaying";
  }

  ngOnInit(): void {
    this.getNowPlayingApiResponse();
  }

  counter(i: number) {
    return new Array(i);
  }

  getListFromPage(pageNo: number) : void {
    this.pageNumber = pageNo;
    
    switch(this.selectedOption){
      case "nowPlaying": this.title = "Now Playing";
                         this.getNowPlayingApiResponse();
                         break;
      case "popular": this.title = "Popular";
                      this.getPopularApiResponse();
                      break;
      case "topRated": this.title = "Top Rated";
                       this.getTopRatedApiResponse();
                       break;
      case "upcoming": this.title = "Upcoming";
                       this.getUpcomingApiResponse();
                       break;
    }  

  }

  //Methods
  addToWatchList(event: Result): void{
    var item: WatchListWrite = {
      movieTitle: event.title,
      movieGenre: 'action',
      movieId: event.id,
      moviePoster: event.poster_path
    }
    this.watchListApi.AddToWatchList(item).subscribe(list => {}, error => {}, () => {
      this.isSuccess = "Added to WatchList!!!";
    });
  }
  
  getNowPlayingApiResponse() {
    this.movieApi.getNowPlayingMovies(this.pageNumber).subscribe(
       res => {
        if (res){
          for(var val of res.results){
            val.poster_path = environment.theMovieDbImageUrl+val.poster_path;
            this.moviePosterPath.push(val.poster_path);
          }
          this.movieList = res;
        }
      }, error => {
        this.errorMessage = error;
      }, () => {
        this.changeDetectorRef.detectChanges();
        // console.log(this.movieList);
        this.movieResults = this.movieList?.results;
      }
    );
  }

  getPopularApiResponse() {
    this.movieApi.getPopularMovies(this.pageNumber).subscribe(
      res => {
       if (res){
        for(var val of res.results){
          val.poster_path = environment.theMovieDbImageUrl+val.poster_path;
          this.moviePosterPath.push(val.poster_path);
        }
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

  getTopRatedApiResponse(){
    this.movieApi.getTopratedMoviesEndpoint(this.pageNumber).subscribe(
      res => {
       if (res){
        for(var val of res.results){
          val.poster_path = environment.theMovieDbImageUrl+val.poster_path;
          this.moviePosterPath.push(val.poster_path);
        }
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

  getUpcomingApiResponse(){
    this.movieApi.getUpcomingMoviesEndpoint(this.pageNumber).subscribe(
      res => {
       if (res){
        for(var val of res.results){
          val.poster_path = environment.theMovieDbImageUrl+val.poster_path;
          this.moviePosterPath.push(val.poster_path);
        }
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

  onOptionClick(selectedValue:any):void {
    this.selectedOption = selectedValue.currentTarget.id;
    switch(this.selectedOption){
      case "nowPlaying": this.title = "Now Playing";
                         this.getNowPlayingApiResponse();
                         break;
      case "popular": this.title = "Popular";
                      this.getPopularApiResponse();
                      break;
      case "topRated": this.title = "Top Rated";
                       this.getTopRatedApiResponse();
                       break;
      case "upcoming": this.title = "Upcoming";
                       this.getUpcomingApiResponse();
                       break;
      default: break;this.title = "Now Playing";
               this.getNowPlayingApiResponse();
              
    }    
  }
}
