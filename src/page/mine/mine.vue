<template>
  <div class="mine">
    <div>我的</div>
    <div>时间戳转换{{stampToDateISO(`1618245334.721`)}}</div>
    <van-button type="primary" @click="demoClick">详细页</van-button>
  </div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
/* util 1618245334*/ 
import { stampToDateISO } from '@/utils/date-util'
export default defineComponent({
  setup:()=>{
    const router = useRouter()
    const demoClick = () =>{
      router.push('/my-info')
    }
    return{
      demoClick,
      stampToDateISO
    }
  },
  
})
</script>

<style scoped lang='scss'>
.mine{
}

</style>