<template>
  <div class="school">
    <h2>学校：{{name}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="sendSchoolName()">传学校名</button>
  </div>
</template>

<script>
// 引入混合
export default {
    name:'School',
    props:['getSchoolName'],
    data() {
        return {
          name:'Neu',
          address:'Boston',
        }
    },
    methods: {
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
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