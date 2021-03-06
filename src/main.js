import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueCookies from 'vue-cookies'

import './assets/style.css';

import { ButtonGroupPlugin } from 'bootstrap-vue'


Vue.config.productionTip = false
Vue.use(ButtonGroupPlugin)
Vue.use(VueCookies)
new Vue({
    router,
    store,



    render: h => h(App),
}).$mount('#app')