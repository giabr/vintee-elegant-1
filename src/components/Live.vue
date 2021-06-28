<template>
    <div id="el-live" class="grey">
        <v-container class="text-center">
            <h1 data-aos="fade-in" class="el-title primary--text">Live streaming</h1>
            <p data-aos="fade-in">Karenakan terbatasnya jumlah tamu yang diperbolehkan mengikuti Pernikahan, kami mengundang Anda untuk mengikuti jalannya pernikahan melalui Live Streaming.</p>
            <br>
            <v-row data-aos="fade-in">
                <v-col cols="12" sm="12" md="6">
                    <a href="#">
                        <img src="../assets/ig.svg" alt="">
                        <span class="primary--text"> galihbud</span>
                    </a>
                </v-col>
                <v-col cols="12" sm="12" md="6" >
                    <a href="#">
                        <img src="../assets/youtube.svg" alt="">
                        <span class="primary--text"> galih budiawan</span>
                    </a>                   
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#el-live{
    padding: 10% 0;
    background-image: url("../assets/live-decor.svg");
    background-position: left top;
    background-size: 300px auto;
    a {
        text-decoration: none;
    }
    img {
        vertical-align: middle;
    }
    @media screen and (min-width: 480px) {
        img {
            width: 30px;
        }
        span {
            font-size: 18px;
        }
    }
    @media screen and (max-width: 480px) {
        background-size: 80px auto;
        p, span {
            font-size: 14px;
        }
        img {
            width: 20px;
        }
    } 
}
</style>