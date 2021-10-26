<template>
  <div class="about">
    <div>关于</div>
    <van-image
      width="200"
      height="200"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <van-button type="primary" @click="apiClick()">这是按钮</van-button>
    <Buoy :data="demoData" />
  </div>

</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getInfo } from '@/api/home'
import Buoy from '@/components/widget/Buoy.vue'
export default defineComponent({
  components:{
    Buoy
  },  
  setup(){
    const apiClick = async() => {
      const res = await getInfo({'token':'3231_login success'})
      console.log(res);
    }

    const state = reactive({
      demoData: {
        link: 'https://www.baidu.com/',
        buoyCloseShown: false,
        imageUrl: 'https://img01.yzcdn.cn/vant/cat.jpeg'
      }
    })

    return{
      apiClick,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.about{
  color: $themeColor;
}
</style>