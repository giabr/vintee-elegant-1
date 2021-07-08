<template>
    <div id="vt-bridegroom" class="grey">
        <h1 class="vt-title primary--text text-center" data-aos="fade-in">We are getting married</h1>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12" sm="12" md="5">
                    <div class="vt-parent" data-aos="fade-in">
                        <img class="vt-img vt-circle vt-decor-back" :src="data.groom.imgUrl" alt="" srcset="">
                        <img class="vt-img vt-decor-front" src="../assets/img-decor.svg" alt="" srcset="">
                    </div>
                    <div data-aos="fade-in">
                        <br>
                        <h3 class="primary--text">{{data.groom.fullname}}</h3>
                        <p class="dark--text">Putra dari Bapak {{data.groom.father}} &amp; Ibu {{data.groom.mother}}</p>
                        <div>
                            <img class="vt-sosmed" src="../assets/ig.svg" alt="" srcset="">
                            <a :href="data.groom.socmed.link" target="_blank" class="primary--text"><span> {{data.groom.socmed.name}}</span></a>
                        </div>                    
                    </div>
                </v-col>
                <v-col data-aos="fade-in" class="vt-and font primary--text" cols="12" sm="12" md="2">&amp;</v-col>
                <v-col cols="12" sm="12" md="5">
                    <div class="vt-parent" data-aos="fade-in">
                        <img class="vt-img vt-circle vt-decor-back" :src="data.bride.imgUrl" alt="" srcset="">
                        <img class="vt-img vt-decor-front" src="../assets/img-decor.svg" alt="" srcset="">
                    </div>
                    <div data-aos="fade-in">
                        <br>
                        <h3 class="primary--text">{{data.bride.fullname}}</h3>
                        <p class="dark--text">Putra dari Bapak {{data.bride.father}} &amp; Ibu {{data.bride.mother}}</p>
                        <div>
                            <img class="vt-sosmed" src="../assets/ig.svg" alt="" srcset="">
                            <a :href="data.bride.socmed.link" target="_blank" class="primary--text"><span> {{data.bride.socmed.name}}</span></a>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style lang="scss" scoped>

#vt-bridegroom{
    padding: 10% 0;
    p {
        padding: 2% 0;
    }
    a {
        text-decoration: none;
        margin: 0;
    }
    .vt-parent {
        position: relative;
        top: 0;
        left: 0;
    }
    .vt-decor-back {
        position: relative;
        border-radius: 50%;
    }
    .vt-decor-front {
        position: absolute;
        left: 50%;
        top: 90%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .vt-sosmed{
        vertical-align: middle;
    }
    .vt-circle{
        object-fit: cover;
        height: 250px;
    }
    h3 {
        margin-top: 20px;
    }
    .vt-img{
        width: 250px;
    }
    .vt-and{
        font-size: 100px;
        padding-top: 10%;
    }    
    @media screen and (max-width: 720px) {
    padding: 10% 5%;
    .vt-img{
        width: 120px;
        // margin: 30px;
    }
    .vt-circle{
        height: 120px;
    }
    h1{
        font-size: 28px;
    }
    .vt-and{
        font-size: 28px;
        padding: 10% 0;
    }
    } 
}
</style>