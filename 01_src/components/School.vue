<template>
<div>
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="show"> 提示学校</button>
</div>
</template>

<script>
export default{
    name:'School',
    data(){
        return {
            schoolName:"NEU",
            address:"Boston"
        }
        
    },
    methods: {
        show(){
            alert(this.schoolName)
        }
    },
}

</script>

<style>
.demo{
        background-color: orange;
    }
</style>