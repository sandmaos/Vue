<template>
  <div class="demo">
   
    <h2 class="txt">名字：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
          name:'Jay',
          sex:'male',
        }
    }
 }
</script>

<style scoped lang="less">
.demo{
  background-color: orange;
  .txt{
    font-size:40px;
  }
}
</style>