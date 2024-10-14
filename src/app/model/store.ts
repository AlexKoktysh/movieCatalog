import { configModule, moviesModule } from "@/entities";
import type { RootState } from "@/shared";
import { createStore } from "vuex";

export const store = createStore<RootState>({
    modules: {
        movies: moviesModule,
        config: configModule,
    },
});
