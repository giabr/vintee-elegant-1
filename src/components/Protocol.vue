<template>
    <div id="el-protocol" class="grey">
        <v-container class="text-center">
            <h1 class="el-title primary--text" data-aos="fade-in">Protokol kesehatan</h1>
            <br>
            <v-row>
                <v-col cols="4" data-aos="fade-in">
                    <img src="../assets/soap.svg" alt="">
                    <p>Cuci Tangan</p>
                </v-col>
                <v-col cols="4" data-aos="fade-in">
                    <img src="../assets/social-distancing.svg" alt="">
                    <p>Jaga Jarak</p>
                </v-col>
                <v-col cols="4" data-aos="fade-in">
                    <img src="../assets/protection-mask.svg" alt="">
                    <p>Pakai Masker</p>
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
#el-protocol{
    padding: 10% 0;
    @media screen and (min-width: 480px) {
        img {
            width: 100px;
            padding-bottom: 30px;
        }
        p {
            font-size: 18px;
        }
    }
    @media screen and (max-width: 480px) {
        img {
            padding-bottom: 10px;
        }
    }
}
</style>