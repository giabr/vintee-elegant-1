<template>
    <div id="el-cover">
        <v-container data-aos="fade-in">
            <div class="el-cover-body text-center">
                <h3>Undangan Pernikahan</h3>
                <h1 class="el-title white--text">Galih &amp; Ratna</h1>
                <h3>06 April 2022</h3>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #el-cover{
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img_bg_2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        h3 {
            color: white;
        }
        h1 {
            padding: 40px;
        }
        .el-cover-body{
            padding-top: 25%;
        }
        @media screen and (min-width: 480px) {
        .el-cover-body{
            padding-top: 25%;
        }
        }
        @media screen and (max-width: 480px) {
        .el-cover-body{
            padding-top: 50%;
        }
        }
    }
</style>