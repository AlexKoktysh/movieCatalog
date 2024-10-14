<template>
    <div class="container">
        <header>
            <main-header />
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const MainHeader = defineAsyncComponent(
    () => import("../../../features/main/ui/Header.vue"),
);
</script>

<style scoped lang="scss">
@import "../../../shared/styles/index.scss";

.container {
    height: 100%;
    header {
        background: $header-bg;
        padding: 1rem;
        div {
            @include font-styles($black-color, 18px, 800);
        }
    }

    main {
        height: 100%;
        padding: 1rem;
    }
}
</style>
