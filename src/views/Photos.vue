<template>
    <div class="photos container" id="parentScrollelm">
        <carousel-image pageTitle="Fotografije radova"></carousel-image>
        <div id="scrollelm">
            <div class="row">
                <div class="col-md-12 content">
                    <lingallery :addons="{ enableLargeView: false }" :iid.sync="currentId" :width="width" :height="height" :items="items" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import CarouselImage from "@/components/CarouselImage.vue"
    import Lingallery from 'lingallery';

    export default {
        name: 'Photos',
        metaInfo: {
            // title will be injected into parent titleTemplate
            title: 'Fotografije radova',
            meta: [
                {
                    name: 'description',
                    //content: postMethod(),
                    content: 'Fotografije radova. Zamena kabine, komande i kompletne el instalacije. Zamena komandnih ormana.',
                },
                {
                    name: 'keywords',
                    content: "Fotografije, radova, lift, ugradnja, zamena, kabine, kabina, automatskih, bus, vrata, komande, lifta, izvo?a?a, radova, elektro, el instalacije, ormana",
                },
                {
                    name: 'robots',
                    content: 'index, follow',
                }
            ]
        },
        data() {
            return {
                width: 800,
                height: 533,
                responsive: true,
                disableImageClick: false,
                items: [
                    {
                        id: '0',
                        src: require(`@/assets/images/gallery/lift1.jpg`),
                        thumbnail: require('@/assets/images/gallery/lift1.jpg'),
                        alt: 'Zamena kabine, komande i kompletne el instalacije',
                        caption: 'Zamena kabine, komande i kompletne el. instalacije',
                    },
                    {
                        id: '1',
                        src: require('@/assets/images/gallery/lift2.jpg'),
                        thumbnail: require('@/assets/images/gallery/lift2.jpg'),
                        alt: 'Zamena kabine, komande i kompletne el instalacije',
                        caption: 'Zamena kabine, komande i kompletne el. instalacije'
                    },
                    {
                        id: '2',
                        src: require('@/assets/images/gallery/lift3.jpg'),
                        thumbnail: require('@/assets/images/gallery/lift3.jpg'),
                        alt: 'Zamena prilaznih vrata',
                        caption: 'Zamena prilaznih vrata'
                    },
                    {
                        id: '3',
                        src: require('@/assets/images/gallery/lift4.jpg'),
                        thumbnail: require('@/assets/images/gallery/lift4.jpg'),
                        alt: 'Zamena kabinskih automatskih vrata',
                        caption: 'Zamena kabinskih automatskih vrata'
                    },
                    {
                        id: '4',
                        src: require('@/assets/images/gallery/lift5.jpg'),
                        thumbnail: require('@/assets/images/gallery/lift5.jpg'),
                        alt: 'Zamena komandnih ormana',
                        caption: 'Zamena komandnih ormana'
                    }
                    //currentId: null
                ]
            };
        },
            components: {
                CarouselImage,
                Lingallery
            }
    }
</script>

<style scoped>
    .photos #scrollelm .lingalleryContainer {
        text-align: center !important;
        margin: 0 0 0 20% !important;
    }
    #scrollelm {
        margin: 30vh auto 3vh auto;
        font-size: 1.5em;
        line-height: 1em;
    }

    p {
        margin-top: 3em;
        text-align: justify;
    }
</style>
