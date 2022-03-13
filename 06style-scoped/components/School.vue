<template>
  <div class="demo">
    <h2>学校：{{name}}</h2>
    <h2>地址：{{address}}</h2>
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
}
</script>

<style scoped lang="less">
.demo{
  background-color: skyblue;
}
</style>