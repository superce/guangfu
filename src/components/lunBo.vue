<template>
  <div class="lun_bo">
    <wc-swiper class="swiper" :duration="1000">
      <wc-slide v-for="(s,index) in pic" :key="index">
        <router-link to="">
          <img :src="s.img" :alt="s.title">
          <p><span>{{ s.title }}</span></p>
        </router-link>
      </wc-slide>
    </wc-swiper>
  </div>
</template>

<script>
  export default {
   name:'lunBo',
   data(){
     return{
       pic:[
         {
           title:'今日热点，浙江能源今日热点，浙江能源今日热点，浙江能源',
           img:'http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg',
         },
         {
           title:'今日热点，浙江能源',
           img:'http://pic29.nipic.com/20130511/9252150_174018365301_2.jpg',
         },
         {
           title:'今日热点，浙江能源',
           img:'http://img.zcool.cn/community/01f09e577b85450000012e7e182cf0.jpg@1280w_1l_2o_100sh.jpg',
         }
       ]  
       
     }
   }
  }
</script>

<style scoped>
  .swiper{
    height: 10rem;
  }
  .swiper img{
    width:100%;
    height: 100%;
  }
  .swiper p{
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.5rem;
    color: #fff;
    padding-left: .5rem;
    line-height: 1.5rem;
    font-size: .7rem;
  }
  .swiper p span{
    display: block;
    width: 14rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .wc-pagination{
    bottom:0px !important;
    justify-content: flex-end;
  }
</style>

