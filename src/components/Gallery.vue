<template>
    <div id="vt-gallery">
        <v-container>
        <splide :slides="images" :options="primaryOptions" ref="primary">
            <splide-slide v-for="slide in images" :key="slide">
            <img class="vt-img" :src="slide">
            </splide-slide>
        </splide>
        <splide :slides="images" :options="secondaryOptions" ref="secondary">
            <splide-slide v-for="slide in images" :key="slide">
            <img class="vt-img-thumbnail" :src="slide">
            </splide-slide>
        </splide>
        </v-container>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    props: {
        images: Array
    },
    data(){
        return{
            primaryOptions: {
                type: 'loop',
                pagination: false,
                arrows: false,
                heightRatio: 1,
                focus: 'center',
                breakpoints: {
                    720: {
                        heightRatio: 1.5,
                    }
                }
			},
            secondaryOptions: {
                type: 'slide',
                rewind: true,
                pagination: false,
                fixedWidth: 200,
                fixedHeight: 120,
                cover: true,
                arrows: false,
                gap: '1rem',
                focus: 'center',
                isNavigation: true,
                autoplay: true,
                interval: 5000,
                breakpoints: {
                    720: {
                        fixedWidth: 130,
                        fixedHeight: 78
                    }
                }
            }
        }
    },
    components: {
        Splide,
        SplideSlide
    },
     mounted() {
        this.$refs.primary.sync( this.$refs.secondary.splide );
    }
}
</script>

<style lang="scss" scoped>
    #vt-gallery{
        padding: 10% 0;
        .vt-img{
            width: 100%;
        }
        @media screen and (max-width: 720px) {
            padding: 10% 5%;
        }
    }
</style>