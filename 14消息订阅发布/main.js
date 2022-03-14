import Vue from "vue";
import App from "./App.vue" 

Vue.config.productionTip=false

// const demo = Vue.extend({})
// const d=new demo()
// Vue.prototype.bus=d

new Vue({
    el:"#app",
    render: h=>h(App),
})