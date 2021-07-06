<template>
    <div id="vt-footer" class="primary">
        <v-container>
            <v-row>
                <v-col cols="6">
                    <img class="vt-logo" src="../../assets/vintee-logo.png" />
                </v-col>
                <v-col cols="6" class="white--text vt-center">
                    <div>
                        <p>&copy; 2021 Vintee Collection.</p>
                        <p>All rights reserved.</p>
                    </div>
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

#vt-footer {
    padding: 5% 0;
        .vt-logo{
            width: 200px;
            height: auto;
            float: right;
            margin-right: 50px;
        }
        .vt-center{
            display: flex;
            align-items: center; /* align vertical */
        }
        p{
            font-size: 24px;
        }
        @media screen and (max-width: 720px) {
        .vt-logo{
            width: 90px;
            margin-right: 20px;
        }
        p{
            font-size: 14px;
        }
    }
}

</style>