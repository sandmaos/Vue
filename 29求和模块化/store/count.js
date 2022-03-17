export default {
    namespaced:true, //一定要加命名空间
    actions:{
        oddPlus:function(context,val){
            if(context.state.sum%2)
            context.commit('PLUS',val)
        },
        plusWait:function(context,val){
            setTimeout(() => {
                context.commit('PLUS',val)
            }, 400);   
        }
    },
    mutations:{
        PLUS:function(state,val) {
            state.sum+=val
        },
        MINUS:function(state,val) {
            state.sum-=val
        },
    },
    state:{
        sum:0,
        school:'NEU',
        subject:'CS',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}