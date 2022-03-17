<template>
  <div>
    <h1>我在{{school}},学习{{subject}}</h1>
    <hr>
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和10倍为:{{bigSum}}</h1>
    <hr>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <button @click="oddPlus">奇数再求和</button>
    <button @click="plusWait">等一下加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";

export default {
    name:'Count',   
    data() {
        return {
            n:1,        
        }
    },
    computed: {
        //自己写不依赖mapState的计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },

        //mapState中生成,对象写法
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),
        
        //mapState中生成,数组写法
        ...mapState(['sum','school','subject']),

        // mapGetters
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        ...mapGetters(['bigSum']),
    },
    methods: {
        plus(){
           this.$store.commit('PLUS',this.n)
        },
        minus(){
           this.$store.commit('MINUS',this.n)
        },
        oddPlus(){
            this.$store.dispatch('oddPlus',this.n)
        },
        plusWait(){
            this.$store.dispatch('plusWait',this.n)
        },
    },
}
</script>

<style >
button{
    margin-left: 5px;
}
</style>