<template>
  <div class="home">
    <Header />
    <homeList />
    <homeList />
    <homeList />
    <homeList />
    <homeList />
    <homeList />
    <homeList />
    <homeList />
    <homeList />
    <homeList />
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
  name: 'Home'
}
</script>

