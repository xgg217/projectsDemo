import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import FightingDesign from "fighting-design";
import "fighting-design/dist/index.css";

const app = createApp(App);

app.use(FightingDesign);
app.use(router);

app.mount("#app");
