import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Downloads from '../views/Downloads.vue'
import Photos from '../views/Photos.vue'
import Contact from '../views/Contact.vue'
import SingleDocument from '../views/SingleDocument.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/photos',
        name: 'Photos',
        component: Photos
    },
    {
        path: '/downloads',
        name: 'Documents',
        component: Downloads
    },
    {
        path: '/document/:id',
        name: 'Document',
        component: SingleDocument
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
