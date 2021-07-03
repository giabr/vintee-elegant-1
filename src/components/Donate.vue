<template>
    <div id="el-donate">
    <div class="el-intro">
        <v-container class="text-center dark--text">
            <h1 data-aos="fade-in" class="el-title">You are invited</h1>
            <p data-aos="fade-in">Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu pada kedua mempelai.</p>
            <br>
            <br>
            <p data-aos="fade-in">Dari kami yang berbahagia<br>Keluarga besar {{data.groom.nickname}} dan {{data.bride.nickname}}</p>
        </v-container>
    </div>
    <div class="el-bank grey">
        <v-container class="white el-rek dark--text">
            <p data-aos="fade-in" class="text-center">Apabila memberi merupakan tanda doa restu dan ungkapan terima kasih anda, kami dapat menerima kado dalam bentuk non-tunai.</p>
            <br>
            <v-row data-aos="fade-in">
                <v-col cols="6">
                    <img class="el-img" :src="data.bank.imgUrl" alt="" srcset="">
                </v-col>
                <v-col cols="6">
                    <p>{{data.bank.debit}}</p>
                    <p>{{data.bank.name}}</p>
                    <br>
                    <v-btn
                        color="primary"
                        elevation="0"
                        outlined
                    >
                        <p style="text-transform:none;font-size:12px;">Copy Rekening</p>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style lang="scss" scoped>
#el-donate{
    .el-intro{
        padding-top: 10%;
        padding-bottom: 5%;
        background:url("../assets/bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .el-bank{
        padding-top: 5%;
        padding-bottom: 10%;
    }
    .el-rek{
        padding: 15%;
    }
    .el-img{
        width: 250px;
        height: auto;
        float: right;
    }
    @media screen and (max-width: 720px) {
        .el-intro{
            padding: 10% 5%;
        }
        .el-bank{
            padding: 5% 5% 10% 5%;
        }
        .el-img{
            width: 125px;
        }
        .el-rek{
        padding: 10% 5%;
        }
    }
}
</style>