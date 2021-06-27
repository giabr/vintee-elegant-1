<template>
  <div>
    <head-page />
    <modal-page />   
    <quotes-page /> 
    <bride-groom-page />
    <countdown-page />
    <event-page />
    <protocol-page />
    <live-page />
  </div>
</template>

<script>
import Head from '../components/Header.vue'
import Modal from '../components/Modal.vue'
import Quotes from '../components/Quotes.vue'
import BrideGroom from '../components/BrideGroom.vue'
import Countdown from '../components/Countdown.vue'
import Event from '../components/Event.vue'
import Protocol from '../components/Protocol.vue'
import Live from '../components/Live.vue'

export default {
  name: 'Home',

  components: {
    HeadPage : Head,
    ModalPage : Modal,
    QuotesPage : Quotes,
    BrideGroomPage : BrideGroom,
    CountdownPage : Countdown,
    EventPage : Event,
    ProtocolPage : Protocol,
    LivePage : Live
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lora:wght@400;700&display=swap');

  h3, p {
    font-size: 16px;
  }
  p {
    margin-bottom: 0 !important;
  }
  h1, h2, h3, p, span {
    font-family: 'Lora', serif;
    line-height: 150%;
    letter-spacing: 0.01rem;
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
  }
  @media screen and (min-width: 480px) {
    .el-title{
      font-size: 75px;
      margin: 30px 0;
    }
  }
  @media screen and (max-width: 480px) {
    .el-title {
      font-size: 28px;
      margin: 30px 0;
    }
  }
</style>
