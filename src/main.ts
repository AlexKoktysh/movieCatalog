import { createApp } from "vue";

import { App, router, store } from "@/app";

import "@/shared/styles/index.scss";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
