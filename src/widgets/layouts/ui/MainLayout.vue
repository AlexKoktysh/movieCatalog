<template>
    <div class="container">
        <header>
            <main-layout-header />
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts">
import { MainLayoutHeader } from "@/features";
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.container {
    height: 100%;
    header {
        background: $header-bg;
        padding: 1rem;
    }

    main {
        height: 100%;
        padding: 1rem;
    }
}
</style>
