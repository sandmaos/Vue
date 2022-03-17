<template>
    <div class="container">
        <Category title="美食">
            <img src="https://www.thisislocallondon.co.uk/resources/images/12088462.jpg" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
            </video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'

export default {
    components:{Category},
    name:'App',
    data() {
        return {
            foods:['面','茶','油','米'],
            games:['使命召唤','战地','刺客信条','荣誉勋章'],
            films:['头文字D','茶馆','情人','霸王别姬'],
        }
    },  
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: space-around;
}

img{
    width: 100%;
}

video{
    width: 100%;
}
</style>