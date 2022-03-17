import Vue from "vue";
import App from "./App.vue" 

//引入VueRouter
import VueRouter from "vue-router"
Vue.use(VueRouter)

//引入路由器
import router from "./router/index.js"

Vue.config.productionTip=false

new Vue({
    el:"#app",
    render: h=>h(App),
    router:router,
})