<template>
    <card-wrapper :movie="movie">
        <template #image>
            <img
                :src="posterUrl"
                :alt="movie.Poster"
                class="movie__poster"
                @error="handleError"
            />
        </template>
        <template #info>
            <div
                v-for="[key, value] in Object.entries(movie).filter(
                    ([key]) => key !== 'Poster',
                )"
                class="movie__info-item"
                :key="key"
            >
                <span>{{ key }}:</span> {{ value }}
            </div>
        </template>
    </card-wrapper>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";

import { CardWrapper } from "@/entities";
import type { IMovieType } from "../model";

const { movie } = defineProps<{
    movie: IMovieType;
}>();

const posterUrl = ref("");
const placeholder = "/public/noImage.png";

const handleError = () => {
    posterUrl.value = placeholder;
};

onMounted(() => {
    posterUrl.value = movie.Poster || placeholder;
});
</script>

<style scoped lang="scss">
@import "@/shared/styles";
@import "./styles.scss";

.movie__info-item {
    @include font-styles($black-color, 14px, 300);
    span {
        font-weight: 700;
    }
}
</style>
