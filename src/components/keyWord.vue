<template>
  <div class="keyword">
    <div class="title">
      <h4>大家都在搜</h4>
    </div>
    <ul>
      <li v-for="(w,index) in word" :key="index" @click='keyWordList(w)'><a>{{ w }}</a></li>
    </ul>
    <Loading v-if="loading"/>
  </div>
</template>

<script>
import Loading from './Loading'
import axios from 'axios'
  export default {
  components:{Loading},
   name:'keyWord',
   data () {
     return {
       loading:true,
       word:[]
     }
   },
   created(){
     this.keyWord()
   },
   methods:{
     keyWord(){
      let date = new Date(new Date()).getTime();
      let getNewsListUrl = 'https://api.dltoutiao.com/api/News/HotKeywords'
      axios.get(getNewsListUrl,{
          headers:{
          Appid:'hb_app_android',
          Timestamp:date,
          Sign:'aaaa',
          vtoken:''
        },
          params:{
            top:10
          }
        })
        .then(res => {
          this.word = res.data.data
          // console.log(res)
          this.loading = false
        })
        .catch(e => alert('关键词加载失败'))
     },
     keyWordList(w){
       let date = new Date(new Date()).getTime();
        let searchUrl = 'https://api.dltoutiao.com/api/News/SearchNews'
        axios.get(searchUrl,{
          headers:{
            Appid:'hb_app_android',
            Timestamp:date,
            Sign:'aaaa',
            vtoken:''
          },
          params:{
            'keyword':w,
            'pageindex':1,
            'pagesize':10
          }
        }).then(res => {
          this.$router.push({
            path:'keywordlist',
            query:{
              'keywordid':res.data.data.list
            }
          })
        }).catch(e => {
          alert('搜索失败')
        })
     }
   }
  }
</script>

<style scoped>
.keyword .title{
  border-bottom: 1px solid #e2e1e1;
}
.keyword h4{
  width: 17.5rem;
  margin: 0 auto;
  font-size: .7rem;
  color:#666666;
  line-height: 2rem;
}
.keyword ul{
  width: 17.5rem;
  margin: 1rem auto 0;
  display: flex;
  flex-wrap: wrap;
  background: url(../assets/images/5.png) no-repeat;
  background-size: 17rem 6.45rem;
  background-position: 0 .3rem;
}
.keyword ul li{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 8.75rem;
}
.keyword ul li a{
  font-size: .7rem;
  color:#333333;
  margin-left: 1rem;
}
.keyword ul li:last-child a{
  margin-left: 1.4rem;
}
</style>
