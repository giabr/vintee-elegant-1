<template>
    <div id="vt-donate">
    <div class="vt-intro">
        <v-container class="text-center dark--text">
            <h1 data-aos="fade-in" class="vt-title">You are invited</h1>
            <p data-aos="fade-in">Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu pada kedua mempelai.</p>
            <br>
            <br>
            <p data-aos="fade-in">Dari kami yang berbahagia<br>Keluarga besar {{data.groom.nickname}} dan {{data.bride.nickname}}</p>
        </v-container>
    </div>
    <div class="vt-bank grey">
        <v-container class="white vt-rek dark--text">
            <p data-aos="fade-in" class="text-center">Apabila memberi merupakan tanda doa restu dan ungkapan terima kasih anda, kami dapat menerima kado dalam bentuk non-tunai.</p>
            <br>
            <v-row data-aos="fade-in">
                <v-col cols="6">
                    <img class="vt-img" :src="data.bank.imgUrl" alt="" srcset="">
                </v-col>
                <v-col cols="6">
                    <h3>{{data.bank.debit}}</h3>
                    <h3>{{data.bank.name}}</h3>
                    <br>
                    <v-btn
                        color="primary"
                        elevation="0"
                        outlined
                        @click="doCopy"
                    >
                        <p class="vt-btn-text">Copy Rekening</p>
                    </v-btn>
                </v-col>
                <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                >
                <p>{{data.bank.debit}} copied</p>

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
            </v-row>
        </v-container>
    </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            snackbar: false,
            timeout: 5000
        }
    },
    props: {
        data: Object
    },
    methods: {
        doCopy () {
            this.snackbar = true
            this.$copyText(this.data.bank.debit)
        },
    }
}
</script>

<style lang="scss" scoped>
#vt-donate{
    .vt-intro{
        padding-top: 10%;
        padding-bottom: 5%;
        background:url("../assets/bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .vt-bank{
        padding-top: 5%;
        padding-bottom: 10%;
    }
    .vt-rek{
        padding: 15%;
    }
    .vt-img{
        width: 300px;
        height: auto;
        float: right;
    }
    @media screen and (max-width: 720px) {
        .vt-intro{
            padding: 10% 5%;
        }
        .vt-bank{
            padding: 5% 5% 10% 5%;
        }
        .vt-img{
            width: 125px;
        }
        .vt-rek{
        padding: 10% 5%;
        }
    }
}
</style>