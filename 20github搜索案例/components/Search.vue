<template>
   <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter name" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
        
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'List',
    data() {
        return {
            keyWord:''
        }
    },
    methods: {
        searchUsers(){
            // 请求前更新List中的元素
            this.$bus.$emit('listData',{isFirst:false,isLoading:true,errMsg:'',users:[]})

            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response=>{
                    console.log('成功传给List!')
                    this.$bus.$emit('listData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error=>{
                    console.log('失败')
                    this.$bus.$emit('listData',{isLoading:false,errMsg:error.message,users:[]})
               }
            )
        }
    },
    // mounted() {
    //     this.$bus.$emit('getUsers',this.userList)
    // },
}
</script>

<style>

</style>