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
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lora&display=swap');

  h3, p {
    font-size: 16px;
  }

  h1, h2, h3, p {
    font-family: 'Lora', serif;
  }

  h2 {
    font-family: 'Lora', serif;
  }

  .font {
    font-family: 'Dancing Script', cursive;
  }

  .animate-box{
    opacity: 0;
  }

  .el-title{
    // text-transform: uppercase;
    font-family: 'Dancing Script', cursive;
    margin: 15px;
  }
  @media screen and (min-width: 480px) {
    .el-title{
      font-size: 75px;
    }
  }
  @media screen and (max-width: 480px) {
    .el-title {
      font-size: 28px;
    }
  }
</style>
