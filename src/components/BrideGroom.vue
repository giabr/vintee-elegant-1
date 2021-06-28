<template>
    <div id="el-bridegroom" class="grey">
        <h1 class="el-title primary--text text-center" data-aos="fade-in">We are getting married</h1>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12" sm="12" md="5">
                    <div class="el-parent" data-aos="fade-in">
                        <img class="el-img el-decor-back" src="../assets/groom.jpg" alt="" srcset="">
                        <img class="el-img el-decor-front" src="../assets/img-decor.svg" alt="" srcset="">
                    </div>
                    <div data-aos="fade-in">
                        <br>
                        <h3 class="primary--text">Galih Budiono</h3>
                        <p>Putra dari Bapak Sutanto Budiono &amp; Ibu Diana Sukamto</p>
                        <div>
                            <img class="el-sosmed" src="../assets/ig.svg" alt="" srcset="">
                            <a href="#" class="primary--text"><span> galihbud</span></a>
                        </div>                    
                    </div>
                </v-col>
                <v-col data-aos="fade-in" class="el-and font primary--text" cols="12" sm="12" md="2">&amp;</v-col>
                <v-col cols="12" sm="12" md="5">
                    <div class="el-parent" data-aos="fade-in">
                        <img class="el-img el-decor-back" src="../assets/bride.jpg" alt="" srcset="">
                        <img class="el-img el-decor-front" src="../assets/img-decor.svg" alt="" srcset="">
                    </div>
                    <div data-aos="fade-in">
                        <br>
                        <h3 class="primary--text">Ratna Putri Valencia</h3>
                        <p>Putra dari Bapak Michael Valencia &amp; Ibu Riri Fatimah</p>
                        <div>
                            <img class="el-sosmed" src="../assets/ig.svg" alt="" srcset="">
                            <a href="#" class="primary--text"><span> rpvalen</span></a>
                        </div>
                    </div>
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

#el-bridegroom{
    padding: 10% 0;
    p {
        font-size: 14px;
        padding: 2% 0;
    }
    a {
        text-decoration: none;
        font-size: 12px;
        margin: 0;
    }
    .el-parent {
        position: relative;
        top: 0;
        left: 0;
    }
    .el-decor-back {
        position: relative;
        border-radius: 50%;
    }
    .el-decor-front {
        position: absolute;
        left: 50%;
        top: 90%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .el-img{
        height: auto;
    }
    .el-sosmed{
        vertical-align: middle;
    }
    @media screen and (min-width: 480px) {
    h3 {
        margin-top: 20px;
    }
    .el-img{
        width: 60%;
        // margin: 50px;
    }
    .el-and{
        font-size: 100px;
        padding-top: 10%;
    }
    }
    @media screen and (max-width: 480px) {
    .el-img{
        width: 120px;
        // margin: 30px;
    }
    h1{
        font-size: 28px;
    }
    .el-and{
        font-size: 28px;
        padding: 10% 0;
    }
    } 

}

</style>