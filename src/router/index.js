import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import searchKeyWord from '@/components/searchKeyWord'
import keyWord from '@/components/keyWord'
import keyWordList from '@/components/keyWordList'
import Detail from '@/components/Detail'
import myChannel from '@/components/myChannel'
import liveBroad from '@/components/liveBroad'
import liveDetail from '@/components/liveDetail'
import downLoad from '@/components/downLoad'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/home/searchkeyword',
      component:searchKeyWord,
      redirect: '/home/searchkeyword/keyword',
      children:[
        {
          path:'keyword',
          component:keyWord
        },
        {
          path:'keywordlist',
          name:'keyWordList',
          component:keyWordList
        }
      ]
    },
    {
      path:'/detail',
      component:Detail
    },
    {
      path:'/home/mychannel/:id',
      name: 'myChannel',
      component:myChannel
    },
    {
      path:'/livebroadcast',
      name: 'liveBroad',
      component:liveBroad
    },
    {
      path:'/livebroadcast/livedetail',
      component:liveDetail
    },
    {
      path:'/down-load',
      component:downLoad
    }
  ]
})
