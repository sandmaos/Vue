<template>
  <div class="todo-header">
    <input type="text" placeholder="任务名称，回车键" v-model="txt" @keyup.enter="add"/>
</div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data() {
        return {
            txt:''
        }
    },
    methods: {
        add(){
            //校验数据
            if (this.txt.trim==='')
                return alert("不能为空!")
            //包装用户的输入
            const todoObj={id:nanoid(),title:this.txt,done:false}
            // App.vue中添加
            this.addTodo(todoObj)
            this.txt=''
        },
    },
    props:["addTodo"],
}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>