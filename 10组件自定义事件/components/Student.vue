<template>
  <div class="student">
   
    <h2>名字：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sendStudentlName">传学生名</button>
    <button @click="unBind">解绑myClick</button>
    <button @click="unBindAll">解绑多个事件</button>
    <button @click="kill">销毁所有</button>

    <!-- <button @click="reBind">重新绑定myClick</button> -->
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
    },
    methods: {
      sendStudentlName(){
        // 找到App中给student实例vc绑定的myClick事件
        this.$emit('myClick', this.name,1,2,3,4,5)
        this.$emit('test')
      },
      unBind(){
        this.$off('myClick')
      },
      unBindAll(){
        // this.$off() --所有的
        this.$off(['myClick','test'])
      },
      kill(){
        this.$destroy() 
      },
    
      // reBind(){
      //   this.$v-on('myClick')
      // },
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