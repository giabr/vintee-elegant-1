<template>
  <div>
    <head-page />
    <modal-page />   
    <quotes-page /> 
    <bride-groom-page />
    <countdown-page />
  </div>
</template>

<script>
import Head from '../components/Header.vue'
import Modal from '../components/Modal.vue'
import Quotes from '../components/Quotes.vue'
import BrideGroom from '../components/BrideGroom.vue'
import Countdown from '../components/Countdown.vue'

export default {
  name: 'Home',

  components: {
    HeadPage : Head,
    ModalPage : Modal,
    QuotesPage : Quotes,
    BrideGroomPage : BrideGroom,
    CountdownPage : Countdown
  },
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Sacramento&display=swap');

  h2, h3, p {
    font-family: 'Open Sans', sans-serif;
  }

  .font {
    font-family: 'Sacramento', cursive;
  }

  .animate-box{
    opacity: 0;
  }

  .el-title{
    // text-transform: uppercase;
    font-family: 'Sacramento', cursive;
    margin: 15px;
  }
  @media screen and (min-width: 480px) {
    .el-title{
      font-size: 75px;
    }
  }
  @media screen and (max-width: 480px) {
    .el-title {
      font-size: 50px;
    }
  }
</style>
