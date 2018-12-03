<template>
  <div class="home">
    <Header @tab='toogleTab'/>
    <router-view :dataMsg="msg"/>
    <!-- <div class="tab-box">
      <homeList :num='msg' v-show='msg == 0'/>
      <homeList :num='msg' v-show='msg == 1'/>
      <homeList :num='msg' v-show='msg == 2'/>
      <homeList :num='msg' v-show='msg == 3'/>
      <homeList :num='msg' v-show='msg == 4'/>
      <homeList :num='msg' v-show='msg == 5'/>
      <homeList v-show='msg == 6'/>
      <homeList v-show='msg == 7'/>
      <homeList v-show='msg == 8'/>
      <homeList v-show='msg == 9'/>
      <homeList v-show='msg == 10'/>
      <homeList v-show='msg == 11'/>
      <homeList v-show='msg == 12'/>
      <homeList v-show='msg == 13'/>
      <homeList v-show='msg == 14'/>
      <homeList v-show='msg == 15'/>
      <homeList v-show='msg == 16'/>
      <homeList v-show='msg == 17'/>
      <homeList v-show='msg == 18'/>
      <homeList v-show='msg == 19'/>
      <homeList v-show='msg == 20'/>
      <homeList v-show='msg == 21'/>
      <homeList v-show='msg == 22'/>
      <homeList v-show='msg == 23'/>
      <homeList v-show='msg == 24'/>
      <homeList v-show='msg == 25'/>
      <homeList v-show='msg == 26'/>
    </div> -->
  </div>
</template>

<script>
import Header from './Header'
import homeList from './homeList'
import axios from 'axios'
export default {
  components:{
    Header,
    homeList
  },
  name: 'Home',
  data () {
    return {
      msg:''
    }
  },
  created(){
    this.msg = ''
    let newsApi = 'https://api.dltoutiao.com/api/News/GetNewsList'
    axios.get(newsApi).then(res => {
      this.msg = res.data.status.message
    })
    .catch(e => console.log(e)) 
  },
  methods: {
    toogleTab(index) {
      if(index == 2){
        this.msg = ''
        let newsApi = 'https://api.dltoutiao.com/api/User/ImgCode'
        axios.get(newsApi).then(res => {
         this.msg = res.data.status.message
        
        })
        .catch(e => console.log(e))     
      }
      if(index == 3){
        this.msg = ''
        let newsApi = 'https://api.dltoutiao.com/api/News/GetNewsList'
        axios.get(newsApi).then(res => {
         this.msg = res.data.status.message
        })
        .catch(e => console.log(e))  
      }
      // this.msg = index
      // console.log(this.msg)
    }
  }
}
</script>

