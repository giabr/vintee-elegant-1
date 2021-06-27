<template>
    <div id="el-bridegroom">
        <h1 class="el-title primary--text text-center" data-aos="fade-in">We are getting married</h1>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12" sm="12" md="5">
                    <img data-aos="fade-in" class="el-img" src="../assets/groom.jpg" alt="" srcset="">
                    <div data-aos="fade-in">
                        <h3 class="primary--text">Galih Budiono</h3>
                        <p>Putra dari Bapak Sutanto Budiono &amp; Ibu Diana Sukamto</p>
                        <a href="#" class="primary--text">galihbudiono</a>
                    </div>
                </v-col>
                <v-col data-aos="fade-in" class="el-and font primary--text" cols="12" sm="12" md="2">&amp;</v-col>
                <v-col cols="12" sm="12" md="5">
                    <img data-aos="fade-in" class="el-img" src="../assets/bride.jpg" alt="" srcset="">
                    <div data-aos="fade-in">
                        <h3 class="primary--text">Ratna Putri Valencia</h3>
                        <p>Putra dari Bapak Michael Valencia &amp; Ibu Riri Fatimah</p>
                        <a href="#" class="primary--text">rpvalen</a>
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
    h1 {
        padding: 5% 0;
    }
    p {
        font-size: 14px;
        padding: 10px 0;
    }
    a {
        text-decoration: none;
        font-size: 14px;
    }
    .el-img{
        height: auto;
        border-radius: 50%;
    }
    @media screen and (min-width: 480px) {
    .el-img{
        width: 60%;
        margin: 50px;
    }
    }
    @media screen and (max-width: 480px) {
    .el-img{
        width: 40%;
        margin: 30px;
    }
    } 
    .el-and{
        font-size: 100px;
        padding-top: 10%;
    }
}

</style>