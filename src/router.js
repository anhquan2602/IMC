import { createRouter, createWebHashHistory } from "vue-router";
import Price from "../src/layouts/Price.vue"
import Home from "./pages/Home.vue"
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/price',
        name: 'price',
        component: Price
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;