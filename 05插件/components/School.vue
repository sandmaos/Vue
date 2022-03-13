<template>
  <div>
    <h2>学校：{{name}}</h2>
    <h2>地址：{{address}}</h2>
    <input type="text" v-myBind='name'><br>
    <button @click="test">hello方法</button>
  </div>
</template>

<script>
// 引入混合
export default {
    name:'School',
    data() {
        return {
          name:'Neu',
          address:'Boston',
        }
    },
    methods: {
      test(){
        this.hello()
      }
    },
}
</script>

<style>

</style>