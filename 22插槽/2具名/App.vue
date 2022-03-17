<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://www.thisislocallondon.co.uk/resources/images/12088462.jpg" alt="美食">
            <a slot="footer" href="https://www.google.com">查看更多</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="https://www.google.com">单机</a>
                <a href="https://www.google.com">网络</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
            </video>
            <template slot="footer">
                <div>
                    <div class="foot">
                    <a href="https://www.google.com">经典</a>
                    <a href="https://www.google.com">热门</a>
                    <a href="https://www.google.com">推荐</a>
                    </div>
                    <h4>欢迎前来观看</h4>
                </div>
            </template>
            
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