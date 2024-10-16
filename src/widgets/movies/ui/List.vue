<template>
    <div class="container">
        <total-search />
        <movies-list />
    </div>
</template>

<script setup lang="ts">
import { MoviesList, TotalSearch } from "@/features";
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
}
</style>
