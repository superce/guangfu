<template>
  <div class="header">
    <div class="logo">
      <h1><router-link to="/"><img src="../assets/images/logo.png" alt=""></router-link></h1>
      <div class="search">
      <i class="iconfont icon-search"></i>
        <router-link to="/home/searchkeyword">
          阳光能源 | 单晶 | 东方IC | 天津
        </router-link>
      </div>
    </div>
    <div class="home_nav">
      <ul>
        <li v-for="(n,index) in nav" :key="index" :class="{act:index == tabIndex}" @click="tab(index)">
          {{ n }}
        </li>
      </ul>
      <div class="more" v-if="wrn">
        <routerLink :to="{name:'myChannel',params:{id:tabIndex}}">
          <i class="iconfont icon-jiantou8"></i>
        </routerLink>
      </div>
    </div>
  </div>
</template>
 <script>
 import axios from 'axios'
  export default {
   name:'Header',
   data () {
     return {
       wrn:true,
       nav:[   
         '推荐','直播','用户光伏','政策','市场','项目','深度',
         '访谈','国际','招标采购','人物','评论','多晶硅',
         '硅片','光伏玻璃','背板','光伏银浆','伏电池及组件','光伏逆变器',
         '汇流箱','光伏支架','监控系统','光伏设备','零部件','电站EPC','分布式光伏','光伏投融资'
         ],
        tabIndex:0
     }
   },
  
   methods: {
     tab(index){
       this.tabIndex = index
       if(this.tabIndex == 1){
         this.$router.push({
           name:'liveBroad',
         })
       }else{
         console.log(this.tabIndex)
         this.$router.push({
           name:'homeList',
           params:{
             id:this.tabIndex
           }
         })
       }
      //  if(index == 0){
      //    let newsApi = 'https://api.dltoutiao.com/api/User/ImgCode'
      //    axios.get(newsApi)
      //    .then(res => console.log(res.data))
      //    .catch(e => console.log(e))
         
      //  }
      //  if(index == 2){
      //    let newsApi = 'https://api.dltoutiao.com/api/News/GetNewsList'
      //    axios.get(newsApi)
      //    .then(res => console.log(res.data))
      //    .catch(e => console.log(e))
      //  }
       this.$emit('tab',index)
     }
  
   }
  }
 </script>
 
 <style scoped>
 .header{
    width: 100%;
    background: #65a1fc;
 }
  .logo{
    width: 17.75rem;
    margin: 0 auto;
    display: flex;
    align-items:center;
  }
  .logo h1,.logo a{
    display: block;
    height: 2.2rem;
  }
  .logo img{
    width: 4.25rem;
    height: 2.2rem;
  }
  .logo .search {
    flex-grow: 1;
    margin-left: 1rem;
    position: relative;
  }
  .logo .search i{
    position: absolute;
    top:.4rem;
    left:.4rem;
  }
  .icon-jiantou8{
    margin-left: .5rem;
  }
  .logo .search a{
    display: block;
    background: #fff;
    width: 11rem;
    height: 1.4rem;
    font-size: .6rem;
    text-align: center;
    color:#999999;
    border-radius: 1rem;
    line-height: 1.4rem;
  }
  .home_nav{
    width: 100%;
    background: #ffffff;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .home_nav ul{
    width: 16.43rem;
    margin: 0 auto;
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .home_nav ul li{
    white-space: nowrap;
    font-size: .75rem;
    color:#333333;
    padding: 0 .2rem;
    margin: 0 .3rem;
    line-height: 1.53rem;
  }
  .home_nav ul .act{
    color:#65a1fc;
    border-bottom: 1px solid #65a1fc;
  }
  .home_nav .more{
    width: 2rem;
    background: #fff;
    position: relative;
  }
  .home_nav .more::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: .1rem;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-mask: -webkit-linear-gradient(top,transparent,#000 45%,#000 55%,transparent 100%);
    border-right: 1px solid #ccc;
    box-shadow: inset -3px 0 3px rgba(0,0,0,.11);
  }
  .home_nav .more img{
    width: 40%;
    margin-left: .5rem;
    margin-top: .35rem;
  }
 </style>

 