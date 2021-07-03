<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      fullscreen
    >
    <v-card id="el-dialog">
      <v-card-text data-aos="fade-in" class="vh-center text-center dark--text">
			<h1 class="el-title">{{data.groom.nickname}} &amp; {{data.bride.nickname}}</h1>
      <div class="el-parent" data-aos="fade-in">
        <img class="el-img el-circle el-decor-back" :src="data.cover" alt="" srcset="">
        <img class="el-img el-decor-front" src="../assets/img-decor.svg" alt="" srcset="">
      </div>
      <br>
      <br>
        <p style="font-weight:bold">Kepada Yth. Bpk/Ibu/Saudara/i</p>
        <br>
			<h2>{{guest}}</h2>
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
    props:{
      data: Object,
      guest: String
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
        background:url("../assets/bg.jpg");
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        .el-parent {
          position: relative;
          top: 0;
          left: 0;
        }
        .el-circle{
          object-fit: cover;
          height: 200px;
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
          width: 200px;
        }
        @media screen and (max-width: 720px) {
        .el-img{
          width: 136px;
          // margin: 30px;
        }
        .el-circle{
          height: 136px;
        }
        h1{
          font-size: 40px;
          font-weight: bold;
        }
        }        
    }
</style>