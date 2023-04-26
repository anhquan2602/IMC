import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)
app.use(VueSplide);
app.use(router);
app.mount('#app')