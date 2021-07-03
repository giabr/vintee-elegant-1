<template>
    <div id="el-event" class="grey">
        <v-container class="text-center">
            <h1 data-aos="fade-in" class="el-title dark--text">Acara</h1>
            <br>
            <v-row>
                <v-col data-aos="fade-in" cols="12" md="6" sm="12">
                    <h2 class="primary--text">{{data.place1.name}}</h2>
                    <p class="el-time dark--text">{{formatDate(data.place1.time.date)}} . {{data.place1.time.clock}}</p>
                    <h3 class="dark--text">{{data.place1.location.name}}</h3>
                    <p class="dark--text">{{data.place1.location.street}}</p>
                    <v-btn
                    class="el-btn"
                    color="primary"
                    outlined
                    >
                    <img src="../assets/map.svg" alt="" srcset="">
                    <a :href="data.place1.location.link" target="_blank"><span class="primary--text">Lihat peta</span></a>
                    </v-btn>
                </v-col>
                <v-col data-aos="fade-in" cols="12" md="6" sm="12">
                    <h2 class="primary--text">{{data.place2.name}}</h2>
                    <p class="el-time dark--text">{{formatDate(data.place2.time.date)}} . {{data.place2.time.clock}}</p>
                    <h3 class="dark--text">{{data.place2.location.name}}</h3>
                    <p class="dark--text">{{data.place2.location.street}}</p>
                    <v-btn
                    class="el-btn"
                    color="primary"
                    outlined
                    >
                    <img src="../assets/map.svg" alt="" srcset="">
                    <a :href="data.place2.location.link" target="_blank"><span class="primary--text">Lihat peta</span></a>
                    </v-btn>
                </v-col>                
            </v-row>
        </v-container>
    </div>
</template>

<script>
import formatDateIndo from 'node-format-date';

export default {
    props:{
        data: Object
    },
    methods: {
        formatDate(date){
        return formatDateIndo.formatDate(date)
        }
    }
}
</script>

<style lang="scss" scoped>
#el-event{
    padding: 10% 0;
    background-image: url("../assets/event-decor.svg");
    background-position: right bottom;
    background-size: 20% auto;
    .el-time{
        padding: 10px 0;
    }
    .el-btn{
        margin: 20px 0;
        span {
            font-size:12px;
            text-transform:none;
            font-weight:bold;
            margin-left:5px;
        }
    }
    a{
        text-decoration: none;
    }
    h3, p{
        padding: 5px 0;
    }
    @media screen and (max-width: 720px) {
        background-size: 30% auto;
        padding: 10% 5%;
        h2{
            font-size: 18px;
            margin-top: 10px;
        }
        h3, p{
            font-size: 14px;
            padding: 3px 0;
        }
    } 
}
</style>