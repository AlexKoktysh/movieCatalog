<template>
    <fieldset
        :class="[
            customClassNames.fieldset,
            isFocused || value ? customClassNames.focused : '',
        ]"
    >
        <legend
            :class="[
                customClassNames.legend,
                isFocused && value ? customClassNames.focused : '',
            ]"
        >
            {{ placeholder }}
        </legend>
        <input
            :value="value"
            @input="updateValue($event)"
            @focus="isFocused = true"
            @blur="isFocused = false"
        />
    </fieldset>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

interface IProps {
    placeholder: string;
    value: string;
}
const { placeholder, value } = defineProps<IProps>();
const emit = defineEmits(["update:value"]);

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit("update:value", target.value);
};

const customClassNames = {
    fieldset: "fieldset",
    focused: "focused",
    legend: "legend",
};

const isFocused = ref(false);
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.fieldset {
    border: none;
    padding: 0;
    margin: 0;
    position: relative;
}
.legend {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.2s;
    pointer-events: none;
    @include font-styles($gray-text, 14px, 600);
    font-style: italic;
    background: $white-color;
    border-radius: 5px;
    width: auto;
    padding: 0 5px;
}
.focused .legend {
    top: 2px;
    @include font-styles($gray-text, 12px, 600);
}

input {
    border: 1px solid $gray-border;
    border-radius: 8px;
    width: calc(100% - 20px);
}
input:active,
input:focus {
    border: 1px solid $primary-color;
}

input,
input:active {
    outline: none;
    padding: 10px;
}
</style>
