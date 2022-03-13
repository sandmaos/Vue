<template>
  <div>
      <Student :score="67"/>
      <hr> 
      <!-- 验证props -->
      <Student :score="99"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
    export default {
      name:'App',
      components: { Student },

    }
</script>

<style>

</style>