<template>
  <NavBar v-show="getSetting.is_show_header"/>
  <RouterView>
    <template #default="{ Component, route }">
      <keep-alive v-if="getSetting.keepAlive">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
      <component v-else :is="Component" :key="route.fullPath" />
    </template>
  </RouterView>
  <FooterTabbar v-show="getSetting.is_show_footer"/>
</template>

<script lang="ts">
/* 组件 */
import FooterTabbar from './components/FooterTabbar.vue'
import NavBar from './components/NavBar.vue'
/* 工具 */
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { createNamespacedHelpers, useStore } from 'vuex'
const { mapGetters, mapMutations } = createNamespacedHelpers('setting')

export default defineComponent({
  name: 'App',
  components: {  FooterTabbar, NavBar },
  setup(){
    const router = useRouter();
    const store = useStore();
    
    onMounted(() => {
      init();
    });
    
    const init = () =>{
      router.beforeEach((to, from, next) => {
        const { keepAlive= false, is_show_header= false, is_show_footer= false, title='' } = to.meta
        store.commit('setting/set_router_meta',
        { 
          keepAlive,
          is_show_header,
          is_show_footer,
          title,
        })
        to.meta.title?( document.title = to.meta.title ):( document.title = '通用架子' ) 
        next()
      })
    };

    return{
      init
    }
  },
  computed:{
    ...mapGetters(['getSetting'])
  }
  
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>