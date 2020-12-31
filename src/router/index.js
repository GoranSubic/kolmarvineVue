import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Downloads from '../views/Downloads.vue'
import Photos from '../views/Photos.vue'
import Contact from '../views/Contact.vue'
import SingleDocument from '../views/SingleDocument.vue'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Home
    },
    {
        path: '/kontakt',
        name: 'Kontakt',
        component: Contact
    },
    {
        path: '/fotografije',
        name: 'Fotografije',
        component: Photos
    },
    {
        path: '/dokumenta',
        name: 'Dokumenta',
        component: Downloads
    },
    {
        path: '/dokument/:id',
        name: 'Dokument',
        component: SingleDocument
    },
    {
    path: '/onama',
    name: 'ONama',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes, mode: 'history'
})

export default router
