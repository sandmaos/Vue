<template>
  <div class="school">
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
    mounted() {
      // console.log('School',this.x)
      this.$bus.$on('hello', (date) => {console.log('收到Stu',date)})  
    },
    beforeDestroy() {
      this.$bus.$off('hello')
    },
}
</script>

<style scoped lang="less">
.school{
  background-color: skyblue;
  padding: 5px;
  margin-top: 5px;

}
</style>