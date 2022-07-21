import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import userStore from "./models/api/user";

const app = createApp(App);

app.use(router);
app.use(userStore);
app.mount("#app");
