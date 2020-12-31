<template>
    <div id="app">
        <app-header></app-header>
        <router-view v-bind:downloads="downloads" v-bind:postdata="postdata" />
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from "@/components/AppHeader.vue"
    import AppFooter from "@/components/AppFooter.vue"

    export default {
        components: {
            AppHeader,
            AppFooter,
        },
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: 'Kolmar Vine Liftovi',
            // all titles will be injected into this template
            titleTemplate: '%s | Kolmar Vine Liftovi'
        },
        data: function() {
            return {
                postdata: [
                    {
                        id: 0,
                        body: "Kolmar Vine liftovi su orijentisani ka modernizaciji i remontu svih tipova liftova. Radimo montažu novih i servis postojećih. Usluge montaže i popravke lifta pružamo kako krajnjim korisnicima tako i drugim preduzećima za održavanje. Ako je lift zastareo i nema mogućnosti zamene novim pružamo usluge radova na modernizaciji i remontu.",
                    },
                    {
                        id: 1,
                        body: `Kod modernizacije liftova nudimo usluge zamene kabine sa ugradnjom automatskih vrata. 
                                        Zamena komandnog ormana sa kompletnom elektroinstalacijom i pozivima.
                                        Zamena dotrajalih automatskih vrata kao i ugradnju novih na postojeće kabine.
                                        Sva oprema koja se ugrađuje je proverenog kvaliteta i namenski prilagođena postojećem objektu.`
                    },
                    {
                        id: 2,
                        body: "Dajemo savete klijentima oko odabira najboljeg rešenja za postojeći objekat. Budite slobodni da nas kontaktirate.",
                    },
                    {
                        id: 3,
                        body: "Stambenim zajednicama dajemo mogućnost odloženog plaćanja za veće radove.",
                    },
                ],
                downloads: [
                    {
                        "id": 0,
                        "type": "free",
                        "name": "Frenic Lift",
                        "document": "FRENIC-Lift.pdf",
                        "price": 0,
                        "photo": require("@/assets/images/default-document.jpg"),
                        "descrption": "Lorem ips uu mm djsllj dsljj jdfljs hdf d;jj."
                    },
                    {
                        "id": 1,
                        "type": "free",
                        "name": "En Acl30 Elevator Drive",
                        "document": "EN_ACL30_elevatordrive.pdf",
                        "price": 0,
                        "photo": require("@/assets/images/default-document.jpg"),
                        "descrption": "Lorem ips uu mm djsllj dsljj jdfljs hdf d;jj."
                    },
                    {
                        "id": 2,
                        "type": "price",
                        "name": "Frenic Lift",
                        "document": "@/assets/pdf/FRENIC-Lift.pdf",
                        "price": "1000,00",
                        "photo": require("@/assets/images/default-document.jpg"),
                        "descrption": "Lorem ips uu mm djsllj dsljj jdfljs hdf d;jj."
                    },
                    {
                        "id": 3,
                        "type": "price",
                        "name": "En Acl30 Elevator Drive",
                        "document": "@/assets/pdf/EN_ACL30_elevatordrive.pdf",
                        "price": "2000,00",
                        "photo": require("@/assets/images/default-document.jpg"),
                        "descrption": "Lorem ips uu mm djsllj dsljj jdfljs hdf d;jj."
                    },
                ]
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Segoe Print', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

a {
  /*font-weight: bold;*/
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
