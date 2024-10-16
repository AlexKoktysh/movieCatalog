import { createStore } from "vuex";

import { configModule, moviesModule } from "@/entities";
import type { RootState } from "@/shared";

export const store = createStore<RootState>({
    modules: {
        movies: moviesModule,
        config: configModule,
    },
});
