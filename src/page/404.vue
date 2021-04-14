<template>
  <div class="router_undefined">
     <van-empty image="error" description="走错了~~~~" >
       <div class="back-home">
        <router-link tag="a" replace to="/">返回首页</router-link>
       </div>
     </van-empty>
    
  </div>
</template>
<script>
import { Empty } from 'vant';
export default {
  name: 'page404',
  components:{
    [Empty.name]:Empty
  }
}
</script>
<style scoped lang="scss">
  .router_undefined{
    height: 100vh;
    overflow: hidden;
    background: #ffff;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    padding-top:20%;
  }
  .back-home{
    width: 130px;
    line-height: 28px;
    height: 28px;
    background-color: #ee0a24;
    border-radius: 999px;
    a{
      color: #fff;
    }
  }
</style>
