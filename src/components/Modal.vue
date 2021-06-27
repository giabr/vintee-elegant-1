<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      fullscreen
    >
    <v-card id="el-dialog">
      <v-card-text data-aos="fade-in" class="vh-center text-center white--text">
			<h1 class="el-title">Galih &amp; Ratna</h1>
        <img class="el-img" src="../assets/groom.jpg" alt="" srcset="">
        <p style="font-weight:bold">Kepada Yth. Bpk/Ibu/Saudara/i</p>
        <br>
			<h2>Joko</h2>
        <br>
			<p>Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara pernikahan kami</p>
        <br>
        <v-btn
          color="white"
          elevation="0"
          @click="playMusic()"
        >
          <h3 class="primary--text" style="font-size:12px;text-transform:none">Buka undangan</h3>
        </v-btn>
      </v-card-text>
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {Howl} from 'howler';

export default {
    data (){
        return{
            dialog: true,
        }
    },
    methods: {
      playMusic(){
      var sound = new Howl({
        src: [require('../assets/galihratna.ogg')],
        autoplay: true,
        loop: true,
        onend: function() {
          console.log('Finished!');
        }
      });
      sound.play();
      this.dialog = false
      }
    }
}
</script>

<style lang="scss" scoped>
    #el-dialog{
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img_bg_1.jpg");
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        p{
            font-size: 16px;
        }
        .vh-center{
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .el-img{
          height: auto;
          border-radius: 50%;
        }
        @media screen and (min-width: 480px) {
        .el-img{
          width: 200px;
          margin: 50px;
        }
        }
        @media screen and (max-width: 480px) {
        .el-img{
          width: 136px;
          margin: 30px;
        }
        h1{
          font-size: 40px;
          font-weight: bold;
        }
        }        
    }
</style>