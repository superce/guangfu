<template>
  <div class="lun_bo">
    <wc-swiper class="swiper" :duration="1000">
      <wc-slide v-for="(s,index) in listMsg" :key="index">
        <router-link :to="{name:'liveDetail',params:{id:s.id}}">
          <img :src="s.headImg" :alt="s.title">
          <p><span>{{ s.title }}</span></p>
        </router-link>
      </wc-slide>
    </wc-swiper>
  </div>
</template>

<script>
  export default {
    props:{
      listMsg:{String,Array},
      required:true
    },
    name:'lunBo',
    // methods:{
    //   go(s){
    //     this.$router.push({
    //       name:"liveDetail",
    //       params:{
    //         id:
    //       }
    //     })
    //   }
    // }
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

