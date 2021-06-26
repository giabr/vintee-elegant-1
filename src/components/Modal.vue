<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      fullscreen
    >
      <v-card id="el-dialog">
        <v-card-text class="vh-center text-center">
			<h1 class="el-title">Galih &amp; Ratna</h1>
            <p>Kepada Yth. Bpk/Ibu/Saudara/i</p>
			<h2>Joko</h2>
            <br>
			<p>Tanpa mengurangi rasa hormat , kami mengundang anda untuk hadir di acara pernikahan kami</p>
            <v-btn
            color="primary darken-1"
            dark
            @click="playMusic()"
          >
            Buka Undangan
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
        p, h2{
            color: white;
        }
        h1{
          padding-bottom: 30px;
        }
        .vh-center{
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }        
    }
</style>