<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- to的字符串写法，params -->
                 <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link>&nbsp; -->
                
                <!-- to的对象写法，params -- -->
                <router-link :to="{
                    name:'myDetail',
                    query:{
                        id:item.id,
                        title:item.title
                    }
                }">
                {{item.title}}
                </router-link>&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
            ]
        }
    }, 
}
</script>

<style >

</style>