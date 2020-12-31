<template>
    <div class="downloads container" id="parentScrollelm">
        <carousel-image pageTitle="Preuzmite korisničko uputstvo"></carousel-image>
        <div id="scrollelm">
            <div class="row">
                <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6"
                     v-for="document in downloads" v-bind:key="document.id">
                    <document-card v-bind:document="document"></document-card>
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
            title: 'Dokumenta'
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
</style>
