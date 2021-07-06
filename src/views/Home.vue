<template>
  <div>
    <head-page :data="client" />
    <modal-page :data="client" :guest="guest" />   
    <quotes-page :data="client.quote" /> 
    <bride-groom-page :data="client" />
    <countdown-page :data="client.hday" />
    <event-page :data="client.event" />
    <protocol-page />
    <live-page :data="client.live" />
    <donate-page :data="client" />
    <guest-page />
    <gallery-page :images="client.gallery" />
    <!-- footer -->
    <footer-page/>
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
import Donate from '../components/Donate.vue'
import Guest from '../components/Guest.vue'
import Gallery from '../components/Gallery.vue'

import Footer from '../components/Footer/Footer.vue'

import axios from 'axios'
import {api, userid} from '../db'

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
    LivePage : Live,
    DonatePage : Donate,
    GuestPage : Guest,
    GalleryPage : Gallery,
    FooterPage: Footer
  },
  data(){
    return {
      client: null,
      guest: this.$route.params.guest
    }
  },
  mounted(){
    axios.get(api + `/api/user/${userid}`)
    .then(response => (this.client = response.data))
  }
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
  .font-text {
    font-family: 'Lora', serif;
  }
  .animate-box{
    opacity: 0;
  }
  .vt-title{
    // text-transform: uppercase;
    font-family: 'Dancing Script', cursive;
    font-size: 75px;
    margin: 30px 0;
  }
  @media screen and (max-width: 720px) {
    .vt-title {
      font-size: 28px;
      margin: 30px 0;
    }
    h3, p {
    font-size: 14px;
    }
  }
</style>
