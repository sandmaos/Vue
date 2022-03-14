<template>
    <div class="todo-footer" v-show="total>0">
    <label>
    <!-- <input type="checkbox" :checked="isAll" @change="doneAll"/> -->
    <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
    <span>已完成{{counted}}</span> /全部{{total}}
    </span>
    <button class="btn btn-danger" @click="handleClearAllDone">清除所有已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos','doneAllTodo','clearAllDone'],
    computed: {
        total(){
            return this.todos.length
        },
        isAll:{
            get(){
                return this.counted===this.todos.length && this.todos.length!=0
            },
            set(val){
                this.doneAllTodo(val)
            }
        },
        counted(){
            return this.todos.reduce((pre,current) => pre + (current.done===true?1:0),0);

            // const num=this.todos.reduce((pre,current) => {
            //     return pre + (current.done===true?1:0)
            // },0);
            // return num

            // var num=0
            // this.todos.forEach(todo => {
            //     if(todo.done===true)
            //         num++ 
            // })
            // return num
        }
    },
    methods: {
        doneAll(instance){
            this.doneAllTodo(instance.target.checked)
        },
        handleClearAllDone(){
            if(confirm("确认清除?"))
            this.clearAllDone()
        }
    },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label {
display: inline-block;
margin-right:20px;
cursor: pointer;
}
.todo-footer label input {
position: relative;
top: -1px;
vertical-align: middle;
margin-right: 5px;
}
.todo-footer button {
float: right;
margin-top: 5px;
}
</style>