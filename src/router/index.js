import Vue from 'vue'
import Router from 'vue-router'
import UserRetentionInsights from '@/components/UserRetentionInsights'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserRetentionInsights',
      component: UserRetentionInsights
    }
  ]
})
