<template>
    <div id="vt-live" class="grey">
        <v-container class="text-center">
            <h1 data-aos="fade-in" class="vt-title primary--text">Live streaming</h1>
            <p class="dark--text" data-aos="fade-in">Karenakan terbatasnya jumlah tamu yang diperbolehkan mengikuti Pernikahan, kami mengundang Anda untuk mengikuti jalannya pernikahan melalui Live Streaming.</p>
            <br>
            <v-row data-aos="fade-in">
                <v-col cols="12" sm="12" md="6">
                    <a :href="data.socmed1.link" target="_blank">
                        <img v-if="data.socmed1.type == 1" src="../assets/ig.svg" alt="">
                        <img v-else src="../assets/youtube.svg" alt="">
                        <span class="primary--text"> {{data.socmed1.name}}</span>
                    </a>
                </v-col>
                <v-col cols="12" sm="12" md="6" >
                    <a :href="data.socmed2.link" target="_blank">
                        <img v-if="data.socmed1.type == 1" src="../assets/youtube.svg" alt="">
                        <img v-else src="../assets/ig.svg" alt="">
                        <span class="primary--text"> {{data.socmed2.name}}</span>
                    </a>                   
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props:{
        data: Object
    }
}
</script>

<style lang="scss" scoped>
#vt-live{
    padding: 10% 0;
    background-image: url("../assets/live-decor.svg");
    background-position: left top;
    background-size: 20% auto;
    a {
        text-decoration: none;
    }
    img {
        vertical-align: middle;
         width: 30px;
    }
    span {
        font-size: 18px;
    }
    @media screen and (max-width: 720px) {
        background-size: 30% auto;
        padding: 10% 5%;
        p, span {
            font-size: 14px;
        }
        img {
            width: 20px;
        }
    } 
}
</style>