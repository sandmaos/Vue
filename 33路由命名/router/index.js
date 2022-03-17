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
            name:'myAbout',
            path:'/about',
            component:About,
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
                            path:'detail',
                            component:Detail,
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
