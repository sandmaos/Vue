<template>
  <div>
      <h1 v-text="msg" ref="dom"></h1>
      <button @click="add">输出dom</button>
      <School/>
  </div>
</template>

<script>
import School from './components/School.vue'
    export default {
      name:'App',
      components: { School },
      data() {
        return {
          msg:'Hello',
        }
      },
      methods: {
        add(){
          console.log(this.$refs.dom)
        }
      },

    }
</script>

<style>

</style>