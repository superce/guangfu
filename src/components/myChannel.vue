<template>
  <div class="channel">
    <div class="return" @click="back">
      <i class="iconfont icon-fanhui"></i>
      <span>返回</span>
    </div>
    <div class="channel-content">
      <h4 @click="n">我的频道</h4>
      <router-link to="/" v-for="(c,index) in channel" :key="index" :class="{active : index == num, }">{{ c }}</router-link>
    </div>
    <!-- {{this.$route.params.id}} -->
  </div>
</template>

<script>
export default {
  // props:{id},
  name:'myChannel',
  data(){
    return{
      channel:[
        '户用光伏','政策','市场','项目','深度','访谈','能源','项目','多晶硅','招标采购','人物','评论','硅片','分布式光伏','电站EPC','光伏投融资'
      ],
      num:this.$route.params.id
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .channel{
    width: 17.5rem;
    margin: 0 auto;
    padding-top: .5rem;
  }
  .channel .return .icon-fanhui{
    font-size: .9rem
  }
  .channel .return span{
    font-size: .8rem;
    color: #333333;
  }
  .channel-content h4{
    font-weight: normal;
    font-size: .8rem;
    color:#666666;
    line-height: 1.6rem;
    margin:.7rem 0;
  }
  .channel-content a{
    display: inline-block;
    width:4rem;
    height: 1.9rem;
    border: 2px solid #e6e6e6;
    line-height: 1.9rem;
    border-radius: .5rem;
    text-align: center;
    margin-right:.3rem;
    margin-bottom: .3rem;
    font-size: .7rem;
    color:#333333;
  }
  .channel-content a.active{
    color:#65a1fc;
  }
</style>

