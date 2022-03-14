import Vue from "vue"
// import Vue from "vue/dist/vue"
import App from "./App.vue"

Vue.config.productionTip=false
new Vue({
    el:"#app",
    // template:`<App><App/>`,
    // components:{App},
    // render:h=>h(App),
    render:createElement=>{
        return createElement(App)
 
    }
})