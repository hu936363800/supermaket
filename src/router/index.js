import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile  = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 引入防止路由跳转过快
VueRouter.prototype.push = function push (location)
 {return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
    return originalReplace.call(this, location).catch(err => err)
}


const routes = [ 
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
  	path:'/category',
  	component:Category
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]



const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
