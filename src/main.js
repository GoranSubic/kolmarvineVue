import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGtag from "vue-gtag";

require('dotenv').config()

Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCRzYjK2J4lVHUFxa4ioppDACocBvyIo4c',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
})

Vue.use(VueGtag, {
    config: {
        id: process.env.VUE_APP_ENV_GOOGLE_ANALYTICS_KEY,
        params: { anonymize_ip: true }
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
