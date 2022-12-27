import {createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path:'/posts',
            name:'posts',
            component:() => import('../views/Posts.vue')
        },
        {
            path:'/postDetail/:id',
            name:'postsDetail',
            component:() => import('../views/PostsDetail.vue')
        }
    ]
})


export default router