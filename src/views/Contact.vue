<template>
    <div class="contact container" id="parentScrollelm">
        <carousel-image pageTitle="Kontakt stranica"
                        ></carousel-image>
        <div id="scrollelm">
            <div class="content">
                <h2>Kontaktirajte nas u svako doba dana</h2>
                <div class="row">
                    <div class="wpb_wrapper col-12 col-md-6">
                        <address>
                            <p><b>Kolmar Vine</b></p>
                            <p>Vlasnik: Daniel Vince</p>
                            <p>Telefon: <a href="tel:+381641019790">064/101-97-90</a></p>
                            <p>Email: <a href="mailto:kolmar.vine@gmail.com">kolmar.vine@gmail.com</a></p>
                            <p>
                                Adresa:<br>
                                <span>Bulevar Oslobođenja 35</span><br>
                                <span>Janka Čmelika 125</span><br>
                                <span>21000 Novi Sad</span><br>
                                <span>Srbija</span>
                            </p>
                            <p>
                                Radno vreme: Pon-Ned 24h
                            </p>
                        </address>
                    </div>

                    <div class="wpb_wrapper col-12 col-md-6">
                        <p><b>Pronađite nas</b></p>
                        <GmapMap :center="center"
                                 :zoom="14">
                            <GmapMarker :position="markerPosition" />
                        </GmapMap>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>


<script>
    import CarouselImage from "@/components/CarouselImage.vue"
    export default {
        name: "Contact",
        metaInfo() {
            return {
                // title will be injected into parent titleTemplate
                title: 'Kontakt',
                meta: [
                    {
                        name: 'description',
                        content: `Kolmar Vine Liftovi
                            Vlasnik: Daniel Vince
                            Telefon: 064/101-97-90
                            Email: kolmar.vine@gmail.com
                            Radno vreme: Pon-Ned 24h`,
                    }
                ]
            }
        },
        components: {
            CarouselImage
        },
        data() {
            return {
                center: {
                    lat: 45.2605,
                    lng: 19.8326
                },
                markerPosition: {
                    lat: 45.2605,
                    lng: 19.8326
                }
            }
        }
    }
</script>


<style scoped>
    .wpb_wrapper {
        text-align: left;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        outline: 0;
        padding: 0;
        margin: 30px 0 30px 0;
        border: 0;
    }

    .wpb_wrapper p span {
        padding-left: 4em;
    }

    #scrollelm {
        margin: 30vh auto 0 auto;
        font-size: 1.5em;
        line-height: 1em;
    }

    .vue-map-container {
        min-height: 300px;
        margin: 10px;
    }
</style>

