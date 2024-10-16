<template>
    <div class="user-info" @click="openMenu">
        <i class="pi pi-user icon"></i>
        <div class="name">{{ `${first_name} ${last_name}` }}</div>
        <i class="pi pi-sort-down-fill"></i>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface IProps {
    first_name: string;
    last_name: string;
}

defineProps<IProps>();

const openMenu = () => {
    console.log("Open drawer menu");
};
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.user-info {
    @include flex(space-between, center);
    cursor: pointer;
    transition:
        opacity 0.3s,
        background-color 0.3s;
    gap: 15px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid transparent;
    .name {
        @include font-styles($black-color, 16px, 500);
    }
}
.user-info:hover {
    opacity: 0.7;
    border-color: $gray-border;
}
@media (max-width: 700px) {
    .user-info {
        .name,
        .pi-sort-down-fill {
            display: none;
        }
    }
}
</style>
