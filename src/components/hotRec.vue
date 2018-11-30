<template>
<div>
  <div class="hot-rec">
    <h5>热门推荐</h5>
    <ul>
      <li v-for="(hot,index) in hotRec" :key="index">
        <router-link to="/detail">
          <div class="left">
            <p>{{ hot.title }}</p>
            <div class="tab">
              <span class="openapp">打开APP</span>
              <span>{{ hot.from }}</span>
              <span>{{ hot.hotData }}</span>
            </div>
          </div>
          <div class="right">
            <img :src="hot.hotImg" />
            <!-- <img src="../assets/images/2.jpg" alt=""> -->
          </div>
        </router-link>
      </li>
      <li class="hot-a">
        <router-link to="">
          <p>“炙手可热”PERC电池技术研发背后：材料是关键是东方时空的飞机上的快乐房间打扫客房设计定时</p>
          <dl>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
          </dl>
          <div class="tab tabt">
            <span class="openapp">打开APP</span>
            <span>北极星太阳能光伏网<img src="../assets/images/4.png" alt=""></span>
            <span>1天前</span>
          </div>
        </router-link>
      </li>
      <li class="hot-a">
        <router-link to="">
          <p>“炙手可热”PERC电池技术研发背后：材料是关键是东方时空的飞机上的快乐房间打扫客房设计定时</p>
          <dl>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
          </dl>
          <div class="tab tabt">
            <span class="openapp">打开APP</span>
            <span>北极星太阳能光伏网<img src="../assets/images/4.png" alt=""></span>
            <span>1天前</span>
          </div>
        </router-link>
      </li>
      <li class="hot-a">
        <router-link to="">
          <p>“炙手可热”PERC电池技术研发背后：材料是关键是东方时空的飞机上的快乐房间打扫客房设计定时</p>
          <div class="tab tabt">
            <span class="openapp">打开APP</span>
            <span>北极星太阳能光伏网</span>
            <span>1天前</span>
          </div>
        </router-link>
      </li>
      <li class="hot-a">
        <router-link to="">
          <p>“炙手可热”PERC电池技术研发背后：材料是关键是东方时空的飞机上的快乐房间打扫客房设计定时</p>
          <dl>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
            <dd><img src="../assets/images/2.jpg" alt=""></dd>
          </dl>
          <div class="tab tabt">
            <span class="openapp">打开APP</span>
            <span>北极星太阳能光伏网<img src="../assets/images/4.png" alt=""></span>
            <span>1天前</span>
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
  export default {
  name:'hotRec',
  data () {
    return {
      hotRec:[
        {title:'1.08亿！阳光家庭光伏全面进击湖北',from:'中国证券',hotData:'刚刚',hotImg:require('../assets/images/2.jpg')},
        {title:'1.08亿！阳光家庭光伏全面进击湖北',from:'中国证券',hotData:'刚刚',hotImg:require('../assets/images/2.jpg')},
        {title:'1.08亿！阳光家庭光伏全面进击湖北',from:'中国证券',hotData:'刚刚',hotImg:require('../assets/images/2.jpg')},
        {title:'1.08亿！阳光家庭光伏全面进击湖北',from:'中国证券',hotData:'刚刚',hotImg:require('../assets/images/2.jpg')},
        {title:'1.08亿！阳光家庭光伏全面进击湖北',from:'中国证券',hotData:'刚刚',hotImg:require('../assets/images/2.jpg')} 
      ]
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
.hot-rec li.hot-a a{
  display: block
}
.hot-rec li.hot-a p{
  height: 3rem;
  overflow: hidden;
  font-size: .8rem;
  color:#000000;
}
.hot-rec li.hot-a dl{
  display: flex;
  margin-top: .8rem;
}
.hot-rec li.hot-a dl dd{
  width:33%;
  margin:0 1%;
}
.hot-rec li.hot-a dl dd img{
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

