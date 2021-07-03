<template>
    <div id="el-quotes" class="grey">
        <v-container class="text-center" data-aos="fade-in">
            <h3 class="primary--text"><q>{{data.words}}</q><br><br>{{data.author}}</h3>
        </v-container>
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
    #el-quotes{
        padding-top: 20%;
        @media screen and (max-width: 720px) {
            padding-top: 30%;
            padding-bottom: 20%;
            padding-right: 5%;
            padding-left: 5%;
        } 
    }
</style>