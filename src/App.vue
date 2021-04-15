<template>
  <div id="root">
    <Loading :isLoading='getIsLoading'/>
    <NavBar v-show="getSetting.is_show_header"/>
      <RouterView>
        <template #default="{ Component, route }">
          <keep-alive v-if="getSetting.keepAlive">
            <component :is="Component" :key="route.fullPath"/>
          </keep-alive>
          <component v-else :is="Component" :key="route.fullPath"/>
        </template>
      </RouterView>
    <FooterTabbar v-show="getSetting.is_show_footer"/>
  </div>
</template>
<script lang="ts">
/* 组件 */
import FooterTabbar from '@/components/FooterTabbar.vue'
import NavBar from '@/components/NavBar.vue'
import Loading from '@/components/Loading.vue'
/* 工具 */
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { createNamespacedHelpers, useStore } from 'vuex'
const { mapGetters, mapMutations } = createNamespacedHelpers('setting')

export default defineComponent({
  name: 'App',
  components: {  FooterTabbar, NavBar, Loading },
  setup(){
    
    onMounted(() => {
    });

    return{
    }
  },
  computed:{
    ...mapGetters(['getSetting','getIsLoading'])
  }
  
});
</script>

<style>
#app{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>