<template>
<div>
    <button @click="isShow = !isShow"> 显示/隐藏</button>

    <!-- <transition-group name="demo" :appear="true">
        <h1 v-show="!isShow" key="1">Hello,</h1>
        <h1 v-show="isShow" key="2">world</h1>
    </transition-group> -->

    <transition name="demo" :appear="true">
        <div v-show="isShow">
            <h1>Hello,</h1>
            <h1>world</h1>
        </div>
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

<style scoped>
h1{
    background-color: rgb(197, 140, 33);
    /* transition: 0.5s linear; */
}

.demo-enter, .demo-leave-to{
    transform: translateX(-100%);
}

.hello-enter-active, .hello-leave-active{
    transition: 0.5s linear;
}

.demo-enter-to, .demo-leave{
    transform: translateX(0);
}

</style>