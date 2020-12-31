<template>
    <div @scroll="scrollMe">
        <!--<div id="scrollcounter">0px</div>-->
        <div class="header" id="headerimage" :style="headerHeight">
            <div class="headertext">
                <h1>{{ pageTitle }}</h1>
                <div class="subtitle" id="subtitleBox">
                    <div class="sub1"><span>{{ pageSubtitle1 }}</span></div>
                    <div class="sub2"><span>{{ pageSubtitle2 }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "CarouselImage",
        props: {
            pageTitle: String,
            pageSubtitle1: String,
            pageSubtitle2: String,
            headerHeight: String
        },
        created: function () {
            window.addEventListener("scroll", this.scrollMe);
        },
        methods: {
            scrollMe: function () {
                //var scrolledElem = document.getElementById("scrollelm");
                var scrolledValue = window.scrollY;// scrolledElem.offsetTop - window.scrollY;

                var topElem = document.getElementById("headerimage");
                if (scrolledValue >= 50) {
                    topElem.classList.add('slim');
                    document.getElementById("subtitleBox").classList.add('hide');
                } else {
                    topElem.classList.remove('slim');
                    document.getElementById("subtitleBox").classList.remove('hide');
                }

                //var scrlCounter = document.getElementById("scrollcounter");
                //scrlCounter.innerHTML = scrolledValue + "px";
            }
        }
    }
</script>


<style scoped>
    .header {
        height: 15vh;
        width: 100%;
        top: 50px;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 1;
        background-image: url('~@/assets/images/header1.jpg');
        filter: grayscale(50%);
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
        transition-duration: 0.5s;
    }

        .header .headertext {
            position: absolute;
            top: 50%;
        }

        .header h2, .header h1 {
            font-size: 50px;
            color: #ff0000;
            -webkit-text-fill-color: white; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #ff0000;
            /*color: #ff0000;*/
            text-shadow: 3px 5px 5px #2b3c54;
            margin: -50px 0 10px 100px;
            left: 0;
            right: 0;
            text-align: left;
            font-weight: bold;
        }

        .header div.subtitle {
            font-size: 35px;
            color: #2b3c54;
            /*text-shadow: 3px 5px 5px black;*/
            margin: 10px 0 0 100px;
            left: 0;
            right: 0;
            text-align: left;
            font-weight: bold;
        }
    .header #subtitleBox {
        overflow: hidden;
        transition: all .5s ease-in-out;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
    }
    .header #subtitleBox.hide {
        height: 0px !important;
    }

    .header.slim {
        height: 15vh !important;
    }

    .header #subtitleBox span {
        background-color: white;
    }

    /*#scrollelm {
        margin: 300px auto 0 auto !important;
        font-size: 15px;
        line-height: 18px;
    }*/

    /*#scrollcounter {
        position: fixed;
        top: 40px;
        right: 40px;
        background: red;
        padding: 10px;
        color: #fff;
        z-index: 999;
    }*/
</style>
