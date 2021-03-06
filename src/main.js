import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'

Vue.use(Vuetify);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
