<template>
    <fieldset
        :class="[styles.fieldset, isFocused || search ? styles.focused : '']"
    >
        <legend
            :class="[styles.legend, isFocused && search ? styles.focused : '']"
        >
            {{ placeholder }}
        </legend>
        <input
            :value="search"
            @input="updateValue($event)"
            @focus="isFocused = true"
            @blur="isFocused = false"
        />
    </fieldset>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

interface Props {
    placeholder: string;
    search: string;
}
const { placeholder, search } = defineProps<Props>();
const emit = defineEmits(["update:value"]);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit("update:value", target.value);
};

const styles = {
    fieldset: "fieldset",
    focused: "focused",
    legend: "legend",
};

const isFocused = ref(false);
</script>

<style scoped lang="scss">
@import "./../styles/index.scss";

.fieldset {
    border: none;
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
}
.legend {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.2s;
    pointer-events: none;
    @include font-styles($black-color, 14px, 600);
    font-style: italic;
    background: $white-color;
    z-index: 100;
    border-radius: 5px;
    width: auto;
    padding: 0 5px;
}
.focused .legend {
    top: 2px;
    font-size: 12px;
    z-index: 100;
}

input,
input:active {
    border: 1px solid $gray-border;
    outline: none;
}

input::placeholder {
    @include font-styles($black-color, 14px, 600);
    font-style: italic;
}
</style>
