<template>
  <div class="info">我的资料</div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup:()=>{
    onMounted(() => {
      console.log('我的资料')
    })
  }
  
})
</script>

<style scoped lang='scss'>
.info{
  // @include page_content;
}

</style>