<template>
    <div id="vt-protocol" class="grey">
        <v-container class="text-center">
            <h1 class="vt-title primary--text" data-aos="fade-in">Protokol kesehatan</h1>
            <br>
            <v-row class="dark--text">
                <v-col cols="4" data-aos="fade-in">
                    <img src="../assets/images/decor/soap.svg" alt="">
                    <p>Cuci Tangan</p>
                </v-col>
                <v-col cols="4" data-aos="fade-in">
                    <img src="../assets/images/decor/social-distancing.svg" alt="">
                    <p>Jaga Jarak</p>
                </v-col>
                <v-col cols="4" data-aos="fade-in">
                    <img src="../assets/images/decor/protection-mask.svg" alt="">
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
#vt-protocol{
    padding: 10% 0;
    img {
        width: 100px;
        padding-bottom: 30px;
    }
    @media screen and (max-width: 720px) {
        padding: 10% 5%;
        img {
            width: 50px;
            padding-bottom: 10px;
        }
    }
}
</style>