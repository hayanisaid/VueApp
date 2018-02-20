import Vue from 'vue'
import Router from 'vue-router'
import skill from '@/components/skill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skill',
      component: skill
    }
  ]
})
