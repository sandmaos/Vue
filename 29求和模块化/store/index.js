//创建Vuex中的store
import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

import countOptions from './count.js'
import personOptions from './person.js'

//创建并导入store
export default new Vuex.Store({
    modules:{
        countObj:countOptions,
        personObj:personOptions,
    }
})