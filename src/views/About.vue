<template>
    <div class="about container" id="parentScrollelm">
        <carousel-image pageTitle="O nama"></carousel-image>
        <div id="scrollelm">
            <div class="row">
                <div class="col-md-12 content">
                    <div class="wpb_content_element">
                        <div class="wpb_wrapper">
                            <h2>O firmi</h2>
                            <ul v-for="about in aboutdata" v-bind:key="about.id">
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        {{about.info}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="wpb_content_element">
                        <div class="wpb_wrapper">
                            <h2>Reference</h2>
                            <h3 v-if="referbuildings.length">Stambene zajednice:</h3>
                            <ul v-for="building in referbuildings" v-bind:key="building.id">
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        <span class="col-12 col-sm-6 col-md-6">
                                            {{building.title}}
                                        </span>
                                        <span class="workdesc col-12 col-sm-6 col-md-6">
                                            {{building.work}}
                                        </span>
                                    </span>
                                </li>
                            </ul>

                            <h3 v-if="referfirms.length">Poslovni objekti:</h3>
                            <ul v-for="firm in referfirms" v-bind:key="firm.id">
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        <span class="col-12 col-sm-6 col-md-6">
                                            {{firm.title}}
                                        </span><span class="workdesc col-12 col-sm-6 col-md-6">
                                            {{firm.work}}
                                        </span>
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
        name: 'About',
        metaInfo() {
            return {
                // title will be injected into parent titleTemplate
                title: 'O nama',
                meta: [
                    {
                        name: 'description',
                        //content: postMethod(),
                        content: "Mi smo malo preduzeće sa velikim potencijalom što potvrđuje veliki broj zadovoljnih klijenata.",
                    }
                ]
            }
        },
        props: {
            aboutdata: Array,
            referbuildings: Array,
            referfirms: Array
        },
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

    h2 {
        color: white;
        text-align: left;
    }
    
    h3 {
        color: white;
        text-align: left;
        margin-left: 10px;
    }

    ul {
        overflow: hidden;
    }

    li {
        min-height: 30px;
    }

    .wpb_content_element {
        margin: 50px 0 50px 0;
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        /*padding-left: 20px;*/
        background-color: #2b3c54;
    }

    span.workdesc {
        font-size: medium;
        font-style: italic;
    }
</style>
