<template>
  <div class="keyword">
    <div class="title">
      <h4>大家都在搜</h4>
    </div>
    <ul>
      <li v-for="(w,index) in word" :key="index"><router-link to='/'>{{ w }}</router-link> </li>
    </ul>
  </div>
</template>

<script>
  export default {
   name:'keyWord',
   data () {
     return {
       word:[
         '阳光能源体系','黄牛被注水120斤','见义勇为却反被告','众明星集体退出DG','放烟花庆祝考7分','迪丽热巴和DG解约',
         '内蒙古国华能源开发...','泰能源涨停报于2.37元','工商业如何申请','中天能源大剖析！'
       ]
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
