<template>
    <div id="el-event" class="grey">
        <v-container class="text-center">
            <h1 data-aos="fade-in" class="el-title">Rabu, 18 Agustus 2021</h1>
            <br>
            <v-row>
                <v-col data-aos="fade-in" cols="12" md="6" sm="12">
                    <h2 class="primary--text">Akad Nikah</h2>
                    <p class="el-time">08:00 - 10:00</p>
                    <h3>Masjid Agung Sudirman</h3>
                    <p>Jl. Slamet Riyadi No.1, Panjer, Denpasar</p>
                    <v-btn
                    class="el-btn"
                    color="primary"
                    outlined
                    >
                    <img src="../assets/map.svg" alt="" srcset="">
                    <span class="primary--text">Lihat peta</span>
                    </v-btn>
                </v-col>
                <v-col data-aos="fade-in" cols="12" md="6" sm="12">
                    <h2 class="primary--text">Resepsi</h2>
                    <p class="primary--text">Resepsi dan pesta adat</p>
                    <p class="el-time">12:00 - 16:00</p>
                    <h3>Balai Pertemuan Bhumiku</h3>
                    <p>Jl. Gn. Soputan No.49, Pemecutan, Denpasar</p>
                    <v-btn
                    class="el-btn"
                    color="primary"
                    outlined
                    >
                    <img src="../assets/map.svg" alt="" srcset="">
                    <span class="primary--text">Lihat peta</span>
                    </v-btn>
                </v-col>                
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#el-event{
    padding: 10% 0;
    background-image: url("../assets/event-decor.svg");
    background-position: right bottom;
    background-size: 300px auto;
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
    @media screen and (min-width: 480px) {
        h3, p{
            padding: 5px 0;
        }
    }
    @media screen and (max-width: 480px) {
        background-size: 80px auto;
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