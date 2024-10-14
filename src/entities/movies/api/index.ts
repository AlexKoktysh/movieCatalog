import type { AxiosResponse } from "axios";
import { BaseRepository } from "@/shared";

import type { IQueryType, IMovieType } from "../model";

class movies extends BaseRepository {
    async getMovies(
        params: Required<IQueryType>,
    ): Promise<AxiosResponse<IMovieType[]>> {
        const response = await this.instance.get("/");
        return response;
    }
}

export const moviesAPI = new movies();
