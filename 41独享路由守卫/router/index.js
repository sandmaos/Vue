import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'

import News from '../pages/News'
import Message from '../pages/Message'

import Detail from '../pages/Detail'

//创建并暴露路由器
const router = new VueRouter({
    //注意是routes
    routes:[
        {
            name:'myAbout',
            path:'/about',
            component:About,
            meta:{isAuth:false,title:'about'},
        },
        {
            name:'myHome',
            path:'/home',
            component:Home,
            meta:{isAuth:false,title:'home'},
            children:[
                {
                    name:'myMessage',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'message'},
                    beforeEnter: (to, from, next) => {
                        if(localStorage.getItem('school')==='neu')                             
                            next()  
                        else
                            alert('未知用户！')
                    },
                    children:[
                        {   
                            name:'myDetail',
                            path:'detail/:id/:title',
                            component:Detail,          
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            },
                            meta:{isAuth:true,title:'detail'},
                        }
                    ]
                },
                {
                    name:'myNews',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'news'},
                    beforeEnter: (to, from, next) => {
                        if(localStorage.getItem('school')==='neu')                             
                            next()  
                        else
                            alert('未知用户！')
                    },
                },
            ]
        },
    ]
})

// //全局前置路由守卫----每次陆游切换之前以及初始化时被调用
// router.beforeEach((to, from, next)=>{
//     //先在浏览器添加neu  
//     // if(to.name==='myNews' || to.name==='myMessage'){
//     if(to.meta.isAuth){
//         if(localStorage.getItem('school')==='neu')
//             next()          
//         else
//             alert('未知用户！')
//     } 
//     else
//         next()      
// })

// router.afterEach((to, from) => {
//     // to and from are both route objects.
//     document.title=to.meta.title || 'demo'
// })
export default router