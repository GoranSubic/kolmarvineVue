<template>
    <div class="contact container" id="parentScrollelm">
        <carousel-image pageTitle="Kontaktirajte nas u svako doba dana"
                        ></carousel-image>
        <div id="scrollelm">
            <div class="row">
                <div class="col-md-12 content">
                    <h1>Kontakt stranica</h1>

                    <div class="wpb_wrapper">
                        <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">

                                <p><b>Kolmar Vine</b></p>
                                <p>Vlasnik: Daniel Vince</p>
                                <p>Telefon: 064/101-97-90</p>
                                <p>Email: kolmar.vine@gmail.com</p>
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
                            </div>
                        </div>
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
        components: {
            CarouselImage
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
        margin: 0;
        border: 0;
    }

    /*.wpb_wrapper p {
        padding-bottom: 1.5em;
    }*/

    .wpb_wrapper p span {
        padding-left: 4em;
    }

    #scrollelm {
        margin: 30vh auto 0 auto;
        font-size: 1.5em;
        line-height: 1em;
    }

</style>

