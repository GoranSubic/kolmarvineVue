<template>
    <div class="singled container" id="parentScrollelm">
        <carousel-image :pageTitle="document.name"></carousel-image>
        <div id="scrollelm">
            <img v-bind:src="document.photo" />
            <!--<h1>{{document.name}}</h1>-->
            <h5>Short description:</h5><h6>{{document.descrption}}</h6>
            <h3 v-if="document.type == 'free'">
                <router-link v-bind:to="'/pdf/' + document.document" target="_blank">
                    Preuzmi pdf
                </router-link>
            </h3>
            <h3 v-else>
                <router-link v-bind:to="'/kontakt'">Poru?i fajl</router-link>
            </h3>
            <h4 v-if="document.type != 'free'">{{document.price}} RSD</h4>
        </div>
    </div>
</template>

<script>
    import CarouselImage from "@/components/CarouselImage.vue"

    export default {
        name: "SingleDocument",
        metaInfo: {
            // title will be injected into parent titleTemplate
            title: 'Dokument',
            meta: [
                {
                    name: 'description',
                    //content: postMethod(),
                    content: "Dokument za preuzimanje.",
                },
                {
                    name: 'keywords',
                    content: "lift, dokument, uputstvo, preuzimanje",
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
            CarouselImage
        },
        computed: {
            document: function() {
                for (let i = 0; i < this.downloads.length; i++) {
                    if (this.downloads[i].id == this.$route.params.id) {
                        return this.downloads[i];
                    }
                }
                return false;
            }
        }
    }
</script>

<style scoped>
    #scrollelm {
        margin: 30vh auto auto auto;
        font-size: 15px;
        line-height: 18px;
    }
    .singled {
        margin: 100px auto 0 auto;
        font-size: 15px;
        line-height: 18px;
    }
</style>

