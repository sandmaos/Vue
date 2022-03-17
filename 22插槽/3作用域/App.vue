<template>
    <div class="container">
        <Category title="电影">
            <template scope="receive">
              <ul>
                <li v-for="(item,index) in receive.films" :key="index">{{item}}</li>
                </ul>
            </template>   
        </Category>

        <Category title="电影">
            <template scope="{films}">
              <ol>
                <li v-for="(item,index) in films" :key="index">{{item}}</li>
                </ol>
            </template>   
        </Category>

        <Category title="电影">
            <template slot-scope="{films}">    
                <h4 v-for="(item,index) in films" :key="index">{{item}}</h4>
            </template>  
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'

export default {
    components:{Category},
    name:'App',
}
</script>
<style scoped>
.container,.foot{
    display: flex;
    justify-content: space-around;
    text-align:center;
}

img{
    width: 100%;
}

video{
    width: 100%;
}
</style>