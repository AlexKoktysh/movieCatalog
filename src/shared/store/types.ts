import type { IConfigState, IMovieState } from "@/entities";

export interface RootState {
    config: IConfigState;
    movies: IMovieState;
}
