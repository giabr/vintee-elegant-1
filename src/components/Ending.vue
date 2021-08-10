<template>
    <div id="vt-ending" class="grey">
        <v-container class="text-center dark--text">
            <div class="vt-parent" data-aos="fade-in">
                <img class="vt-img vt-circle vt-decor-back" src="../assets/images/img_bg_2.jpg" alt="" srcset="">
                <img class="vt-img vt-decor-front" src="../assets/images/decor/img-decor.svg" alt="" srcset="">
            </div>
                <p>Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p>
                <br>
                <p>Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.</p>
                <br>
                <h3>Wassalamu’alaikum Wr. Wb.</h3>
            <h1 class="vt-title primary--text">{{groom.nickname}} &amp; {{bride.nickname}}</h1>
        </v-container>
    </div>
</template>

<script>
export default {
    props:{
        groom: Object,
        bride: Object
    }
}
</script>

<style lang="scss" scoped>
    #vt-ending{
        padding: 10% 0;
        background-image: url("../assets/images/decor/left-top-decor.svg"), url("../assets/images/decor/right-top-decor.svg"), url("../assets/images/decor/left-bottom-decor.svg"), url("../assets/images/decor/right-bottom-decor.svg");
        background-position: left top, right top, left bottom, right bottom;
        background-size: 20% auto;
        .vt-parent {
          position: relative;
          top: 0;
          left: 0;
          margin-bottom: 10%;
        }
        .vt-circle{
          object-fit: cover;
          height: 200px;
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
        .vt-img{
          width: 200px;
        }
        @media screen and (max-width: 720px) {
        .vt-img{
          width: 136px;
          // margin: 30px;
        }
        .vt-circle{
          height: 136px;
        }
        h1{
          font-size: 40px;
          font-weight: bold;
        }
        }        
    }
</style>