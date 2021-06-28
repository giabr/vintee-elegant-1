<template>
    <div id="el-countdown">
        <v-container class="text-center primary--text">
            <h1 class="el-title" data-aos="fade-in">18 Agustus 2021</h1>
            <img class="el-img" src="../assets/savethedate.svg" alt="" data-aos="fade-in">
            <vue-countdown :time="getInterval(now, hday)" v-slot="{ days, hours, minutes, seconds }">
                <v-row class="el-timer">
                    <v-col>
                        <h1>{{ days }}</h1>
                        <p>Hari</p>
                    </v-col>
                    <v-col>
                        <h1>{{ hours }}</h1>
                        <p>Jam</p>
                    </v-col>
                    <v-col>
                        <h1>{{ minutes }}</h1>
                        <p>Menit</p>
                    </v-col>
                    <v-col>
                        <h1>{{ seconds }}</h1>
                        <p>Detik</p>
                    </v-col>
                </v-row>
            </vue-countdown>
        </v-container>
    </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
    data(){
        return{
            now: new Date(),
            hday: new Date('2022-04-06'),
        }
    },
    methods: {
        getInterval(now, next){
            var time = next - now
            return time
        }
    },
    components: {
        VueCountdown
    }
}
</script>

<style lang="scss" scoped>

#el-countdown{
    padding: 10% 0;
    background:url("../assets/bg-2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    @media screen and (min-width: 480px) {
    .el-timer{
        h1 {
            font-size: 50px;
        }
        p {
            font-size: 24px;
        }
    }
    .el-btn{
        font-size: 50px;
        padding: 40px;
        margin-bottom: 10%;
        }
    .el-img{
        width: 240px;
        height: auto;
        margin: 50px;
    }
    }

    @media screen and (max-width: 480px) {
    .el-timer{
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
    }
    .el-btn{
        font-size: 30px;
        padding: 25px;
        margin-bottom: 20%;
    }
    .el-title{
        font-size: 28px;
    }
    .el-img{
        width: 100px;
        height: auto;
        margin: 30px;
    }
    }
    .el-btn{
        text-transform: capitalize;
    }
}

</style>