<template>
  <div class="g-loading" v-show="isLoading">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props:{
    isLoading:{
      type:Boolean,
      default:true,
    }
  }

})
</script>


<style scoped lang='scss'>
.g-loading{
  z-index: 99999;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.01) ;
  position: fixed;

  .spinner {
    margin: 100px auto;
    width: 50px;
    height: 50px;
    // text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    z-index: 99999 !important;
    position:fixed !important;
    left: 0 !important;
    right: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    margin:auto !important;
    & div{
      background-color: #808080; //loading颜色
      height: 100%;
      width: 6px;
      border-radius: 20px;
      display: inline-block;
      -webkit-animation: stretchdelay 1s infinite ease-in-out;
      animation: stretchdelay 1s infinite ease-in-out;
    }
    .rect2 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .rect3 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
    .rect4 {
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }
    .rect5 {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }
  }
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
