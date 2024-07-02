import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import UserDetails from '../views/UserDetails.vue'



const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',

    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'Contact',
        beforeEnter(to, from) {

            //   console.log(to.name)


            //  if (from.name === 'Home') console.log('home')


        }
    },
    {
        path: '/contact/:id',
        component: UserDetails,
        name: 'UserDetails',
        props: true,
        beforeEnter(to, from) {

            console.log(to)
            console.log(from)




        }
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router