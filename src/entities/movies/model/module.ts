import { moviesAPI } from "../api";
import type { ActionContext } from "vuex";
import type { IMovieState, IMovieType, IQueryType } from "./types";

export const moviesModule = {
    namespaced: true,
    state(): IMovieState {
        return {
            isLoadingMovie: false,
            movies: [],
        };
    },
    mutations: {
        setMovies(state: IMovieState, movies: IMovieType[]) {
            state.movies = movies;
        },
    },
    actions: {
        async fetchMovies(
            { state, commit }: ActionContext<IMovieState, any>,
            params: IQueryType,
        ) {
            state.isLoadingMovie = true;
            const { s, page = 1 } = params;
            try {
                const response = await moviesAPI.getMovies({ s, page });
                commit("setMovies", response.data);
            } catch (error) {
                console.error("Error fetchItems", error);
            } finally {
                state.isLoadingMovie = false;
            }
        },
    },
};
