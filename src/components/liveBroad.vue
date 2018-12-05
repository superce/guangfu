<template>
  <div>
    <div class="live-title">
      <h4>直播</h4>
    </div>
    <lunBo class="lunbo" :listMsg='dataMsgItem'/>
    
    <div class="live-content">
      <div class="content">
        <h5>直播回顾</h5>
        <span></span>
      </div>
      <ul class="list">
        <li v-for="(list,index) in dataMsg" :key="index">
          <router-link :to="{name:'liveDetail',params:{id:list.id}}">
            <div class="left">
            <h6>{{ list.title }}</h6>
            <p>
              <!-- <span class="see">{{ list.review }}</span> -->
              <span class="data">{{ list.indate }}</span>
            </p>
            </div>
            <div class="right">
              <img :src="list.headImg" :alt="list.title">
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import lunBo from './lunBo.vue'
  import axios from 'axios'
  export default {
    components:{
      lunBo
    },
    name:'liveBroad',
    data (){
      return {
        lunBoMsg:'',
        dataMsg:'',
        list:''
      }
    },
    created(){
      this.getLiveList()
  },
  computed:{
    dataMsgItem(){
      return this.dataMsg.slice(0,3)
    }
  },
  methods:{
    getLiveList(){
      let arr = []
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
            'channelid':1003,
            'isUp':1,
            'maxid':0,
            'minid':0,
            'deviceId':'726607C0-233E-4EA4-8FAB-F3D80454ADB3',
            'pagesize':10
          }
        })
        .then(res => {
          arr = res.data.data.items
          // console.log(arr)
          // this.list = arr
          this.dataMsg = arr
          
        })
        .catch(e => alert(e))
    }
  }
}
</script>
<style scoped>
.live-title{
  width: 100%;
  background: #fff;
  position: fixed;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 1px 4px 1px #acacac;
}
.live-title h4{
  font-size: 1rem;
  color:#0d0d0d;
  text-align: center;
  line-height: 2.2rem;
  font-family: "Microsoft Yahei SimHei";
}
.lunbo{
  margin-top: 2.2rem;
}
.live-content {
  width: 17.5rem;
  margin: 0 auto;
}
.live-content .content{
  display: flex;
  align-items: center;
  margin:.5rem 0;
}
.live-content h5{
  font-size: .7rem;
  color:#a8a8a8;
  flex-grow: 1;
}
.content span{
  width:14rem;
  height: .05rem;
  border-top: .05rem solid #a8a8a8;
}
.live-content .list li{
  padding-bottom: .3rem;
  margin-top: .5rem;
  border-bottom: 1px solid #ededed;
}
.live-content .list li a{
  display: flex;
}
.live-content .list .left{
  width: 12rem;
}
.live-content .list .left h6{
  height: 2.1rem;
  overflow: hidden;
  font-size: .8rem;
  color:#242424;
}
.live-content .list .left p{
  font-size: .6rem;
  color:#acacac;
  margin-top: .9rem;
}
.live-content .list .left p .see{
  border:1px solid #acacac;
  border-radius: .2rem;
  padding:0 .2rem;
  margin-right: .2rem;
}
.live-content .list .right{
  width: 5.75rem;
}
.live-content .list .right img{
  width: 100%;
}
.wc-pagination{
  justify-content: flex-end;
}
</style>
