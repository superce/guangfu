<template>
  <div class="download">
    <a href="">立即下载</a>
  </div>
</template>
<script>
  export default {
    name:'downLoad'
  }
</script>
<style scoped>
  .download{
    width: 18.75rem;
    height: 33.35rem;
    background: url(../assets/images/bg.jpg) no-repeat;
    background-size: cover; 
    position: relative;
  }
  .download a{
    display: block;
    color:#fff;
    background: #0069f5;
    width:10rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    font-size: .9rem;
    border-radius: 1rem;
    position: absolute;
    bottom:3rem;
    left: 50%;
    transform: translateX(-50%)
  }
</style>

