<template>
    <div class="about container" id="parentScrollelm">
        <carousel-image pageTitle="Usluge koje pružamo"></carousel-image>
        <div id="scrollelm">
            <div class="row">
                <div class="col-md-12 content">
                    <h1>MODERNIZACIJA I REMONT SVIH TIPOVA LIFTOVA</h1>
                    <p>
                        Orijentisani smo ka modernizaciji i remontu svih tipova liftova.
                        Radimo montažu novih i servis postojećih. Usluge montaže i popravke lifta pružamo kako krajnjim korisnicima tako i drugim preduzećima za održavanje. Ako je lift zastareo i nema mogućnosti zamene novim pružamo usluge radova na modernizaciji i remontu.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CarouselImage from "@/components/CarouselImage.vue"

    export default {
        name: 'About',
        components: {
            CarouselImage
        }
    }
</script>

<style scoped>
    #scrollelm {
        margin: 30vh auto 0 auto;
        font-size: 1.5em;
        line-height: 1em;
    }

    p {
        margin-top: 3em;
        text-align: justify;
    }
</style>
