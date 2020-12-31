<template>
    <nav class="bg-dark navbar navbar-expand-lg navbar-dark" id="mainNavbar">
        <router-link class="navbar-brand" to="/">KolmarVine</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/onama">O nama</router-link>    
                </li>
                <li class="nav-item">
                    <router-link to="/fotografije">Fotografije</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dokumenta">Dokumenta</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/kontakt">Kontakt</router-link>
                </li>
            </ul>
            <ul class="navbar-nav nav-flex-icons">
                <li class="nav-item">
                    <a href="https://www.facebook.com/liftovikolmar.vine/" target="_blank" class="nav-link"><i class="fab fa-facebook"> </i></a>
                </li>
                <li class="nav-item">
                    <a href="https://www.instagram.com/" target="_blank" class="nav-link"><i class="fab fa-instagram"> </i></a>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>

    export default {
        name: "AppHeader",
        components: {
        },
    }
</script>


<style scoped>
    nav a {
        color: #fff;
    }
    
    .navbar {
        border-radius: 0px;
    }

    #mainNavbar {
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 2;
        min-height: 40px;
        background-color: #2b3c54 !important;
    }

    .navbar-brand {
        /*content: url("../media/logo.png");*/
        width: 65px;
        display: inline-block;
        opacity: 0.8;
        padding: 0 10px 0 10px;
    }

    #navbarSupportedContent {
        padding-left: 10px;
        margin-left: 50px;
    }
    #navbarSupportedContent li {
        margin-left: 30px;
    }

    .footer {
        flex-grow: 0;
        display: block;
    }
</style>

