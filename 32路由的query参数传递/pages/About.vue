<template>  
<div>
    <h2>About组件内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li>
            <router-link class="list-group-item" active-class="active" to="/about/news">News</router-link>
            </li>
            <li>
            <router-link class="list-group-item" active-class="active" to="/about/message">Message</router-link>
            </li>
        </ul>
        <ul>
            <!-- <li v-for="item in news" :key=item>
                <News/>
            </li> -->
            <router-view></router-view>
        </ul>
    </div>
</div>
</template>

<script>

export default {
    name:'About',   
}
</script>

<style >

</style>