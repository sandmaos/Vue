//创建Vuex中的store
import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)

//响应组件中的动作
const actions={
    // plus:function(context,val) {
    //     context.commit('PLUS',val)
    // },
    // minus:function(context,val) {
    //     context.commit('MINUS',val)
    // },
    oddPlus:function(context,val){
        if(context.state.sum%2)
        context.commit('PLUS',val)
    },
    plusWait:function(context,val){
        setTimeout(() => {
            context.commit('PLUS',val)
        }, 400);   
    }
}

//用于操作数据
const mutations={
    PLUS:function(state,val) {
        state.sum+=val
    },
    MINUS:function(state,val) {
        state.sum-=val
    },
}

//存储数据
const state={
    sum:0,
    school:'NEU',
    subject:'CS',
}

//将state中的数据加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}

//创建并导入store
export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters:getters,
})