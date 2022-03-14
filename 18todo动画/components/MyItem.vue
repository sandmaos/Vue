<template>
<!-- <transition name="todo" appear> -->
    <li >
    <label>
        <input type="checkbox" 
        :checked="todo.done" 
        @change="handleTodo(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>

        <input v-show="todo.isEdit" 
        type="text" 
        :value="todo.title" 
        @blur="handleBlur(todo,$event)"
        ref="inputTitle" 
        >

    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>

    </li>
<!-- </transition> -->
  
</template>

<script>
export default {
    name:'MyItem',
    //接受todo对象
    props:['todo'],
    methods: {
        handleTodo(id){
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        handleDel(id){
            if(confirm("确认删除?"))
            // this.delTodo(id)
            this.$bus.$emit('delTodo',id)
        },
        handleEdit(todo){
            if (!todo.hasOwnProperty('isEdit'))
                this.$set(todo,'isEdit',true)
            else
                todo.isEdit=true
            //下一次dom更新结束后执行
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        }, 
        //失去焦点实现编辑
        handleBlur(todo,e){
            todo.isEdit=false
            if (!e.target.value.trim()) 
                return alert("输入不能为空")
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
        }
    },
}
</script>

<style scoped>

li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    float: right;
    display:none;
    margin-top: 3px;
}

li:hover button {
    float: right;
    display:block;
    margin-top: 3px;
}
li:before {
    content: initial;
}
li:last-child {
    border-bottom: none;
}

li:hover{
    background-color: #ddd;
}


.todo-enter-active{
    animation: myMove 0.5s;
}

.todo-leave-active{
    animation: myMove 0.5s reverse;
}

@keyframes myMove {
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0%);
    }
}

</style>