<template>
    <main-layout>
        <RouterView />
    </main-layout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const MainLayout = defineAsyncComponent(
    () => import("../../widgets/layouts/ui/MainLayout.vue"),
);
</script>
