import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
//import store from './store';

import "@/assets/style.css"
import appHeader from "@/components/appHeader.vue"

const app = createApp(App);

app.component("appHeader", appHeader);
app.use(router);
//app.use(store)
app.mount('#app');