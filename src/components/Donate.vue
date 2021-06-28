<template>
    <div id="el-donate">
    <div class="el-intro">
        <v-container class="text-center">
            <h1 data-aos="fade-in" class="el-title dark--text">You are invited</h1>
            <p data-aos="fade-in">Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu pada kedua mempelai.</p>
            <br>
            <br>
            <p data-aos="fade-in">Dari kami yang berbahagia<br>Keluarga besar Galih dan Ratna</p>
        </v-container>
    </div>
    <div class="el-bank grey">
        <v-container class="white">
            <p data-aos="fade-in" class="text-center">Apabila memberi merupakan tanda doa restu dan ungkapan terima kasih anda, kami dapat menerima kado dalam bentuk non-tunai.</p>
            <br>
            <v-row data-aos="fade-in">
                <v-col cols="6">
                    <img class="el-img" src="../assets/bank-logo.png" alt="" srcset="">
                </v-col>
                <v-col cols="6">
                    <p>1340009985515</p>
                    <p>Ratna Putri Valencia</p>
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
    .el-img{
        width: 250px;
        height: auto;
        float: right;
    }
        @media screen and (max-width: 480px) {
        .el-bank{
            padding: 5% 5% 10% 5%;
        }
        .el-img{
            width: 125px;
        }
    }
}
</style>