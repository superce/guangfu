<template>
<div>
  <div class="hot-rec">
    <h5>热门推荐</h5>
    <ul>
      <li v-for="(hot,index) in hotRec" :key="index">
        <router-link :to="{name:'Detail',params:{id:hot.id,icon:hot.headImg}}" v-if="hot.showTempate == 0 && hot.user == null && 3 > hot.imageList.length >= 1">
          <div class="left">
            <p>{{ hot.title }}</p>
            <div class="tab">
              <span class="openapp">打开APP1</span>
              <span>{{ hot.source }}</span>
              <span>{{ hot.indate }}</span>
            </div>
          </div>
          <div class="right">
            <img :src="hot.imageList" />
          </div>
        </router-link>
        <router-link class='hot-a' :to="{name:'Detail',params:{id:hot.id,icon:hot.headImg}}" v-else-if="hot.showTempate == 3 && hot.user == null && hot.imageList.length >= 3">
          <p>{{ hot.title }}</p>
          <dl>
            <dd><img :src="hot.imageList[0]" alt=""></dd>
            <dd><img :src="hot.imageList[1]" alt=""></dd>
            <dd><img :src="hot.imageList[2]" alt=""></dd>
          </dl>
          <div class="tab tabt">
            <span class="openapp">打开APP2</span>
            <span>{{hot.source}}<img src="../assets/images/4.png" alt=""></span>
            <span>{{hot.indate}}</span>
          </div>
        </router-link>
        <router-link class='hot-a' :to="{name:'Detail',params:{id:hot.id,icon:hot.headImg}}" v-else="hot.showTempate == 0 && hot.user != null && hot.imageList.length == 0">
          <p>{{hot.title}}</p>
          <div class="tab tabt">
            <span class="openapp">打开APP3</span>
            <span>{{hot.source}}</span>
            <span>{{hot.indate}}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="wechat">
      <img src="../assets/images/750-250.png" alt="">
    </div>
  </div>
  <div class="pinglun" id="pinglun"><a class="pinglun_con" href="http://gftoutiao.com/gfgroup.html">打开一起光伏，参与文章讨论</a></div>
</div>
</template>
<script>
import axios from 'axios'
  export default {
  name:'hotRec',
  data () {
    return {
      hotRec:''
    }
  },
  created(){
    this.getHot()
  },
  methods:{
    getHot(){
        let date = new Date(new Date()).getTime();
        let getNewsListUrl = 'https://api.dltoutiao.com/api/News/HotNews'
        axios.get(getNewsListUrl,{
            headers:{
            Appid:'hb_app_android',
            Timestamp:date,
            Sign:'aaaa',
            vtoken:''
          },
            params:{
              'top':10
            }
          })
          .then(res => {
            // this.detailList = res.data.data
            // console.log(res.data.data.list)
            this.hotRec = res.data.data.list
          })
          .catch(e => alert(e))
      }
  }
  }
</script>
<style scoped>
.hot-rec{
  width: 17.5rem;
  margin: 0 auto;
}
.hot-rec h5{
  font-size: .8rem;
  color:#666666;
  font-weight: 500;
  border-left: .2rem solid #3e88f9;
  line-height: .8rem;
  margin:1rem 0;
  padding-left: .2rem;
}
.hot-rec li{
  padding: .4rem 0 .2rem;
  border-bottom: 1px solid #eeeeee;
}
.hot-rec li a{
  display: flex;
  justify-content: space-between;
}
.hot-rec li .left{
  width:11.25rem;
}
.hot-rec li .left p{
  height: 2.1rem;
  overflow: hidden;
  font-size: .8rem;
  color:#000000;
}
.hot-rec li .tab{
  margin-top: .5rem;
}
.hot-rec li .tabt{
  margin-top: 0;
}
.hot-rec li span{
  font-size: .6rem;
  color:#a9a8a8;
}
.hot-rec li span img{
  width: .4rem;
  height: .4rem;
  margin: 0 -.1rem 0 0;
}
.hot-rec li .openapp{
  color:#f85959;
}
.hot-rec li .right{
  width:5.75rem;
}
.hot-rec li .right img{
  width: 100%;
}
.hot-rec li .hot-a{
  display: block
}
.hot-rec li .hot-a p{
  max-height: 3rem;
  overflow: hidden;
  font-size: .8rem;
  color:#000000;
}
.hot-rec li .hot-a dl{
  display: flex;
  margin-top: .8rem;
}
.hot-rec li .hot-a dl dd{
  width:33%;
  margin:0 1%;
}
.hot-rec li .hot-a dl dd img{
  width:100%
}
.wechat{
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}
.wechat img{
  width:100%;
}
.pinglun {
  width: 100%;
  background: #eee;
  padding: .5rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
}
.pinglun_con {
    display: block;
    width: 90%;
    margin: 0 auto;
    height: 1.5rem;
    font-size: 0.6rem;
    border-radius: 5px;
    background: #fff url(http://api.dltoutiao.com/public/images/words.png) no-repeat 0.5rem 0.5rem;
    background-size: 1em 1em;
    color: #888;
    text-indent: 2em;
    line-height:1.5rem;
}
</style>

