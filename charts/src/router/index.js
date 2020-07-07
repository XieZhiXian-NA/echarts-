import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Liquidfill from '../views/Liquidfill.vue'
import Wordcloud from '../views/Wordcloud.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/liquidfill',
    name: 'Liquidfill',
    component: Liquidfill
  },
  {
    path: '/wordcloud',
    name: 'Wordcloud',
    component: Wordcloud
  }

]

const router = new VueRouter({
  routes
})

export default router
