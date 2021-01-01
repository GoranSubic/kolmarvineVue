<template>
    <div class="photos container" id="parentScrollelm">
        <carousel-image pageTitle="Fotografije"></carousel-image>
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
            title: 'Fotografije'
        },
        data() {
            return {
                width: 600,
                height: 400,
                responsive: true,
                disableImageClick: false,
                items: [{
                    src: require(`@/assets/images/gallery/lift11.jpg`),
                    thumbnail: require('@/assets/images/gallery/lift11.jpg'),
                    caption: 'Some Caption',
                    id: 'someid1'
                },
                {
                    src: require(`@/assets/images/gallery/lift12.jpg`),
                    thumbnail: require('@/assets/images/gallery/lift12.jpg'),
                },
                {
                    id: 'someid1', src: 'https://picsum.photos/600/400/?image=20',
                    thumbnail: 'https://picsum.photos/64/64/?image=20',
                    alt: 'Some alt text',
                    caption: 'Some Caption'
                },
                {
                    id: 'someid2', src: 'https://picsum.photos/600/400/?image=30',
                    thumbnail: 'https://picsum.photos/64/64/?image=30',
                    alt: 'Another alt text',
                    caption: 'Another Caption'
                },
                {
                    id: 'someid3', src: 'https://picsum.photos/400/600/?image=50',
                    thumbnail: 'https://picsum.photos/64/64/?image=50'
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
        margin: 30vh auto 0 auto;
        font-size: 1.5em;
        line-height: 1em;
    }

    p {
        margin-top: 3em;
        text-align: justify;
    }
</style>
