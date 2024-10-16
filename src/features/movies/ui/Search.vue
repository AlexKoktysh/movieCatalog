<template>
    <custom-input
        :value="search"
        @update:value="updateSearchValue"
        placeholder="Search movies"
    />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import { CustomInput, debounce, type RootState } from "@/shared";
import type { IQueryType } from "@/entities";

const store = useStore<RootState>();
const search = computed(() => store.state["movies"]["pagination"]["s"]);

const updateSearchValue = debounce((value: string) => {
    const params: IQueryType = { s: value, page: 1 };
    store.dispatch("movies/fetchMovies", params);
}, 300);
</script>
