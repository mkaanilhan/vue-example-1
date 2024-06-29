import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router