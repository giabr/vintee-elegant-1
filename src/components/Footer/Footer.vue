<template>
    <div id="vt-footer" class="primary">
        <v-container class="white--text text-center">
            <p style="font-size:14px">Created with love by</p>
            <br>
            <br>
            <img class="vt-logo" src="../../assets/vintee-logo.png" />
            <br>
            <div>
                <p>&copy; 2021 <span class="secondary--text">Vintee</span> Collection.</p>
                <p>All rights reserved.</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#vt-footer {
    padding: 10% 0;
        .vt-logo{
            width: 200px;
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 30px;
        }
        .vt-center{
            display: flex;
            align-items: center; /* align vertical */
            text-align: right;
        }
        @media screen and (max-width: 720px) {
        .vt-logo{
            width: 45%;
        }
    }
}

</style>