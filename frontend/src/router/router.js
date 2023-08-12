import * as Vue from 'vue';

// Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Views
import Home from '../views/home/Home.vue';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import NotFound from '../views/notFound/NotFound.vue';

const routes = [
    { path: '/', component: Register },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
