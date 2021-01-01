<template>
    <div id="app">
        <app-header></app-header>
        <router-view 
                     v-bind:downloads="downloads" 
                     v-bind:postdata="postdata" 
                     v-bind:aboutdata="about_data" 
                     v-bind:referbuildings="refer_buildings" 
                     v-bind:referfirms="refer_firms" 
        />
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
                about_data: [
                    {
                        id: 40,
                        info: "Kolmar Vine je preduzeće koje je osnovano od strane Vince Daniela, preduzetnika i izvođača radova sa dugogodišnjim iskustvom u radu na liftovima.",
                    },
                    {
                        id: 41,
                        info: "Mi smo malo preduzeće sa velikim potencijalom što potvrđuje veliki broj zadovoljnih klijenata.",
                    },
                ],
                refer_buildings: [
                    {
                        id: 0,
                        title: "Bulevar Oslobođenja 35",
                        work: "zamena kabine"
                    },
                    {
                        id: 1,
                        title: "Bulevar Oslobođenja 37",
                        work: "komanda i kabina"
                    },
                    {
                        id: 2,
                        title: "Bulevar Oslobođenja 145",
                        work: "komanda i kabina"
                    },
                    {
                        id: 3,
                        title: "Bulevar Oslobođenja 149",
                        work: "zamena kabine"
                    },
                    {
                        id: 4,
                        title: "Bulevar Oslobođenja 151",
                        work: "zamena kabine"
                    },
                    {
                        id: 5,
                        title: "Bulevar Oslobođenja 66a",
                        work: "ugradnja bus vrata"
                    },
                    {
                        id: 6,
                        title: "Cara Lazara 83",
                        work: "komanda i kabina"
                    },
                    {
                        id: 7,
                        title: "Cankareva 13",
                        work: "zamena automatskih vrata"
                    },
                    {
                        id: 8,
                        title: "Cara Dušana 57",
                        work: "zamena komande"
                    },
                    {
                        id: 9,
                        title: "Cara Dušana 82",
                        work: "zamena komande"
                    },
                    {
                        id: 10,
                        title: "Ilija Ognjanovića 4",
                        work: "zamena komande i ugradnja bus vrata"
                    },
                    {
                        id: 11,
                        title: "Kraljevića Marka 20",
                        work: "zamena automatskih vrata"
                    },
                    {
                        id: 12,
                        title: "Kraljevića Marka 60",
                        work: "zamena komande"
                    },
                    {
                        id: 13,
                        title: "Hadži Ruvimova 51",
                        work: "zamena komande i automatskih vrata"
                    },
                    {
                        id: 14,
                        title: "Slovačka 15",
                        work: "zamena automatskih vrata"
                    },
                    {
                        id: 15,
                        title: "Turgenjeva 15",
                        work: "zamena komande i ugradnja automatskih vrata"
                    },
                    {
                        id: 16,
                        title: "Jovana Subitića 15",
                        work: "zamena komande i automatskih vrata"
                    },
                    {
                        id: 17,
                        title: "Rumenačka 43",
                        work: "zamena komande i automatskih vrata"
                    },
                    {
                        id: 18,
                        title: "Braće Dronjak 7",
                        work: "zamena komande i ugradnja bus vrata"
                    },
                    {
                        id: 19,
                        title: "Maksima Gorkog 1",
                        work: "zamena prilaznih vrata"
                    },
                    {
                        id: 20,
                        title: "Maksima Gorkog 1a",
                        work: "zamena komande"
                    },
                    {
                        id: 21,
                        title: "Žarka Vasiljevića 18",
                        work: "zamena komande"
                    },
                    {
                        id: 22,
                        title: "Kosančić Ivana 8",
                        work: "zamena komande"
                    },
                ],
                refer_firms: [
                    {
                        id: 30,
                        title: "Biospringer Senta",
                        work: "zamena komande"
                    },
                    {
                        id: 31,
                        title: "Agrovojvodina Novi Sad",
                        work: "zamena komande"
                    },
                    {
                        id: 32,
                        title: "TDM Voće Bačka Palanka",
                        work: "zamena komande"
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
