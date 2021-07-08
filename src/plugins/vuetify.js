import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#A06E57',
            secondary: '#F9C68D',
            grey: '#EFEFF1',
            dark: '#555555',
          },
        },
      },
});
