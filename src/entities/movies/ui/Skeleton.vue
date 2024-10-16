<template>
    <card-wrapper>
        <template #image>
            <div class="skeleton movie__poster"></div>
        </template>
        <template #info>
            <div class="skeleton skeleton-text" v-for="n in 4" :key="n"></div>
        </template>
    </card-wrapper>
</template>

<script setup lang="ts">
import { CardWrapper } from "@/entities";
</script>

<style scoped lang="scss">
@import "./styles.scss";

.skeleton-text {
    height: 14px;
}
</style>
