import type { ActionContext } from "vuex";

import { moviesAPI } from "../api";
import type { IMovieState, IMovieType, IPagination, IQueryType } from "./types";

export const moviesModule = {
    namespaced: true,
    state(): IMovieState {
        return {
            isLoadingMovie: false,
            movies: [],
            pagination: {
                s: "",
                page: 1,
                limit: 10,
                total: 0,
            },
            errorMessage: "",
        };
    },
    mutations: {
        setMovies(state: IMovieState, movies: IMovieType[]) {
            const allowedKeys: (keyof IMovieType)[] = [
                "Poster",
                "Title",
                "Year",
                "imdbID",
                "Type",
            ];
            const savedMovies = movies.map((movie) =>
                Object.fromEntries(
                    Object.entries(movie).filter(([key]) =>
                        allowedKeys.includes(key as keyof IMovieType),
                    ),
                ),
            ) as IMovieType[];
            state.movies = savedMovies;
        },
        setPagination(state: IMovieState, pagination: Partial<IPagination>) {
            state.pagination = { ...state.pagination, ...pagination };
        },
        setErrorMessage(state: IMovieState, message: string) {
            state.errorMessage = message;
        },
    },
    actions: {
        async fetchMovies(
            { state, commit }: ActionContext<IMovieState, any>,
            params: IQueryType,
        ) {
            state.isLoadingMovie = true;
            const { s, page = 1 } = params;
            commit("setPagination", params);
            commit("setErrorMessage", "");
            try {
                const response = await moviesAPI.getMovies({
                    s,
                    page,
                });
                if (response.Response == "False") {
                    commit("setMovies", []);
                    commit("setPagination", { total: 0 });
                    commit("setErrorMessage", response.Error);
                    return;
                }
                if (
                    response &&
                    !response?.Search &&
                    response.Response === "True"
                ) {
                    commit("setMovies", [response]);
                    commit("setPagination", { total: 1 });
                    return;
                }
                commit("setMovies", response.Search);
                commit("setPagination", { total: response.totalResults });
            } catch (error) {
                console.error("Error fetchItems", error);
            } finally {
                state.isLoadingMovie = false;
            }
        },
    },
};
