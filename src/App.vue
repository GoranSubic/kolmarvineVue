<template>
    <div id="app">
        <app-header></app-header>
        <router-view v-bind:downloads="downloads" />
    </div>
</template>

<script>
    import AppHeader from "@/components/AppHeader.vue"

    export default {
        components: {
            AppHeader
        },
    data: function() {
        return {
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
