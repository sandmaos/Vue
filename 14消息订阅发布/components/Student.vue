<template>
  <div class="student">

    <h2>名字：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sendStuName">学生名给school</button>
    <!-- <button @click="reBind">重新绑定myClick</button> -->
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data() {
        return {
          name:'Jay',
          sex:'male',
        }
    },
    methods: {
      sendStuName(){
        // this.$bus.$emit('hello',this.name)
      }
    },
    mounted() {
      // console.log('Student',this.x)
      pubsub.publish('hello',123)
    },
 }
</script>

<style scoped lang="less">
.student{
  background-color: orange;
  padding: 5px;
  margin-top: 5px;
}
</style>