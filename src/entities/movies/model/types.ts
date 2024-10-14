type IMovieKeyType = "Poster" | "Title" | "Year" | "imdbID" | "Type";

export type IMovieType = {
    [key in IMovieKeyType]: string;
};

export type IQueryType = {
    s: string;
    page?: number;
};

export interface IMovieState {
    movies: IMovieType[];
    isLoadingMovie: boolean;
}
