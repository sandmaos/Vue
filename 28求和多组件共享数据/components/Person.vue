<template>
  <div>
      <h3 style="color:red">count组件的求和为：{{sum}}</h3>
      <input type="text" placeholder="输入名字" v-model="name">
      <button @click="add">添加</button>
      <ul>
          <li v-for="person in personList" :key="person.id">{{person.name}}</li>
      </ul>
  </div>
</template>

<script>  
import { mapState,mapMutations } from 'vuex';
import { nanoid } from 'nanoid'
export default {
    name:'Person',
    data() {
        return {
            name:'',
        }
    },
    computed: {
        // personList(){
        //     return this.$store.state.personList
        // },

        ...mapState(['personList','sum']),
    },
   methods: {
       add(){
        const personObj={id:nanoid(),name:this.name}
        this.$store.commit('ADD_PERSON',personObj)
        this.name=''
        // ...map({add:'ADD_PERSON'})
       },
   },
}
</script>

<style>

</style>