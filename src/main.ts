import { createApp } from "vue";
import { router, store } from "./app";
import App from "./app/ui/App.vue";

import "@/shared/styles/index.scss";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
