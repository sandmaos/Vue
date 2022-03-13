<template>
  <div>
   
    <h2>名字：{{name | mySlice}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
          name:'只留四个字符',
          sex:'male',
        }
    }
 
}
</script>

<style>

</style>