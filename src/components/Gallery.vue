<template>
    <div id="vt-gallery" class="grey">
        <v-container>
        <splide :options="primaryOptions" ref="primary">
            <splide-slide v-for="slide in 5" :key="slide">
            <img class="vt-img" :src="getImg(slide)">
            </splide-slide>
        </splide>
        <splide :options="secondaryOptions" ref="secondary">
            <splide-slide v-for="slide in 5" :key="slide">
            <img class="vt-img-thumbnail" :src="getImg(slide)">
            </splide-slide>
        </splide>
        </v-container>
        <v-container>
            <iframe class="vt-frame" src="https://www.youtube.com/embed/-LLJ_Ywt1zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-container>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    data(){
        return{
            primaryOptions: {
                type: 'loop',
                pagination: false,
                arrows: false,
                height: 600,
                focus: 'center',
                cover: true,
                breakpoints: {
                    720: {
                        height: 400
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
                        fixedWidth: 80,
                        fixedHeight: 88
                    }
                }
            }
        }
    },
    components: {
        Splide,
        SplideSlide
    },
    methods: {
        getImg(pic) {
        return require(`../assets/images/gallery/gallery-${pic}.jpg`)
        }
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
        .vt-frame{
            width: 100%;
            height: 500px;
        }
        @media screen and (max-width: 720px) {
            padding: 10% 5%;
            .vt-frame{
                height: 300px;
            }
        }
    }
</style>