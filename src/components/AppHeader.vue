<template>
    <div>
        <nav class="navbar navbar-fixed-top navbar-inverse" style="background-color: #2b3c54;">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/">KolmarVine</router-link>
                </div>
                <ul class="nav navbar-nav">
                    <li><router-link to="/about">O nama</router-link></li>
                    <li><router-link to="/photos">Fotografije</router-link></li>
                    <li><router-link to="/downloads">Dokumenta</router-link></li>
                    <li><router-link to="/contact">Kontakt</router-link></li>
                </ul>
                <!--<ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>-->
            </div>
        </nav>
    </div>
</template>


<script>

    export default {
        name: "AppHeader",
        components: {
        },
    }
</script>


<style scoped>
    .navbar {
        border-radius: 0px;
    }
</style>

