import { createRouter, createWebHistory } from "vue-router";

import { MoviesPage } from "@/pages";
import { envConfig, pathes } from "@/shared";

const routes = [
    {
        path: "/",
        redirect: pathes.MOVIES,
    },
    {
        path: pathes.MOVIES,
        name: "movies",
        component: MoviesPage,
    },
];

export const router = createRouter({
    history: createWebHistory(envConfig.BASE_URL),
    routes,
});
