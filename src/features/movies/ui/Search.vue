<template>
    <input-component
        :search="search"
        placeholder="Search movies"
        @update:value="updateSearchValue"
    />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, defineProps, defineEmits } from "vue";
const InputComponent = defineAsyncComponent(
    () => import("../../../shared/ui/InputComponent.vue"),
);

interface Props {
    search: string;
}
defineProps<Props>();
const emit = defineEmits(["update:value"]);

const updateSearchValue = (value: string) => {
    emit("update:value", value);
};

const search = ref("");
</script>

<style scoped lang="scss">
@import "../../../shared/styles/index.scss";
</style>
