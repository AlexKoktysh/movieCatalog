<template>
    <div class="site-name">{{ site_name }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface IProps {
    site_name: string;
}

const { site_name } = defineProps<IProps>();
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.site-name {
    @include font-styles($black-color, 20px, 800);
    cursor: pointer;
}
</style>
