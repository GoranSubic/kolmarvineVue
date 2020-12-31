<template>
    <div class="home container" id="parentScrollelm">
        <carousel-image 
                        pageTitle="Kolmar Vine liftovi"
                        pageSubtitle1="modernizacija i remont liftova"
                        
                        headerHeight="height:100vh;"
                        />
        <div id="scrollelm">
            <div class="row">
                <div class="col-md-12 content">

                    <h2>Servis remont i modernizacija svih tipova liftova</h2>

                    <div class="wpb_content_element">
                        <div class="wpb_wrapper">
                            <ul v-for="post in postdata" v-bind:key="post.id">
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        {{post.body}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CarouselImage from "@/components/CarouselImage.vue"

    export default {
        name: 'Home',
        props: {
            postdata: Array
        },
        metaInfo() {
            return {
                title: 'Kolmar Vine Liftovi',
                // override the parent template and just use the above title only
                titleTemplate: null,
                meta: [
                    {
                        name: 'description',
                        //content: postMethod(),
                        content: this.postdata[2].body.slice(0, 113),
                    }
                ]
            }
        },
    components: {
        CarouselImage
        }
}
</script>

<style scoped>
    #scrollelm {
        margin: 50vh auto 0 auto;
        font-size: 1.5em;
        line-height: 1em;
    }

    li {
        min-height: 30px;
    }

        .wpb_content_element ul {
            margin: 50px 0 50px 0;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            /*padding-left: 20px;*/
            background-color: #2b3c54;
        }
</style>
