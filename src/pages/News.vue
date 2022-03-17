<template>
    <ul>
        <h2 :style="{opacity}">Hello</h2>
        <li>news1 <input type="text"></li>
        <li>news2 <input type="text"></li>
        <li>news3 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',  
    data() {
        return {
            opacity:1,
        }
    }, 

    // mounted() { 
    //     var flag=-1
    //     setInterval(() => {        
    //         if(this.opacity<=0)
    //             flag=1
    //         else if(this.opacity>=1)
    //             flag=-1
    //         this.opacity+=0.01*flag
    //     }, 10);
    // },

    activated() {
        var flag=-1
        setInterval(() => {        
            if(this.opacity<=0)
                flag=1
            else if(this.opacity>=1)
                flag=-1
            this.opacity+=0.01*flag
        }, 10);
    },

    deactivated() {
        
    },

}
</script>

<style>

</style>