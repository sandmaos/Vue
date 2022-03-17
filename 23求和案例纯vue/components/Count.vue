<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
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
export default {
    name:'Count',   
    data() {
        return {
            n:1,
            sum:0,
        }
    },
    methods: {
        plus(){
            this.sum+=this.n
        },
        minus(){
            this.sum-=this.n
        },
        oddPlus(){
            if(this.sum%2){
                this.sum+=this.n
            }
        },
        plusWait(){
            setInterval(() => {
                this.sum+=this.n
            }, 1000);
        },
    },
}
</script>

<style >
button{
    margin-left: 5px;
}
</style>