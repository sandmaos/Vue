<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>名字：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>成绩：{{myScore+1}}</h2>
    <button @click="change">增加年龄</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
          msg:'Asshole',
            name:'Neu',
            sex:'male',
            age:23,
            myScore:this.score
        }
    },
    methods: {
      change(){
        this.myScore++
      }
    },
    // props:['score'], 简单接收

    // props:{
    //   score:Number
    // }

    props:{
      score:{
        type:Number,
        required:true
      }
    }
}
</script>

<style>

</style>