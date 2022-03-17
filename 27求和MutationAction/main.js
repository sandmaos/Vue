import Vue from "vue";
import App from "./App.vue" 

Vue.config.productionTip=false

import store from './store/index.js'

new Vue({
    el:"#app",
    render: h=>h(App),
    store:store,
    beforeCreate(){
        Vue.prototype.$bus=this
    },
})