<template>
    <div id="el-bridegroom">
        <h1 class="el-title primary--text text-center" data-aos="fade-in">Mempelai</h1>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12" sm="12" md="5">
                    <img data-aos="fade-in" class="el-img" src="../assets/groom.jpg" alt="" srcset="">
                    <div data-aos="fade-in">
                        <h1 class="font primary--text">Galih Budiono</h1>
                        <p>Putra dari Bapak Sutanto Budiono &amp; Ibu Diana Sukamto</p>
                        <a href="#" class="primary--text">galihbudiono</a>
                    </div>
                </v-col>
                <v-col data-aos="fade-in" class="el-and font primary--text" cols="12" sm="12" md="2">&amp;</v-col>
                <v-col cols="12" sm="12" md="5">
                    <img data-aos="fade-in" class="el-img" src="../assets/bride.jpg" alt="" srcset="">
                    <div data-aos="fade-in">
                        <h1 class="font primary--text">Ratna Putri Valencia</h1>
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
    a {
        text-decoration: none;
    }
    .el-img{
        width: 60%;
        height: auto;
        border-radius: 50%;
    }
    .el-and{
        font-size: 100px;
        padding-top: 10%;
    }
}

</style>