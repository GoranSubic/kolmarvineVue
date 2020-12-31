<template>
    <div :class="'panel ' + panelColor">
        <div class="panel-heading">
            <router-link v-bind:to="'/dokument/' + document.id">
                <h4>Pregledaj: {{document.name}}</h4>
            </router-link>
        </div>
        <div class="panel-body">
            <img v-bind:src="document.photo" 
                 v-bind:alt="document.name"/>
        </div>
        <div class="panel-footer">
            <h3 v-if="document.type == 'free'">
                <a class="btn btn-info" role="button" 
                   v-bind:href="'pdf/' + document.document" target="_blank">
                    Preuzmi pdf
                </a>
            </h3>
            <h3 v-else>
                <router-link v-bind:to="'/contact'">Poruči fajl</router-link>
            </h3>
        </div>
    </div>
</template>

<script>
export default {
        name: "DocumentCard",
        props: {
            document: Object
        },
        computed: {
            panelColor: function () {
                if (this.document.type == "free") {
                    return "panel-info";
                } else {
                    return "panel-danger";
                }
            }
        }
}
</script>

<style scoped>
    .panel {
        margin: 0 auto 30px auto;
        max-width: 350px;
    }
    .panel-heading {
        height: 60px;
    }
    .panel-body {
        height: 150px;
        line-height: 150px;
    }
    img {
        width: 80%;
        height: 80%;
    }
</style>

