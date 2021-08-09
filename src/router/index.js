import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
//路由懒加载
const Home = () => import('../view/Home.vue')
const Category = () => import('../view/Category.vue')
const Shopcart = () => import('../view/Shopcart.vue')
const Profile = () => import('../view/Profile.vue')

const Detail = () => import('../view/detail/Detail.vue')


//1.安装插件
Vue.use(VueRouter)


const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        mate: {
            title: '首页'
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            title: '分类'
        },
    },
    {
        path: '/shopcart',
        component: Shopcart,
        meta: {
            title: '购物车'
        },
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        },
    },
    {
        path: '/detail',
        component: Detail,
        meta: {
            title: '详情'
        }
    }
]


//2.创建router
const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出router
export default router