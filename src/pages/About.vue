<template>  
<div>
    <h2>About组件内容</h2>

</div>
</template>

<script>

export default {
    name:'About',   

    //通过路由进入该组件时调用
    beforeRouteEnter (to, from, next) {
        if(to.meta.isAuth){
            if(localStorage.getItem('school')==='neu')
                next()          
            else
                alert('未知用户！')
            } 
        else
            next() 
    },

    //通过路由离开该组件时调用
    beforeRouteLeave (to, from, next) {
        next()  
    },

}
</script>

<style >

</style>