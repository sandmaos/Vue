import axios from 'axios'
import { nanoid } from "nanoid";
export default {
    namespaced:true,
    actions:{
        addJay(context,val){
            // 只加入Jay
            if(val.name.indexOf('Jay')===0)
                context.commit('ADD_PERSON',val)
            else
                alert('不是Jay')
        },
        addServer(context){
            axios.get('https://api.github.com/search/users?q=Jay').then(
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data.items[0].id})
                },
                error=>{console.log('失败'),error.message}
            )
        }
    },
    mutations:{
        ADD_PERSON(state,val){
            state.personList.unshift(val)
        }
    },
    state:{
        personList:[
            {id:'001',name:'Jay'}
        ]
    },
    getters:{
        firstPerson(state){
            return state.personList[0].name
        }
    },
}
