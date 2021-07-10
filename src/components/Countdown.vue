<template>
    <div id="vt-countdown">
        <v-container class="text-center primary--text">
            <h1 class="vt-title" data-aos="fade-in">{{formatDate(data)}}</h1>
            <img class="vt-img" src="../assets/images/decor/savethedate.svg" alt="" data-aos="fade-in">
            <vue-countdown :time="interval" v-slot="{ days, hours, minutes, seconds }">
                <v-row class="vt-timer">
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
import formatDateIndo from 'node-format-date';

export default {
    props: {
        data: String,
        interval: Number
    },
    methods: {
        formatDate(date){
            return formatDateIndo.formatDate(date)
        }

    },
    components: {
        VueCountdown
    }
}
</script>

<style lang="scss" scoped>

#vt-countdown{
    padding: 10% 0;
    background:url("../assets/images/bg-2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    .vt-timer{
        h1 {
            font-size: 50px;
        }
        p {
            font-size: 24px;
        }
    }
    .vt-btn{
        font-size: 50px;
        padding: 40px;
        margin-bottom: 10%;
        }
    .vt-img{
        width: 240px;
        height: auto;
        margin: 50px;
    }
    .vt-btn{
        text-transform: capitalize;
    }
    @media screen and (max-width: 720px) {
    padding: 10% 5%;
    .vt-timer{
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
    }
    .vt-btn{
        font-size: 30px;
        padding: 25px;
        margin-bottom: 20%;
    }
    .vt-title{
        font-size: 28px;
    }
    .vt-img{
        width: 100px;
        height: auto;
        margin: 30px;
    }
    }
}

</style>