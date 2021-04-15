<template>
  <div class="about">
    <div>关于</div>
    <van-image
      width="200"
      height="200"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <van-button type="primary" @click="apiClick()">这是按钮</van-button>
  </div>

</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { getInfo } from '@/api/home'
export default defineComponent({
  setup(){
    const apiClick = async() => {
      const res = await getInfo({'token':'3231_login success'})
      console.log(res);
    }

    return{
      apiClick
    }
  }
})
</script>

<style lang="scss" scoped>
.about{
  // color: $themeColor;
}
</style>