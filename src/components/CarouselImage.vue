<template>
    <div @scroll="scrollMe">
        <div id="scrollcounter">0px</div>
        <div class="header" id="headerimage" :style="headerHeight">
                <h2>{{ pageTitle }}</h2>
                <div class="subtitle">
                    <div class="sub1">{{ pageSubtitle1 }}</div>
                    <div class="sub2">{{ pageSubtitle2 }}</div>
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
                } else {
                    topElem.classList.remove('slim');
                }

                var scrlCounter = document.getElementById("scrollcounter");
                scrlCounter.innerHTML = scrolledValue + "px";
            }
        }
    }
</script>


<style scoped>
    .header {
        height: 30vh;
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

        .header h2 {
            font-size: 50px;
            color: #fff;
            text-shadow: 3px 5px 5px black;
            position: absolute;
            top: 40%;
            margin: -50px 0 0 100px;
            left: 0;
            right: 0;
            text-align: left;
        }

        .header div.subtitle {
            font-size: 35px;
            color: #fff;
            text-shadow: 3px 5px 5px black;
            position: absolute;
            top: 40%;
            margin: 0 0 0 100px;
            left: 0;
            right: 0;
            text-align: left;
        }
        .header div.subtitle.sub1 {
            text-align: left;
        }
        .header div.subtitle.sub2 {
            text-align: left;
        }
   .header.slim {
        height: 150px !important;
    }

    /*#scrollelm {
        margin: 300px auto 0 auto !important;
        font-size: 15px;
        line-height: 18px;
    }*/

    #scrollcounter {
        position: fixed;
        top: 40px;
        right: 40px;
        background: red;
        padding: 10px;
        color: #fff;
        z-index: 999;
    }
</style>
