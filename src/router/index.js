import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import SucessMobi from '@/components/SucessMobi';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/sucess',
            name: 'SucessMobi',
            component: SucessMobi
        },
        {
            path:"/",
            name:'HelloWorld',
            component: HelloWorld
        }
    ],
    mode: "history"
})