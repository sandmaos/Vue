<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2> Vue Router Demo</h2>
          <button class="btn btn-danger" @click="backward">后退</button>&nbsp;
          <button class="btn btn-danger" @click="forward">前进</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Banner', 
    methods: {
    backward(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
  },  
}
</script>

<style >

</style>