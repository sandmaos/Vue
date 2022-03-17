<template>
  <div>
    <h1>我在{{school}},学习{{subject}}</h1>
    <hr>
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和10倍为:{{bigSum}}</h1>
    <hr>
    <h3 style="color:red">组件总人数是：{{personList.length}}</h3>
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
        ...mapState(['sum','school','subject','personList']),

        ...mapGetters(['bigSum']),
    },
    methods: {
        ...mapMutations({plus:'PLUS',minus:'MINUS'}),

        ...mapActions({oddPlus:'oddPlus',plusWait:'plusWait'})
    },
}
</script>

<style >
button{
    margin-left: 5px;
}
</style>