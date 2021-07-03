<template>
    <div id="el-message-list" class="grey">
        <v-container>
            <h1 class="el-title text-center primary--text">Pesan</h1>
        <v-list class="el-post-container grey">
            <v-list-item v-for="guest in list" :key="guest._id">
                <v-list-item-content>
                    <v-list-item-title>
                        <span class="dark--text" style="font-weight:bold">{{guest.name}}</span><span class="primary--text" style="margin-left:10px" v-if="guest.attend">&#10003; Hadir</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        <p class="dark--text">{{guest.message}}</p>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import {api, userid} from '../db'

export default {
    data(){
        return{
            list: null
        }
    },
    mounted(){
        axios.get(api + `/api/guest/${userid}`)
        .then(response => (this.list = response.data))
    }
}
</script>

<style lang="scss" scoped>

#el-message-list{
    padding: 10% 0;
    .el-post-container {
        max-height: 50vh;
        overflow-y: auto;
    }
    @media screen and (max-width: 720px) {
        padding: 10% 5%;
    } 
}

</style>