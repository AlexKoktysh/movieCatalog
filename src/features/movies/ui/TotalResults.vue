<template>
    <div class="text">
        {{ text }}
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import { type RootState } from "@/shared";

const store = useStore<RootState>();
const total = computed(() => store.state["movies"]["pagination"]["total"]);
const searchValue = computed(() => store.state["movies"]["pagination"]["s"]);
const errorMessage = computed(() => store.state["movies"]["errorMessage"]);

const text = computed(
    () =>
        errorMessage.value ||
        (searchValue.value
            ? `You searched for: ${searchValue.value}, ${total.value} results found`
            : "Please, enter the search value for searching"),
);
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.text {
    @include font-styles($black-color, 20px, 800);
}
</style>
