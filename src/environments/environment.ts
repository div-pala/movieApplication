// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 // nowPlayingMoviesEndpoint:'https://api.themoviedb.org/3/movie/now_playing'
  nowPlayingMoviesEndpoint:'https://api.themoviedb.org/3/movie/now_playing?api_key=373d9fa52b137f4939b540d3074ddfba',
  popularMoviesEndpoint:'https://api.themoviedb.org/3/movie/popular?api_key=373d9fa52b137f4939b540d3074ddfba',
  topratedMoviesEndpoint:'https://api.themoviedb.org/3/movie/top_rated?api_key=373d9fa52b137f4939b540d3074ddfba',
  upcomingMoviesEndpoint:'https://api.themoviedb.org/3/movie/upcoming?api_key=373d9fa52b137f4939b540d3074ddfba'  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
