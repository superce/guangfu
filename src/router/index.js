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
      children:[
        {
          path:'keywordlist',
          component:keyWordList
        }
      ]
    },
    {
      path:'/detail',
      component:Detail
    },
    {
      path:'/home/mychannel',
      component:myChannel
    },
    {
      path:'/livebroadcast',
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
