import Vue from 'vue'
import Router from 'vue-router'
Vue.use(require('vue-wechat-title'))

// const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)
const Register = resolve => require(['@/view/register'], resolve)
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Register',
    component: Register
  }]
})
