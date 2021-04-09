<template>
  <keep-alive>
    <router-view  v-if="keepAlive" />
  </keep-alive>
  <router-view v-if="!keepAlive" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      keepAlive: true
    }
  },

  methods:{
    init(){
      console.log(this.$router);
       this.$router.options.routes.map((item) =>{
         if (item.path == window.location.pathname){
           this.keepAlive = item.meta.keepAlive || false;
         }
       })
    }
  }
})
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