<template>
<div class="demo">
    <h2>名字：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
</div>
</template>

<script>
export default{
    name:'Student',
    data(){
        return {
            name:"Jay",
            age:23
        }
    },
    methods: {
  
    },
}

</script>
<style>
.demo{
    background-color: orange;
}
</style>
