<template>
    <div class="header-container">
        <config-site-name
            class="config-site-name"
            :site_name="config.site_name"
        />
        <movies-search class="movies-search" />
        <config-user-info
            class="config-user-info"
            :first_name="config.first_name"
            :last_name="config.last_name"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import { MoviesSearch } from "@/features";
import { ConfigSiteName, ConfigUserInfo } from "@/entities";
import { type RootState } from "@/shared";

const store = useStore<RootState>();
const config = computed(() => store.state["config"]);
</script>

<style scoped lang="scss">
@import "@/shared/styles";

.header-container {
    @include flex(space-between, center);
    gap: 50px;

    .movies-search {
        flex-grow: 1;
    }
    @media (max-width: 700px) {
        gap: 20px;
    }
}
</style>
