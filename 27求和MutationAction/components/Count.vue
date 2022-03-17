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
    <button @click="plus(n)">+</button>
    <button @click="minus(n)">-</button>
    <button @click="oddPlus(n)">奇数再求和</button>
    <button @click="plusWait(n)">等一下加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name:'Count',   
    data() {
        return {
            n:1,        
        }
    },
    computed: {
        ...mapState(['sum','school','subject']),

        ...mapGetters(['bigSum']),
    },
    methods: {
        // plus(){
        //    this.$store.commit('PLUS',this.n)
        // },
        // minus(){
        //    this.$store.commit('MINUS',this.n)
        // },

        //mapMutations生成方法，自动调用commit
        ...mapMutations({plus:'PLUS',minus:'MINUS'}),

        // oddPlus(){
        //     this.$store.dispatch('oddPlus',this.n)
        // },
        // plusWait(){
        //     this.$store.dispatch('plusWait',this.n)
        // },
        ...mapActions({oddPlus:'oddPlus',plusWait:'plusWait'})
    },
}
</script>

<style >
button{
    margin-left: 5px;
}
</style>