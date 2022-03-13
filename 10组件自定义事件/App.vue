<template>
  <div class="app">
      <h1>{{msg}}</h1>
       <h1>得到的学生姓名是:{{stuName}}</h1>
       <hr>
      <!-- 传递函数型的props -->
      <School :getSchoolName="getSchoolName"/>
      <hr>
      <!-- 绑定自定义事件 -->
      <!-- <Student v-on:myClick="getStudentName" v-on:test="runTest"/> -->
  
      <!-- 设置参考的key，可设置时间间隔 mouted -->
      <Student ref="studentRefer" @click.native="show"/>
  </div>
</template>
  
<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
    export default {
      name:'App',
      components: { Student, School },
      data() {
        return {
          msg:'Hello',
          stuName:''
        }
      },
      methods: {
        getSchoolName(val){
          console.log(val)
        },
        getStudentName(val,...params){
          console.log(val,params)
          this.stuName=val
        },
        runTest(){
          console.log("test事件")
        },
        show(){
          alert('1,2,3')
        }
      },
      mounted() {
        this.$refs.studentRefer.$on('myClick',this.getStudentName)
        // this.$refs.student.$on('myClick',(val,...params) => {
        //   this.stuName=val
        // })

        // this.$refs.student.$once('myClick',this.getStudentName)
      },
    }
</script>

<style>
.app{
  background-color: #ddd;
    padding: 5px;
}
</style>