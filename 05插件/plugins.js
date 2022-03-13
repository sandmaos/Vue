export default{
    install(Vue){
        Vue.filter('mySlice',function(val){
            return val.slice(0,4)
        }),
        //全局指令
        Vue.directive('myBind',{
            bind(ele,bind){
                ele.value=bind.value
            },
            inserted(ele,bind){
                ele.focus()
            },
            update(ele,bind){
                ele.value=bind.value
            }
        }),
        Vue.mixin({
            data(){
                return {
                    x:12,
                    y:23
                }      
            }
        }),
        //原型上添加方法
        Vue.prototype.hello = ()=>{ alert('hello') }
    }
}