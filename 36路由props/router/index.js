import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'

import News from '../pages/News'
import Message from '../pages/Message'

import Detail from '../pages/Detail'

//创建并暴露路由器
export default new VueRouter({
    //注意是routes
    routes:[
        {
            path:'/about',
            component:About,
            children:[
                {
                    path:'message',
                    component:Message,
                },
                {
                    path:'news',
                    component:News,
                },
            ]
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children:[
                        {   
                            name:'myDetail',
                            path:'detail/:id/:title',
                            component:Detail,
                            //props的第一种写法,对象中所有keyValue以props形式传给detail
                            // props:{a:1,b:'hello'}

                            //props的第二种写法,布尔值为真，传递此路由收到的所有参数，props传
                            // props:true,

                            //props的第三种写法,函数

                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            },

                            // props({query}){
                            //     return {id:query.id,title:query.title}
                            // },

                            // props({query:{id,title}}){
                            //     return {id,title}
                            // },
                            
                        }
                    ]
                },
                {
                    path:'news',
                    component:News,
                },
            ]
        },
    ]
})
