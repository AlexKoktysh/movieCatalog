<template>
    <div class="header-container">
        <site-name :site_name="config.site_name" />
        <search-component
            :search="searchMovie"
            @update:value="updateSearchMovie"
        />
        <user-info
            :first_name="config.first_name"
            :last_name="config.last_name"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
import { useStore } from "vuex";
import { type RootState } from "../../../shared";

const SiteName = defineAsyncComponent(
    () => import("../../../entities/config/ui/SiteName.vue"),
);
const SearchComponent = defineAsyncComponent(
    () => import("../../movies/ui/Search.vue"),
);
const UserInfo = defineAsyncComponent(
    () => import("../../../entities/config/ui/UserInfo.vue"),
);

const store = useStore<RootState>();
const config = computed(() => store.state["config"]);

const searchMovie = ref("");

const updateSearchMovie = (text: string) => {
    searchMovie.value = text;
};
</script>

<style scoped lang="scss">
@import "../../../shared/styles/index.scss";

.header-container {
    @include flex(space-between, center);
}
</style>
