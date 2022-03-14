<template>
<div>
    <button @click="isShow = !isShow"> 显示/隐藏</button>
    <transition name="demo" :appear="true">
    <h1 v-show="isShow" >Hello</h1>
    </transition>
</div>
</template>

<script>
export default{
    name:'Test',
    data(){
        return {
            isShow:true
        }
    },
}

</script>

<style scpoed>
h1{
    background-color: orange;
}

.demo-enter-active{
    animation: myMove 1s;
}

.demo-leave-active{
    animation: myMove 1s reverse;
}

@keyframes myMove {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0%);
    }
}
</style>