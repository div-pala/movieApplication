export interface WatchListRead{
    _id: string,
    movieId: number | undefined, 
    movieTitle: string | undefined, 
    movieGenre: string | undefined,
    moviePoster: string | undefined
}

export interface WatchListWrite{
    movieId: number | undefined, 
    movieTitle: string | undefined, 
    movieGenre: string | undefined,
    moviePoster: string | undefined
}