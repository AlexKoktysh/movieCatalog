<template>
    <div class="movies-list">
        <template v-if="!isLoading">
            <div
                v-for="movie in movies"
                :key="movie.imdbID"
                class="card-container card-hover"
            >
                <movie-card :movie="movie" />
            </div>
        </template>
        <template v-else>
            <div class="card-container" v-for="n in 10" :key="n">
                <card-skeleton />
            </div>
        </template>
    </div>
    <custom-pagination
        v-if="pagination.total > 10"
        :currentPage="pagination.page"
        :totalPages="Math.ceil(pagination.total / pagination.limit)"
        :limit="pagination.limit"
        @update:currentPage="updatePage"
    />
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import { MovieCard, CardSkeleton, type IQueryType } from "@/entities";
import { CustomPagination } from "@/shared";
import type { RootState } from "@/shared";

const store = useStore<RootState>();
const movies = computed(() => store.state["movies"]["movies"]);
const isLoading = computed(() => store.state["movies"]["isLoadingMovie"]);
const pagination = computed(() => store.state["movies"]["pagination"]);

const fetchMovies = (params: IQueryType) => {
    store.dispatch("movies/fetchMovies", params);
};

const updatePage = (newPage: number) => {
    const params: IQueryType = {
        s: pagination.value.s,
        page: newPage,
    };
    fetchMovies(params);
};

onMounted(() => {
    const params: IQueryType = {
        s: "",
        page: 1,
    };
    fetchMovies(params);
});
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.movies-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
    .card-container {
        @include card-borders;
        @include card-paddings;
        @include flex(center, center);
        @include card-hovered;
        flex-direction: column;
        gap: 15px;
        height: 310px;
        box-sizing: border-box;
    }
}

.card-hover:hover {
    @include hover;
}
</style>
