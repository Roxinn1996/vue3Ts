<template>
  <van-nav-bar
    title=""
    left-arrow
    @click-left="onClickLeft"
  />

</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';

  /* 工具 */
  import { useRouter, useRoute } from 'vue-router'

  export default defineComponent({
    components: {  },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const onClickLeft = () => {
        if (window.history.length > 1) {
          router.back()
        } else {
          router.replace('/')
        }
      }
      return { 
        onClickLeft
      };
    },
  });
</script>
<style lang="scss" scoped>
.active{
  color: #FA5B3D;
}
</style>
