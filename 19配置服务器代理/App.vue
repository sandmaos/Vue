<template>
  <div>
      <button @click="getStu">获取学生信息</button>
      <ul>
        <li v-for="(todo,index) in stuData" v-bind:key=index>
            {{todo}}
        </li>
       </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'App',
    data() {
        return {
            stuData:[]
        }
    },
    methods: {
        getStu(){
            axios.get('http://localhost:8080/myRequest/menu').then(
                response=>{
                    console.log('成功',response.data)
                    this.stuData=response.data
                },
                error=>{console.log('失败'),error.message}
            )
        }
    },
}
</script>
