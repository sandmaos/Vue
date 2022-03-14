<template>
  <div id="root">
  <div class="todo-container">
  <div class="todo-wrap">
    <MyHeader @addTodo="addTodo"/>

    <MyList :todos="todos" />

    <MyFooter :todos="todos" 
    @doneAllTodo="doneAllTodo" 
    @clearAllDone="clearAllDone"/>

  </div>
  </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

    export default {
      name:'App',
      components: { MyHeader, MyList, MyFooter},
      data() {
        return {
          todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
      //添加一个todo
      addTodo(x){
        console.log("在App.vue中收到的",x)
        this.todos.unshift(x)
      },
      checkTodo(id){
        this.todos.forEach((todo) => {
          if(todo.id===id)
            todo.done=!todo.done
        })
      },
      delTodo(id){
        this.todos.forEach((todo) => {
          if(todo.id===id){
            this.todos.shift(todo)
            console.log("在App中删除了任务：",todo.title)
          }
        })
      },
      doneAllTodo(done){
        this.todos.forEach(todo => {
            todo.done=done
        });
      },
      clearAllDone(){
        this.todos=this.todos.filter((todo) => {
          return !todo.done
        });
      },
      updateTodo(id,title){
        this.todos.forEach((todo) => {
          if(todo.id===id)
            todo.title=title
        })
      },
    },
    watch:{
      todos:{
        deep:true,
        handler(val){
        localStorage.setItem('todos',JSON.stringify(val))
        }
      }

      // todos(val){
      //   localStorage.setItem('todos',JSON.stringify(val))
      // }
    },
    mounted() {
      this.$bus.$on('checkTodo',this.checkTodo)
      this.$bus.$on('delTodo',this.delTodo)
      this.$bus.$on('updateTodo',this.updateTodo)
    },
    
    beforeDestroy() {
      this.$bus.$off('checkTodo')
      this.$bus.$off('delTodo')
      this.$bus.$off('updateTodo')
    },
  }
</script>

<style>
/*base*/
body {
  background:#fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid #398cda;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: #337ec4;
}

.btn:focus{
  outline: none;
}

.todo-container{
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap{
  padding: 10px;
  border:  1px solid #ddd;
  border-radius: 5px;
}

</style>