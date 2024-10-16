import { BaseRepository } from "@/shared";

import type { IQueryType, IResponseGetMovies } from "../model";

class movies extends BaseRepository {
    async getMovies(params: Required<IQueryType>): Promise<IResponseGetMovies> {
        const response = await this.instance.get<IResponseGetMovies>("", {
            params,
        });
        return response as unknown as IResponseGetMovies;
    }
}

export const moviesAPI = new movies();
