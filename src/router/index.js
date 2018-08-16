import Vue from 'vue'
import Router from 'vue-router'
Vue.use(require('vue-wechat-title'))

// const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)
const Main = resolve => require(['@/view/Main'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
