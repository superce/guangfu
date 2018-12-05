<template>
  <div class="home_content">
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
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'homeList',
  data () {
    return {
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
    }
  }
}
</script>
<style scoped>
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


