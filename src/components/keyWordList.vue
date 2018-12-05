<template>
  <div class="keywordlist">
    <!-- {{ keyList }} -->
    <ul>
      <!-- <li class="third">
        <h4>“炙手可热”PERC电池技术研发背后：材料是关键</h4>
        <dd>
          <dl><img src="../assets/images/2.jpg" alt=""></dl>
          <dl><img src="../assets/images/2.jpg" alt=""></dl>
          <dl><img src="../assets/images/2.jpg" alt=""></dl>
        </dd>
        <p><span>北极星太阳能光伏网</span><img src="../assets/images/4.png" alt=""><span>1小时前</span></p>
      </li>
       <li>
        <h4>将“原装”进行到底：817，天合光能将发布全球首个原装家用光伏品牌</h4>
        <p><span>电力安全生产</span><span>30分钟前</span></p>
      </li>
      <li class="third">
        <h4>“炙手可热”PERC电池技术研发背后：材料是关键</h4>
        <dd>
          <dl><img src="../assets/images/2.jpg" alt=""></dl>
          <dl><img src="../assets/images/2.jpg" alt=""></dl>
          <dl><img src="../assets/images/2.jpg" alt=""></dl>
        </dd>
        <p><span>北极星太阳能光伏网</span><img src="../assets/images/4.png" alt=""><span>1小时前</span></p>
      </li>
      <li class="left-right">
        <div class="left">
          <h4>1.08亿！阳光家庭光伏全面进击湖北</h4>
          <p><span class="top">置顶</span><span>中国证券</span><span>刚刚</span></p>
        </div>
        <div class="right">
          <img src="../assets/images/2.jpg" alt="">
        </div>
      </li>
      <li class="one">
        <h4>将“原装”进行到底：817，天合光能将发布全球首个原装家用光伏品牌</h4>
        <img src="../assets/images/3.jpg" alt="">
        <p><span>电力安全生产</span><span>30分钟前</span> </p>
      </li>      -->

      <li v-for="(data,index) in keyList" :key="index">
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
</template>

<script>
  export default {
    name:'keyWordList',
    data(){
      return{
        keyList:this.$route.query.keyword
      }
    },
  }
</script>

<style scoped>
  .keywordlist ul{
    width: 17.75rem;
    margin: 0 auto;
  }
  .keywordlist ul .left-right{
    display: flex;
  }
  .keywordlist ul li{
    margin-top: 1rem;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: .5rem;
  }
  .keywordlist ul .left{
    width: 12rem;
  }
  .keywordlist ul li h4{
    font-size: .8rem;
    line-height: 1.2rem;
    color:#000000;
    font-family: Microsoft Yahei;
  }
  .keywordlist ul li p{
    font-size: .6rem;
    margin-top: .5rem;
  }
   .keywordlist ul li span{
     margin-right:.5rem;
     color:#a9a8a8;
   }
  .keywordlist ul .left .top{
    border: 2px solid #ff0000;
    color:#ff0000;
    padding:0 .1rem
  }
  .keywordlist ul .right{
    width: 5.75rem;
  }
  .keywordlist ul li img{
    width: 100%;
  }
  .keywordlist ul .one img{
    margin-top: .5rem;
  }
  .keywordlist ul .third dd{
    display: flex;
    margin-top: .5rem;
  }
  .keywordlist ul .third dl{
    width: 33%;
    margin:0 1%;
  }
  .keywordlist ul .third p img{
    width: .4rem;
    height: .4rem;
    margin:0 .1rem  0 -.4rem;
  }
</style>
