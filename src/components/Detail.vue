<template>
  <div class="detail">
    <Open />
    <div class="detail-content">
      <h4>{{ detailList.title }}</h4>
      <p>
        <img :src="this.$route.params.icon" alt="">
        <span class="author">{{ detailList.source }}</span>
        <span class="data">{{ detailList.indate }}</span>
      </p>
      <img :src="this.$route.params.icon" :alt="detailList.title" class="big-img">
      <div class="intro-box">
        <div :class="{'intro' : !setHeight, 'set-height' : setHeight}">
          <div v-text="detailList.content"></div>
        </div>
        <More @get="height" v-if="!setHeight" class="down"/>
      </div>
      <router-link to="/down-load" :class="{'app' : !setHeight, 'app2' : setHeight}">{{ open }}</router-link>
    </div>
    <hotRec />
  </div>
</template>

<script>
import Open from './open'
import hotRec from './hotRec'
import More from './more'
import axios from 'axios'
  export default {
    components:{
      Open,
      hotRec,
      More
    },
    name:'Detail',
    data(){
      return{
        setHeight:false,
        open:'打开APP阅读全文',
        detailList:''
      }
    },
    created(){
      this.getDetail()
    },
    methods:{
      height(){
        this.setHeight = !this.setHeight
        this.open = '打开一起光伏，阅读体验更加'
      },
      getDetail(){
        let data = this.$route.params.id
        console.log(data)
        let date = new Date(new Date()).getTime();
        let getNewsListUrl = 'https://api.dltoutiao.com/api/News/GetNewsDetailV2'
        axios.get(getNewsListUrl,{
            headers:{
            Appid:'hb_app_android',
            Timestamp:date,
            Sign:'aaaa',
            vtoken:''
          },
            params:{
              'id':data
            }
          })
          .then(res => {
            this.detailList = res.data.data
            // console.log(res.data.data)
          })
          .catch(e => alert(e))
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
  border-radius: 50%;
  overflow: hidden;
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
}
.set-height{
  height: auto;
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
@keyframes down
{
  0% {bottom: -1.5rem}
  50% {bottom:-1.6rem;}
  100% {bottom:-1.5rem;}
}
.down{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation:down 1s infinite;
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
