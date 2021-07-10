<template>
    <div id="vt-guest">
        <v-container class="text-center">
            <h1 class="vt-title primary--text text-center" data-aos="fade-in">Buku tamu</h1>
            <div data-aos="fade-in">
                <p style="text-align:left" class="dark--text">Nama</p>
                <v-text-field
                class="vt-field font-text dark--text"
                clearable
                v-model="name"
                outlined
                ></v-text-field>
            </div>
            <div data-aos="fade-in">
                <p style="text-align:left" class="dark--text">Pesan</p>
                <v-textarea
                class="vt-field font-text dark--text"
                outlined
                clearable
                v-model="message"
                ></v-textarea>
            </div>
            <v-row style="margin:5% 0" data-aos="fade-in">
                <v-col @click="hadir(true)" class="vt-select-left" v-bind:class="{active: attend, primary: attend}">
                    <p>Hadir</p>
                </v-col>
                <v-col @click="hadir(false)" class="vt-select-right" v-bind:class="{active: !attend, primary: !attend}">
                    <p>Tidak hadir</p>
                </v-col>
            </v-row>
            <br>
            <v-btn
            data-aos="fade-in"
            color="primary"
            @click="postMessage()"
            elevation="0"
            >
                <p class="vt-btn-text">Kirim pesan</p>
            </v-btn>
            <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            >
            <p>Pesan terkirim</p>

            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                <p style="text-transform:none;font-size:12px;">Tutup</p>
                </v-btn>
            </template>
            </v-snackbar>
        </v-container>
        <message-list :list="guest" />
    </div>
</template>

<script>

import axios from 'axios'
import {api, userid} from '../db'
import io from 'socket.io-client';
import MessageList from './MessageList.vue'

export default {
    data(){
        return{
            name: "tulis nama kamu disini...",
            message: "tulis pesan kamu disini...",
            attend: true,
            guest: [],
            snackbar: false,
            timeout: 5000,
            // socket: io(`localhost:3001`, { transports: ['websocket', 'polling', 'flashsocket'] })
            socket: io(api, { transports: ['websocket', 'polling', 'flashsocket'] })
        }
    },
    components: {
        MessageList
    },
    methods: {
        hadir(value){
            this.attend = value
        },
        postMessage(){
            axios.post(api + `/api/guest`, {
                name: this.name,
                message: this.message,
                attend: this.attend,
                user: userid
            })
            .then(response => {
                this.socket.emit('SEND_MESSAGE', {
                    name: this.name,
                    message: this.message,
                    attend: this.attend,
                    user: userid
                })
                console.log(response)
            })

            // this.name = "tulis nama kamu disini...",
            // this.message = "tulis pesan kamu disini...",
            this.snackbar = true
        },
        fetchPost(){
            axios.get(api + `/api/guest/${userid}`)
            .then(response => {
                this.guest = response.data
            })  
            
            this.socket.on('MESSAGE', (data) => {
                // this.guest.push(data)
                this.guest.unshift(data)
            })
        },
    },
    // mounted(){
    //     this.fetchPost()
    // }
    created(){
        this.fetchPost()
    }
}
</script>

<style lang="scss" scoped>

#vt-guest{
    padding: 10% 30%;
    background:url("../assets/images/bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .active{
        color: white;
    }
    .vt-field{
        font-size: 20px;
    }
    .vt-select-left{
        border-style: solid;
        border-width: 1px 0px 1px 1px;
        border-color: grey;
        border-radius: 4px 0px 0 4px;
        cursor: pointer;
    }
    .vt-select-right{
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
    }
    @media screen and (max-width: 720px) {
    padding: 10% 5%;
        .vt-field{
        font-size: 16px;
        }
    } 
}

</style>