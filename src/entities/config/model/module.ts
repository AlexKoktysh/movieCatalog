import type { IConfigState } from "./types";

export const configModule = {
    namespaced: true,
    state(): IConfigState {
        return {
            site_name: "Movie Catalog",
            first_name: "Alexander",
            last_name: "Koktysh",
        };
    },
};
