import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeA =()=>import('../view/HomeA')
const HomeB =()=>import('../view/HomeB')
const HomeC =()=>import('../view/HomeC')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/homea'
    },
    {
        path:'/homea',
        component:HomeA
    },
    {
        path:'/homeb',
        component:HomeB
    },
    {
        path:'/homec',
        component:HomeC
    },
]

const router = new VueRouter({
    routes
})
export default router



