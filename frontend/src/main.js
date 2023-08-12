import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Vue Router
import router from './router/router'

// Vue Toastify
import Vue3Toastify from 'vue3-toastify';

const app = createApp(App);
app.use(router);
app.use(Vue3Toastify, { autoClose: 6000 });
app.mount('#app');
