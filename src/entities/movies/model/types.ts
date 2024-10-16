type IMovieKeyType = "Poster" | "Title" | "Year" | "imdbID" | "Type";

export type IMovieType = {
    [key in IMovieKeyType]: string;
};

export type IResponseGetMovies = {
    totalResults: string;
    Search: IMovieType[];
    Response: "True" | "False";
    Error: string;
};

export type IQueryType = {
    s: string;
    page?: number;
};

export interface IPagination {
    s: string;
    page: number;
    limit: number;
    total: number;
}

export interface IMovieState {
    movies: IMovieType[];
    isLoadingMovie: boolean;
    pagination: IPagination;
    errorMessage: string;
}
