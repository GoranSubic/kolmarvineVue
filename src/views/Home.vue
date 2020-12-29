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

                    <h1>Servis remont i modernizacija svih tipova liftova</h1>

                    <div class="wpb_content_element">
                        <div class="wpb_wrapper">
                            <ul>
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        Kolmar Vine liftovi su orijentisani ka modernizaciji i remontu svih tipova liftova. Radimo montažu novih i servis postojećih. Usluge montaže i popravke lifta pružamo kako krajnjim korisnicima tako i drugim preduzećima za održavanje. Ako je lift zastareo i nema mogućnosti zamene novim pružamo usluge radova na modernizaciji i remontu.                                 
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="wpb_content_element">
                        <div class="wpb_wrapper">
                            <ul>
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        Kod modernizacije liftova nudimo usluge zamene kabine sa ugradnjom automatskih vrata. 
                                        Zamena komandnog ormana sa kompletnom elektroinstalacijom i pozivima.
                                        Zamena dotrajalih automatskih vrata kao i ugradnju novih na postojeće kabine.
                                        Sva oprema koja se ugrađuje je proverenog kvaliteta i namenski prilagođena postojećem objektu.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="wpb_content_element">
                        <div class="wpb_wrapper">
                            <ul>
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        Dajemo savete klijentima oko odabira najboljeg rešenja za postojeći objekat.
                                        Budite slobodni da nas kontaktirate.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="wpb_content_element">
                        <div class="wpb_wrapper">
                            <ul>
                                <li style="text-align: justify;">
                                    <span style="color: #ffffff;">
                                        Stambenim zajednicama dajemo mogućnost odloženog plaćanja za veće radove.
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

    .wpb_content_element {
        margin: 50px;
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        background-color: #2b3c54;
    }
</style>
