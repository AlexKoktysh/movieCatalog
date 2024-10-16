<template>
    <div class="pagination">
        <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="btn btn__primary"
        >
            Previous
        </button>
        <button
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            class="btn"
            :class="{
                btn__primary__active: page === currentPage,
                btn__primary: page !== noContentBtn,
                not_click: page === noContentBtn,
            }"
        >
            {{ page }}
        </button>
        <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="btn btn__primary"
        >
            Next
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";

const noContentBtn = "...";
const { currentPage, totalPages } = defineProps<{
    currentPage: number;
    limit: number;
    totalPages: number;
}>();

const emit = defineEmits<{
    (e: "update:currentPage", newPage: number): void;
}>();

const visiblePages = computed(() => {
    const total = totalPages;
    const current = currentPage;
    const maxVisible = 10;

    if (total <= maxVisible) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    const start = Math.max(
        1,
        Math.min(current - Math.floor(maxVisible / 2), total - maxVisible + 1),
    );
    const end = Math.min(total, start + maxVisible - 1);
    const pages: (number | string)[] = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i,
    );

    if (start > 1) {
        pages.unshift(noContentBtn);
        pages.unshift(1);
    }

    if (end < total) {
        pages.push(noContentBtn);
        pages.push(total);
    }

    return pages;
});

const prevPage = () => {
    if (currentPage > 1) {
        emit("update:currentPage", currentPage - 1);
    }
};

const nextPage = () => {
    if (currentPage < totalPages) {
        emit("update:currentPage", currentPage + 1);
    }
};

const goToPage = (page: number | string) => {
    if (typeof page === "number") {
        emit("update:currentPage", page);
    }
};
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.pagination {
    @include flex(center, center);
    gap: 10px;
    .not_click {
        cursor: not-allowed;
    }
}
</style>
