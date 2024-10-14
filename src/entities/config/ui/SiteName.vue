<template>
    <div class="site-name">{{ site_name }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
    site_name: string;
}

const { site_name } = defineProps<Props>();
</script>

<style scoped lang="scss">
@import "../../../shared/styles/index.scss";
.site-name {
    @include font-styles($black-color, 20px, 800);
    cursor: pointer;
}
</style>
