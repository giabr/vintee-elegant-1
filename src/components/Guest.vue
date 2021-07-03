<template>
    <div id="el-guest" class="grey">
        <v-container class="text-center">
            <h1 class="el-title primary--text text-center">Buku tamu</h1>
            <p style="text-align:left" class="dark--text">Nama</p>
            <v-text-field
            class="font-text dark--text"
            v-model="name"
            outlined
            clearable
            ></v-text-field>
            <p style="text-align:left" class="dark--text">Pesan</p>
            <v-textarea
            class="font-text dark--text"
            outlined
            clearable
            v-model="message"
            ></v-textarea>
            <v-row style="margin:5% 0">
                <v-col @click="hadir(true)" class="el-select-left" v-bind:class="{active: attend, primary: attend}">
                    <p>Hadir</p>
                </v-col>
                <v-col @click="hadir(false)" class="el-select-right" v-bind:class="{active: !attend, primary: !attend}">
                    <p>Tidak hadir</p>
                </v-col>
            </v-row>
            <br>
            <v-btn
            color="primary"
            @click="postMessage()"
            elevation="0"
            >
                <p style="text-transform:none;font-size:12px;">Kirim pesan</p>
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
    </div>
</template>

<script>

import axios from 'axios'
import {api, userid} from '../db'

export default {
    data(){
        return{
            name: "tulis nama kamu disini...",
            message: "tulis pesan kamu disini...",
            attend: true,
            guest: null,
            snackbar: false,
            timeout: 5000
        }
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
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })
            this.name = "tulis nama kamu disini...",
            this.message = "tulis pesan kamu disini...",
            this.snackbar = true
        }

    },
    mounted(){
        axios.get(api + `/api/guest/${userid}`)
        .then(response => (this.guest = response.data))
    }
}
</script>

<style lang="scss" scoped>

#el-guest{
    padding: 10% 30%;
    .active{
        color: white;
    }
    .el-select-left{
        border-style: solid;
        border-width: 1px 0px 1px 1px;
        border-color: grey;
        border-radius: 4px 0px 0 4px;
        cursor: pointer;
    }
    .el-select-right{
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
    }
    @media screen and (max-width: 720px) {
    padding: 10% 5%;
    } 
}

</style>