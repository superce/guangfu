<template>
  <div class="down">
    <img src="../assets/images/7.png" alt="">
  </div>
</template>
<script>
export default {
  name:'More'
}
</script>
<style scoped>
@keyframes mymove
{
  50% {bottom:-1.6rem;}
  100% {bottom:-1.5rem;}
}
.down{
  width: .8rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation:mymove .7s infinite;
}
.down img{
  width: 100%;
}
</style>
