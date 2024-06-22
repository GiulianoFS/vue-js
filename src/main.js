import { createApp } from 'vue'
import App from './App.vue'
import Axios from './plugins/axios'

const app = createApp(App);

app.config.globalProperties.$axios = Axios;

app.mount('#app');