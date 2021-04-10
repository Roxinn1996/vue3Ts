<template>
  <div class="home">
    <router-link to="/my-info">my-info</router-link> |
    <router-link to="/about">About</router-link>
 
    <van-button type="primary" v-copy='`这是我的文明走`'>拷贝按钮</van-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  components:{  },
  setup:()=>{
    onMounted(() => {
      console.log('第一次加载')
    })
   
    return{
      
    }


  },
  computed:{
  }
  
  
})
</script>

<style lang="less" scoped>
.home{
  background-color: #eee;
  height: 100vh;
  .title{
    color: red;
    font-size: 14px;
  }
  .tips{
    color: @themeColor;
  }
}
</style>