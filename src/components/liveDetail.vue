<template>
  <div class="live-detail">
    <div class="live">
      <div :class="{'detail' : !setHeight,'detail-height' : setHeight}">
        <div class="top">
          <img src="../assets/images/guangfu.jpg" alt="">
          <router-link to="/down-load">打开</router-link>
        </div>
        <div class="banner">
          <img :src="bannerImg" alt="">
          <div class="ban">
            <p>{{ bannerContent }}</p>
            <span>{{yt}}</span><span>{{yj}}</span><span>{{bg}}</span>
          </div>
        </div>
        <div class="puclic">
          <div class="h4">
            <h4>{{ yt }}</h4>
          </div>
          <ul class="list">
            <li v-for="(agen,index) in agenda" :key="index">
              <router-link to="">
                <div class="left">
                <h6>{{ agen.title }}</h6>
                <p><span class="see">{{ agen.review }}</span><span class="data">{{ agen.data }}</span></p>
                </div>
                <div class="right">
                  <img :src="agen.Img" alt="">
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="puclic">
          <div class="h4">
            <h4>{{ yj }}</h4>
          </div>
          <ul class="list">
            <li v-for="(spe,index) in speech" :key="index">
              <router-link to="">
                <div class="left">
                <h6>{{ spe.title }}</h6>
                <p><span class="see">{{ spe.review }}</span><span class="data">{{ spe.data }}</span></p>
                </div>
                <div class="right">
                  <img :src="spe.Img" alt="">
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="puclic">
          <div class="h4">
            <h4>{{ bg }}</h4>
          </div>
          <ul class="list">
            <li v-for="(pre,index) in Pre" :key="index">
              <router-link to="">
                <div class="left">
                <h6>{{ pre.title }}</h6>
                <p><span class="see">{{ pre.review }}</span><span class="data">{{ pre.data }}</span></p>
                </div>
                <div class="right">
                  <img :src="pre.Img" alt="">
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <More class="down" @get='height' v-if="!setHeight"/>
    </div>
    <div class="seemore">
      <router-link to="/down-load" :class="{'app' : !setHeight, 'app2' : setHeight}">{{ open }}</router-link>
    </div>
  </div>
</template>
<script>
import More from './more'
  export default {
    components:{
      More
    },
    name:'liveDetail',
    data (){
      return{
        open:"打开app阅读全文",
        setHeight:false,
        bannerImg:require('../assets/images/3.jpg'),
        bannerContent:'1、2019年领跑者的基地申报的相关文件可能于近期下发，根据去年工作进度来看，第四批领跑者的相关工作可能于2019年6月前后完成。第三批领跑者有三个奖励名额，共计1.5GW将会下发到2019年；第四批领跑者预计下发的指标应该也是5GW；加上要求明年“6.30”前并网的“超跑者”（技术领跑者）1.5GW，明年的领跑者指标总计在8GW左右。',
        yt:'会议议程',
        yj:'主题演讲',
        bg:'专题报告',
        agenda:[
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')}
        ],
        speech:[
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')}
        ],
        Pre:[
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')},
          {title:'现场直播第一界北极星光伏研讨会',review:'一起光伏',data:'10月23日',Img:require('../assets/images/2.jpg')}
        ]
      }
    },
    methods:{
      height(){
        this.setHeight = !this.setHeight
        this.open = '下载一起光伏，阅读更加'
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
}
.list .right img{
  width: 100%;
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
.seemore{
  background: #fefefe;
  height: 2.5rem;
}
.app{
  width: 15rem;
  margin: 0 auto;
  font-size: .8rem;
  color:#fff;
  background: #66a1fc;
  border-radius: 1rem;
  display: block;
  text-align: center;
  line-height: 1.5rem;
  margin-top: 2rem;
}
.app2{
  width: 15rem;
  margin: 0 auto;
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
