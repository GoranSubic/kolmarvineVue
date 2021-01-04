<template>
    <div class="downloads container" id="parentScrollelm">
        <carousel-image pageTitle="Preuzmite korisničko uputstvo"></carousel-image>
        <div id="scrollelm">
            <div class="content">
                    <h2>Stranica u izradi!</h2>
                    <div class="row">
                        <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6"
                             v-for="document in downloads" v-bind:key="document.id">
                            <document-card v-bind:document="document"></document-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    // @ is an alias to /src
    import DocumentCard from "@/components/DocumentCard.vue"
    import CarouselImage from "@/components/CarouselImage.vue"

    export default {
        name: 'Downloads',
        metaInfo: {
            // title will be injected into parent titleTemplate
            title: 'Dokumenta',
            meta: [
                {
                    name: 'description',
                    //content: postMethod(),
                    content: "Pogledajte i preuzmite korisničko uputstvo",
                },
                {
                    name: 'keywords',
                    content: "korisničko, uputstvo, lift, ugradnja, zamena, kabine, kabina, automatskih, bus, vrata, komande, lifta, izvođača, radova",
                },
                {
                    name: 'robots',
                    content: "noindex, nofollow",
                }
            ]
        },
        props: {
            downloads: Array
        },
        components: {
            DocumentCard,
            CarouselImage
        }
    }
</script>

<style scoped>
    #scrollelm {
        margin: 30vh auto auto auto;
        font-size: 15px;
        line-height: 18px;
    }

    .container h2 {
        font-size: 50px;
        color: #ff0000;
        -webkit-text-fill-color: white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #ff0000;
        /*color: #ff0000;*/
        text-shadow: 3px 5px 5px #2b3c54;
        font-weight: bold;
        margin: 50px;
        filter: grayscale(50%);
    }

</style>
