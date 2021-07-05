<template>
    <div id="vt-gallery">
        <v-container>

        </v-container>
    </div>
</template>

<script>

export default {
    data(){
        return{
            images: [
                'https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/1751673/pexels-photo-1751673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            ],
        }
    },
    components: {

    },
     mounted() {
    }
}
</script>

<style lang="scss" scoped>
    #vt-gallery{
        padding: 10% 0;
        
        @media screen and (max-width: 720px) {
            padding: 10% 5%;
        }
    }
</style>