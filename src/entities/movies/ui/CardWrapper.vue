<template>
    <div class="image-block">
        <slot name="image"></slot>
    </div>
    <div class="movie-info">
        <slot name="info"></slot>
    </div>
</template>

<script setup lang="ts">
import type { IMovieType } from "@/entities";
import { defineProps } from "vue";

defineProps<{
    movie?: IMovieType;
}>();
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.image-block {
    display: flex;
    overflow: hidden;
    width: 100%;
    flex: 1;
}
.movie-info {
    @include flex(center, flex-start);
    flex-direction: column;
    width: 100%;
    gap: 5px;
}
</style>
