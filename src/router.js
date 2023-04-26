import { createRouter, createWebHashHistory } from "vue-router";
import api from "../src/layouts/api.vue"
import Home from "./pages/Home.vue"
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/api',
        name: 'api',
        component: api
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;