<template>
  <div class="detail">
    <Open />
    <div class="detail-content">
      <h4>内蒙古东部地区“窝电”局势何时改善？</h4>
      <p>
        <img :src="icon" alt="">
        <span class="author">{{ author }}</span>
        <span class="data">{{ data }}</span>
      </p>
      <img :src="bigImg" alt="" class="big-img">
      <div class="intro-box">
        <div :class="{'intro' : !setHeight, 'set-height' : setHeight}">
          <p v-for="(p,index) in intro" :key="index">{{ p.p }}</p>
        </div>
        <More @click="height" v-if="!setHeight"/>
      </div>
      <router-link to="/down-load" :class="{'app' : !setHeight, 'app2' : setHeight}">{{ open }}</router-link>
    </div>
    <hotRec />
  </div>
</template>

<script>
import Open from './open'
import hotRec from './hotRec'
import More from './More'
  export default {
    components:{
      Open,
      hotRec,
      More
    },
    name:'Detail',
    data(){
      return{
        icon:require('../assets/images/xiangqing_touxiang.png'),
        author:'花花花妖妖',
        data:'11-13 09:24',
        bigImg:require('../assets/images/3.jpg'),
        intro:[
          {p:'2012年，在国家大力支持开发清洁能源的政策号召下，我毅然决然的加入了风电行业。目前，蒙东地区装机容量3000多万千瓦，其中风力发电占总装机的1/3。进入1月份，蒙东电网区域弃风率最高时段达70%以上，单日区域弃风率在55%左右。大量清洁能源的流失，造成国有资产的浪费，不得不让身为新能源企业的我黯然神伤！。'},
          {p:'2012年，在国家大力支持开发清洁能源的政策号召下，我毅然决然的加入了风电行业。目前，蒙东地区装机容量3000多万千瓦，其中风力发电占总装机的1/3。进入1月份，蒙东电网区域弃风率最高时段达70%以上，单日区域弃风率在55%左右。大量清洁能源的流失，造成国有资产的浪费，不得不让身为新能源企业的我黯然神伤！。'},
          {p:'域限电率仍高居不下，不由又是让我心中一冷！作为一名新能源风电企业的一名员工，我要向有关部门、蒙东电网呼吁，在国家新时代发展新能源建设的形势下，利用新增外送通道的利好局势，改善区域“窝电”局面，还清洁风电能源应有的市场份额给予风电企业发展生存的空间！'}
        ],
        setHeight:false,
        open:'打开APP阅读全文'
      }
    },
    methods:{
      height(){
        console.log(123)
        this.setHeight = !this.setHeight
        this.open = '打开一起光伏，阅读体验更加'
      }
    }
    
  }
</script>

<style scoped>
.detail-content{
  width: 17.5rem;
    margin: 0 auto;
}
.detail-content h4{
  font-size: .9rem;
  margin:1rem 0;
  color:#333333;
}
.detail-content p{
  display: flex;
}
.detail-content p img{
  width: 1.2rem;
  height: 1.2rem;
  display: block;
}
.detail-content p .author{
  font-size: .7rem;
  color:#333333;
  line-height: 1.2rem;
  margin-left: .25rem;
}
.detail-content p .data{
  flex-grow: 1;
  text-align: right;
  font-size: .6rem;
  color:#999999;
  line-height: 1.2rem;
}
.detail-content .big-img{
  width: 100%;
  margin-top: 1rem;
}
.intro{
  height: 6.5rem;
  overflow: hidden;
  transition-duration: 0.25s;
}
.set-height{
  height: auto;
  transition-duration: 0.25s;
}
.intro-box{
  position: relative; 
}
.intro-box p{
  font-size: .8rem;
  line-height: 1.25rem;
  margin-top: .5rem;
  transition: all .5s;
}
.detail-content .none{
  display: none;
}
.detail-content .app{
  font-size: .8rem;
  color:#fff;
  background: #66a1fc;
  border-radius: 1rem;
  display: block;
  text-align: center;
  line-height: 1.5rem;
  margin-top: 2rem;
}
.detail-content .app2{
  font-size: .8rem;
  color:#fff;
  background: #66a1fc;
  border-radius: 1rem;
  display: block;
  text-align: center;
  line-height: 1.5rem;
  margin-top: 1rem;
}
</style>
