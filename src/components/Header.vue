<template>
    <div id="vt-cover" v-bind:style="{
        background:'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + data.cover + ')'}">
        <v-container data-aos="fade-in">
            <div class="vt-cover-body text-center white--text">
                <h3 style="font-weight: 400">The wedding of</h3>
                <h1 class="vt-title white--text">{{data.groom.nickname}} &amp; {{data.bride.nickname}}</h1>
                <h3 style="font-weight: 700">{{getDate(data.hday)}}</h3>
            </div>
        </v-container>
    </div>
</template>

<script>
import dateFormat from 'dateformat';

export default {
    props : {
        data: Object
    },
    methods: {
        getDate(date){
            var temp = Date.parse(date)
            var newDate = dateFormat(temp, "dd . mm . yy")
            return newDate
        }
    }
}
</script>

<style lang="scss" scoped>
    #vt-cover{
        background-size: cover !important;
        background-attachment: fixed;
        background-position: center !important;
        background-repeat: no-repeat !important;
        height: 100vh;
        h1{
        font-size: 75px;
        }
        .vt-cover-body{
            padding-top: 25%;
        }
        @media screen and (max-width: 720px) {
            h1 {
            font-size: 40px;
            font-weight: 700;
            }
            h3 {
                font-size: 16px;
            }
        }
    }
</style>