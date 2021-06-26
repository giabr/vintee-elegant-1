<template>
    <div id="el-countdown">
        <v-container class="text-center white--text">
            <h1 data-aos="fade-in">06 April 2022</h1>
            <v-btn data-aos="fade-in"
            class="el-btn"
            color="primary darken-1"
            rounded
            dark>
                <h1 class="font">save the date</h1>
            </v-btn>
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
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img_bg_3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    .el-title{
        padding: 70px;
    }
    @media screen and (min-width: 480px) {
    .el-timer{
        font-size: 30px;
        }
    .el-btn{
        font-size: 50px;
        padding: 40px;
        margin: 10%;
        }
    }

    @media screen and (max-width: 480px) {
    .el-timer{
        font-size: 16px;
        }
    .el-btn{
        font-size: 30px;
        padding: 25px;
        margin: 20% 0;
    }
    }
    .el-btn{
        text-transform: lowercase;
    }
}

</style>