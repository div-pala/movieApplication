import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MovieList, Result } from 'src/app/interfaces/movies-list';
import { MovieAPIService } from 'src/app/services/movie-api.service';
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

  //Constructor
  constructor(private movieApi: MovieAPIService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getNowPlayingApiResponse();
  }
  
  getNowPlayingApiResponse() {
    this.movieApi.getNowPlayingMovies().subscribe(
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

  getPopularApiResponse(){
    this.movieApi.getPopularMovies().subscribe(
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
    this.movieApi.getTopratedMoviesEndpoint().subscribe(
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
    this.movieApi.getUpcomingMoviesEndpoint().subscribe(
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
    const selectedOption:string = selectedValue.currentTarget.id;
    switch(selectedOption){
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
