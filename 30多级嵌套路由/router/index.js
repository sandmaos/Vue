import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'

import News from '../pages/News'
import Message from '../pages/Message'

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
                },
                {
                    path:'news',
                    component:News,
                },
            ]
        },
    ]
})
