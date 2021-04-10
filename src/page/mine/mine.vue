<template>
  <div @click="demoClick">我的</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup:()=>{
    const router = useRouter()
    const demoClick = () =>{
      router.push('/my-info')
    }
    return{
      demoClick
    }
  }
  
})
</script>

<style>

</style>