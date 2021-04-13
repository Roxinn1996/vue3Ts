<template>
  <van-button type="primary" v-copy='`湿哒哒沙雕`'>拷贝按钮</van-button>
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

}
</style>