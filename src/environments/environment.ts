// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  theMovieDbBaseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4076192d15cd9d20a1c57bb5d7ccef21",
 // nowPlayingMoviesEndpoint:'https://api.themoviedb.org/3/movie/now_playing'
  nowPlayingMoviesEndpoint:'https://api.themoviedb.org/3/movie/now_playing?api_key=4076192d15cd9d20a1c57bb5d7ccef21',
  popularMoviesEndpoint:'https://api.themoviedb.org/3/movie/popular?api_key=4076192d15cd9d20a1c57bb5d7ccef21',
  topratedMoviesEndpoint:'https://api.themoviedb.org/3/movie/top_rated?api_key=4076192d15cd9d20a1c57bb5d7ccef21',
  upcomingMoviesEndpoint:'https://api.themoviedb.org/3/movie/upcoming?api_key=4076192d15cd9d20a1c57bb5d7ccef21'  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
