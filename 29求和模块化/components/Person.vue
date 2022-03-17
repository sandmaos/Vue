<template>
  <div>
      <h3 style="color:red">count组件的求和为：{{sum}}</h3>
      <h3>第一个人信息：{{firstPerson}}</h3>
      <input type="text" placeholder="输入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click="addJay">只添加Jay</button>
      <button @click="addServer">从github请求Jay的id</button>
      <ul>
          <li v-for="person in personList" :key="person.id">{{person.name}}</li>
      </ul>
  </div>
</template>

<script>  
import { mapState } from 'vuex';
import { nanoid } from 'nanoid'
export default {
    name:'Person',
    data() {
        return {
            name:'',
        }
    },
    computed: {
        ...mapState('countObj',['sum']),
        ...mapState('personObj',['personList']),

        firstPerson(){
            return this.$store.getters['personObj/firstPerson']
        }
        
    },
   methods: {
       add(){
        const personObj={id:nanoid(),name:this.name}
        this.$store.commit('personObj/ADD_PERSON',personObj)
        this.name=''
       },
        addJay(){
        const personObj={id:nanoid(),name:this.name}
        this.$store.dispatch('personObj/addJay',personObj)
        this.name=''
       },
        addServer(){
        this.$store.dispatch('personObj/addServer')
       },
   },
}
</script>

<style>

</style>