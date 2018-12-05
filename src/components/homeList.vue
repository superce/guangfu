<template>
  <div class="home_content">
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div class="home-down">
        <ul>
          <li v-for="(data,index) in dataMsg" :key="index">
            <router-link class='left-right' :to="{name:'Detail',params:{id:data.id,icon:data.headImg}}" v-if="data.showTempate == 0 && data.user == null && 3 > data.imageList.length >= 1">
              <div class="left" >
                <h4>{{ data.title }}</h4>
                <p><span class="top">置顶</span><span>{{data.source}}</span><span>{{ data.indate }}</span></p>
              </div>
              <div class="right">
                <img :src="data.imageList" :alt="data.title">
              </div>
            </router-link>
            <router-link class='one' :to="{name:'Detail',params:{id:data.id,icon:data.headImg}}" v-else-if="data.showTempate == 1 && data.user != null && 3 > data.imageList.length >= 1">
              <h4>{{data.title}}</h4>
              <img :src="data.imageList" :alt="data.title">
              <p><span>{{data.source}}</span><span>{{ data.indate }}</span> </p>
            </router-link>
            <router-link class='left-right' :to="{name:'Detail',params:{id:data.id,icon:data.headImg}}" v-else-if="data.showTempate == 0 && data.user == null &&  data.imageList.length >= 1">
              <div class="left" >
                <h4>{{ data.title }}</h4>
                <p><span class="top">置顶</span><span>{{data.source}}</span><span>{{ data.indate }}</span></p>
              </div>
              <div class="right">
                <img :src="data.imageList" :alt="data.title">
              </div>
            </router-link>
            <router-link class="third" :to="{name:'Detail',params:{id:data.id,icon:data.headImg}}" v-else-if="data.showTempate == 3 && data.user == null && data.imageList.length >= 3">
              <h4>{{ data.title }}</h4>
              <dd>
                <dl><img :src="data.imageList[0]" :alt="data.title"></dl>
                <dl><img :src="data.imageList[1]" :alt="data.title"></dl>
                <dl><img :src="data.imageList[2]" :alt="data.title"></dl>
              </dd>
              <p><span>{{data.source}}</span><img src="../assets/images/4.png" alt=""><span>{{data.indate}}</span></p>
            </router-link>
            <router-link :to="{name:'Detail',params:{id:data.id,icon:data.headImg}}" v-else-if="data.showTempate == 0 && data.user != null && data.imageList.length == 0">
              <h4>{{data.title}}</h4>
              <p><span>{{data.source}}</span><span>{{data.indate}}</span></p>
            </router-link>
            <router-link class="third" :to="{name:'Detail',params:{id:data.id,icon:data.headImg}}" v-else="data.showTempate == 3 && data.user == null && data.imageList.length >= 3">
              <h4>{{ data.title }}</h4>
              <dd>
                <dl><img :src="data.imageList[0]" :alt="data.title"></dl>
                <dl><img :src="data.imageList[1]" :alt="data.title"></dl>
                <dl><img :src="data.imageList[2]" :alt="data.title"></dl>
              </dd>
              <p><span>{{data.source}}</span><img src="../assets/images/4.png" alt=""><span>{{data.indate}}</span></p>
            </router-link>
          </li>
        </ul>
      </div> 
    </mescroll-vue>
  </div>
</template>
<script>
import axios from 'axios'
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name:'homeList',
  data () {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown:{}, //下拉刷新的配置
      mescrollUp:{
        callback: this.upCallback
      },
      dataMsg:''
    }
  },
  created(){
    this.getNewsList()
  },
  watch:{
    "$route": 'getNewsList' //监听路由变化，重新渲染数据
  },
  methods:{
    getNewsList(){
      let data = this.$route.params.id
      let date = new Date(new Date()).getTime();
      let getNewsListUrl = 'https://api.dltoutiao.com/api/News/GetNewsList'
      axios.get(getNewsListUrl,{
          headers:{
          Appid:'hb_app_android',
          Timestamp:date,
          Sign:'aaaa',
          vtoken:''
        },
          params:{
            'channelid':data,
            'isUp':1,
            'maxid':0,
            'minid':0,
            'deviceId':'726607C0-233E-4EA4-8FAB-F3D80454ADB3',
            'pagesize':10
          }
        })
        .then(res => {
          // console.log(res.data.data.items)
          this.dataMsg = res.data.data.items
        })
        .catch(e => alert(e))
    },
    // mescroll组件初始化的回调,可获取到mescroll对象 (如果this.mescroll并没有使用到,可不用写mescrollInit)
    mescrollInit (mescroll) {
      this.mescroll = mescroll
    },
    upCallback (page, mescroll) {
      // 联网请求
      let data = this.$route.params.id
      let date = new Date(new Date()).getTime();
      let getNewsListUrl = 'https://api.dltoutiao.com/api/News/GetNewsList'
      axios.get(getNewsListUrl,{
          headers:{
          Appid:'hb_app_android',
          Timestamp:date,
          Sign:'aaaa',
          vtoken:''
        },
          params:{
            'channelid':data,
            'isUp':1,
            'maxid':0,
            'minid':0,
            'deviceId':'726607C0-233E-4EA4-8FAB-F3D80454ADB3',
            'pagesize':10
          }
        }).then((res) => {
        // 请求的列表数据
        let arr = res.data.data.items
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.dataMsg = []
        // 把请求到的数据添加到列表
        this.dataMsg = this.dataMsg.concat(arr)
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(arr.length)
        })
      }).catch((e) => {
        // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        mescroll.endErr()
      })
    }




  }
}
</script>
<style scoped>
/*以fixed的方式固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 3.75rem;
    bottom: 0;
    height: auto;
  }
  .home_content ul{
    width: 17.75rem;
    margin: 0 auto;
  }
  .home_content ul a.left-right{
    display: flex;
  }
  .home_content ul li{
    margin-top: 1rem;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: .5rem;
  }
  .home_content ul .left{
    width: 12rem;
  }
  .home_content ul li h4{
    max-height: 2.4rem;
    overflow: hidden;
    font-size: .8rem;
    line-height: 1.2rem;
    color:#000000;
    font-family: Microsoft Yahei;
  }
  .home_content ul li p{
    font-size: .6rem;
    margin-top: .5rem;
  }
   .home_content ul li span{
     margin-right:.5rem;
     color:#a9a8a8;
   }
  .home_content ul .left .top{
    border: 2px solid #ff0000;
    color:#ff0000;
    padding:0 .1rem
  }
  .home_content ul .right{
    width: 5.75rem;
  }
  .home_content ul li img{
    width: 100%;
  }
  .home_content ul .one img{
    margin-top: .5rem;
  }
  .home_content ul .third dd{
    display: flex;
    margin-top: .5rem;
  }
  .home_content ul .third dl{
    width: 33%;
    margin:0 1%;
  }
  .home_content ul .third p img{
    width: .4rem;
    height: .4rem;
    margin:0 .1rem  0 -.4rem;
  }
</style>


