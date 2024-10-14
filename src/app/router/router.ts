import { envConfig, pathes } from "@/shared";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: pathes.MOVIES,
    },
    {
        path: pathes.MOVIES,
        name: "movies",
        component: () => import("@/pages/movies/ui/Page.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(envConfig.BASE_URL),
    routes,
});
