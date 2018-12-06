<template>
  <div class="live-detail">
    
    <div class="live">
      <div :class="{'detail' : !setHeight,'detail-height' : setHeight}">
        <div class="top">
          <img src="../assets/images/guangfu.jpg" alt="">
          <router-link to="/down-load">打开</router-link>
        </div>
        <div class="banner">
          <img :src="liveD.topic.image">
          <div class="ban">
            <p>{{ liveD.topic.content }}</p>
            <span v-for="(tag,index) in liveD.tags" :key="index">{{ tag.item2 }}</span>
          </div>
        </div>
        <div class="puclic" v-for="(tag,index) in liveD.tags" :key="index">
          <div class="h4">
            <h4>{{ tag.item2 }}</h4>
          </div>
          <ul class="list">
            <li v-for='(list,index) in liveD.newslist' :key='index'>
              <router-link :to="{name:'liveDetail',params:{id:list.id}}" v-if="tag.item1 == list.tagid">
                <div class="left">
                <h6>{{ list.title }}</h6>
                <p><span class="see">{{ list.source }}</span><span class="data">{{ list.indate }}</span></p>
                </div>
                <div class="right">
                  <img :src="list.headimg" :alt="list.title">
                </div>
              </router-link>
              <router-link :to="{name:'liveDetail',params:{id:list.id}}" v-else="tag.item2 == list.tagid">
                <div class="left">
                <h6>{{ list.title }}</h6>
                <p><span class="see">{{ list.source }}</span><span class="data">{{ list.indate }}</span></p>
                </div>
                <div class="right">
                  <img :src="list.headimg" :alt="list.title">
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="more">
        <More class="down" @get='height' v-if="!setHeight"/>
      </div>
    </div>
    <router-link to="/down-load" :class="{'app' : !setHeight, 'app2' : setHeight}">{{ open }}</router-link>
    <loading v-if="loading"/>
  </div>
</template>
<script>
import Loading from './Loading' 
import More from './more'
import axios from 'axios'
  export default {
    components:{
      More,Loading
    },
    name:'liveDetail',
    data (){
      return{
        loading: true,
        open:"打开app阅读全文",
        setHeight:false,
        liveD:""
      }
    },
    created(){
      this.getLiveDetail()
    },
    methods:{
      height(){
        this.setHeight = !this.setHeight
        this.open = '下载一起光伏，阅读更加'
      },
      getLiveDetail(){
        let data = this.$route.params.id
        let date = new Date(new Date()).getTime();
        let getNewsListUrl = 'https://api.dltoutiao.com/api/News/TopicNews'
        axios.get(getNewsListUrl,{
            headers:{
            Appid:'hb_app_android',
            Timestamp:date,
            Sign:'aaaa',
            vtoken:''
          },
          params:{
            id:data
          }
        }).then(res => {
          // console.log(res.data.data)
          this.liveD = res.data.data
          this.loading = false
        }).catch(e => alert(e))
      }
    }
  }
</script>

<style scoped>
.live{
  position: relative;
}
  .top{
    width: 100%;
    display: flex;
    background: #f4f4f4;
    justify-content: space-between;
    padding: 0 .5rem;
    align-items: center;
    position: fixed;
    top: 0;
    box-shadow: 0 2px 2px 1px #ccc
  }
  .top img{
    width:6.45rem;
    height: 2.2rem;
  }
  .top a{
    font-size: .7rem;
    color:#3e75c7;
    border: 1px solid #3e75c7;
    border-radius: .5rem;
    padding: .2rem .5rem;
  }
  .detail{
    height: 56rem;
    overflow: hidden;
  }
  .detail-height{
    height: auto;
  }
  .banner{
    width:100%;
    margin-top: 2.3rem;
  }
  .banner .ban{
    width: 17.5rem;
    margin: 0 auto;
  }
  .banner img{
    width: 100%;
  }
  .banner p{
    font-size: .8rem;
    color:#000;
    line-height: 1.1rem;
    margin-bottom: .5rem;
    font-family: "Microsoft Yahei Simhei";
  }
  .banner span{
    font-size: .7rem;
    color:#333;
    border-radius: .4rem;
    border: 1px solid #000;
    margin:0 .3rem;
    padding:.1rem .3rem;
  }
.puclic{
  margin-top: 1rem;
}
.puclic .h4{
  background: #e9e9e9;
}
.puclic .h4 h4{
  width:17.5rem;
  margin: 0 auto;
  font-size: .79rem;
  color:#070707;
  line-height: 1.5rem;
  font-family: "Microsoft Yahei Simhei";
}
.list{
  width:17.5rem;
  margin: 0 auto;
}
.list li{
  padding-bottom: .3rem;
  margin-top: .5rem;
  border-bottom: 1px solid #ededed;
}
.list li:last-child{
  border-bottom: none;
}
.list li a{
  display: flex;
}
.list .left{
  width: 12rem;
}
.list .left h6{
  height: 2.1rem;
  overflow: hidden;
  font-size: .75rem;
  color:#262626;
  font-weight: normal;
}
.list .left p{
  font-size: .6rem;
  color:#acacac;
  margin-top: .7rem;
}
.list .left p .see{
  margin-right: .4rem;
}
.list .right{
  width: 5.75rem;
  height: 3.78rem;
  overflow: hidden;
}
.list .right img{
  width: 100%;
  height: 100%;
}
@keyframes down
{
  0% {bottom: .5rem}
  50% {bottom:.8rem;}
  100% {bottom:.5rem;}
}
.down{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation:down 1s infinite;
}
.seemore{
  /* background: #fefefe;
  height: 2.5rem; */
}
.app{
  width: 15rem;
  margin: .5rem auto;
  font-size: .8rem;
  color:#fff;
  background: #66a1fc;
  border-radius: 1rem;
  display: block;
  text-align: center;
  line-height: 1.5rem;
}
.app2{
  width: 15rem;
  margin:1rem auto;
  font-size: .8rem;
  color:#fff;
  background: #66a1fc;
  border-radius: 1rem;
  display: block;
  text-align: center;
  line-height: 1.5rem;
}
</style>
