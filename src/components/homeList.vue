<template>
  <div class="home_content">
    <ul>
      <li class="left-right">
        <router-link to="/detail">
          <div class="left">
              <h4>1.08亿！阳光家庭光伏全面进击湖北</h4>
              <p><span class="top">置顶</span><span>中国证券</span><span>刚刚</span></p>
          </div>
          <div class="right">
            <img src="../assets/images/2.jpg" alt="">
          </div>
        </router-link>
      </li>
      <li class="one">
        <h4>将“原装”进行到底：817，天合光能将发布全球首个原装家用光伏品牌</h4>
        <img src="../assets/images/3.jpg" alt="">
        <p><span>电力安全生产</span><span>30分钟前</span> </p>
      </li>
      <li class="left-right">
        <router-link to="/detail">
          <div class="left">
              <h4>1.08亿！阳光家庭光伏全面进击湖北</h4>
              <p><span>中国证券</span><span>刚刚</span></p>
          </div>
          <div class="right">
            <img src="../assets/images/2.jpg" alt="">
          </div>
        </router-link>
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
    </ul>
  </div>
</template>
<script>
export default {
  name:'homeList',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
  .home_content ul{
    width: 17.75rem;
    margin: 0 auto;
  }
  .home_content ul .left-right a{
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


