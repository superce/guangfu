<template>
  <div class="home">
    <Header @tab='toogleTab'/>
    <div class="tab-box">
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
    </div>
  </div>
</template>

<script>
import Header from './Header'
import homeList from './homeList'
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
  methods: {
    toogleTab(index) {
      this.msg = index
      console.log(this.msg)
    }
  }
}
</script>

