<template>
  <van-tabbar route :safe-area-inset-bottom="true" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" v-model="active" :to="item.name">
      <span>{{item.title}}</span>
      <template #icon="props">
        <img :src="props.active ? item.active : item.normal" class="tab-img" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  /* 图片 */
  import homeActive from '@/assets/bar/home-active.svg'
  import homeNormal from '@/assets/bar/home.svg'
  import studyActive from '@/assets/bar/study-active.svg'
  import studyNormal from '@/assets/bar/study.svg'
  import myActive from '@/assets/bar/my-active.svg'
  import myNormal from '@/assets/bar/my.svg'
  /* 工具 */
  import { useRouter, useRoute } from 'vue-router'

  export default defineComponent({
    components: {  },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const state = reactive({
        active: 0,
        tabbars:[
          {
            name: '/',
            title: '首页',
            normal: homeNormal,
            active: homeActive,
          },
          {
            name: '/about',
            title: '学习',
            normal: studyNormal,
            active: studyActive,
          },
          {
            name: '/mine',
            title: '我',
            normal: myNormal,
            active: myActive,
          }
        ]
      })

      return { 
        ...toRefs(state),
      };
    },
  });
</script>
<style lang="scss" scoped>
.active{
  color: #FA5B3D;
}
</style>
