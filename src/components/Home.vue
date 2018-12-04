<template>
  <div class="home">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './Header'
import homeList from './homeList'
// import axios from 'axios'
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
  }
}
</script>

<style scoped>
</style>
