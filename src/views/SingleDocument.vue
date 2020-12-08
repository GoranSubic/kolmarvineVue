<template>
    <div class="singled container">
        <img v-bind:src="document.photo" />
        <h1>{{document.name}}</h1>
        <h5>Short description:</h5><h6>{{document.descrption}}</h6>
        <h3 v-if="document.type == 'free'">Preuzmi pdf</h3>
        <h3 v-else>
            <router-link v-bind:to="'/contact'">Poru?i fajl</router-link>
        </h3>
        <h4 v-if="document.type != 'free'">{{document.price}} RSD</h4>
    </div>
</template>

<script>
    export default {
        name: "SingleDocument",
        props: {
            downloads: Array
        },
        computed: {
            document: function() {
                for (let i = 0; i < this.downloads.length; i++) {
                    if (this.downloads[i].id == this.$route.params.id) {
                        return this.downloads[i];
                    }
                }
                return false;
            }
        }
    }
</script>

<style scoped>
    .singled {
        margin: 100px auto 0 auto;
        font-size: 15px;
        line-height: 18px;
    }
</style>

