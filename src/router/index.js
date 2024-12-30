import { createRouter, createWebHashHistory } from 'vue-router';

import chaxun from '../components/chaxun.vue';
import gengxi from '../components/gengxi.vue';
import Gonggo from '../components/gonggo.vue';
import shancu from '../components/shancu.vue';

const routes=[
    {
        path:'/w',
        component:Denglu 
    },
    {
        path:'/s',
        component:Gonggo,
        redirect: "/gonggo",
        children:[
            {
                path:'/gonggo/chaxun',
                component: chaxun },
            {
                path:'/gonggo/gengxi',
                component:gengxi
            },
            {
                path:'/gonggo/shancu',
                component:shancu
            }
        ]
    },]  

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router;