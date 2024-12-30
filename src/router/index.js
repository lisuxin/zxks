import { createRouter, createWebHashHistory } from 'vue-router';

import chaxun from '../components/chaxun.vue';
import gengxi from '../components/gengxi.vue';
import gonggo from '../components/gonggo.vue';
import shancu from '../components/shancu.vue';
import denglu from '../components/denglu.vue';

const routes=[
    {
        path:'/',
        component:denglu
    },
    {
        path:'/gonggo',
        component:gonggo,
        redirect:"/gonggo/chaxun",
        children:[
            {
                name:"chaxun",
                path:'chaxun',
                component: chaxun
            },
            {
                name:"gengxi",
                path:'gengxi',
                component:gengxi
            },
            {
                name:"shancu",
                path:'shancu',
                component:shancu
            }
        ]
    }]

const router = createRouter({
    history:createWebHashHistory(),routes
})

export default router;