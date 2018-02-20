import Vue from 'vue'
import Router from 'vue-router'
import skill from '@/components/skill'
import about from "@/components/about"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skill',
      component: skill
    },
    {
      path: '/about/:name',
      name: 'about',
      component: about
    }
  ]
})
