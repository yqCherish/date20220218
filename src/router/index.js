import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HappyBirthDay from '../components/HappyBirthDay'
import NewYear from '../components/NewYear'

Vue.use(VueRouter)

const routes = [
  {
    path: "/happybirthday",
    name: "HappyBirthDay",
    component: HappyBirthDay,
    meta: { title:"生日快乐！" }
  },
  {
    path: "/",
    name: "NewYear",
    component: NewYear,
    meta: {title: "小黄同学~女生节快乐呀！"}
  }
]

const router = new VueRouter({
  /*  项目上线之前，要把这个 mode 的值改成 hash  */
  // mode: 'history',
  mode: 'hash',
  routes
})

export default router
