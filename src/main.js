import Vue from 'vue'
import $ from "jquery"
import App from './App.vue'
import router from './router'

import typed from "typed.js"

Vue.config.productionTip = false
Vue.prototype.$ = $;
Vue.prototype.typed = typed;

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
