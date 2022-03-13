<template>
  <div>
      <button @click="show">点</button>
    <h2>学校：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入混合
import {mixin} from '../mixin'
export default {
    name:'School',
    data() {
        return {
          name:'Neu',
          address:'Boston',
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>