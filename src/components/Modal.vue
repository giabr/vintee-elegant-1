<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      fullscreen
    >
    <v-card id="vt-dialog">
      <v-card-text data-aos="fade-in" class="vh-center text-center dark--text">
			<h1 class="vt-title">{{data.groom.nickname}} &amp; {{data.bride.nickname}}</h1>
      <div class="vt-parent" data-aos="fade-in">
        <img class="vt-img vt-circle vt-decor-back" :src="data.cover" alt="" srcset="">
        <img class="vt-img vt-decor-front" src="../assets/img-decor.svg" alt="" srcset="">
      </div>
      <br>
      <br>
        <p style="font-weight:bold">Kepada Yth. Bpk/Ibu/Saudara/i</p>
        <br>
			<h2>{{guest}}</h2>
        <br>
			<p>Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara pernikahan kami</p>
        <br>
        <br>
        <v-btn
          color="white"
          elevation="0"
          @click="playMusic()"
        >
          <h3 class="primary--text vt-btn-text">Buka undangan</h3>
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
    #vt-dialog{
        background:url("../assets/bg.jpg");
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        .vt-parent {
          position: relative;
          top: 0;
          left: 0;
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
        .vh-center{
          position: absolute;
          left: 50%;
          top: 50%;
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