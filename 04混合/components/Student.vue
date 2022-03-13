<template>
  <div>
     <button @click="show"> 点</button>
    <h2>名字：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'School',
    data() {
        return {
          name:'jay',
          sex:'male',
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>