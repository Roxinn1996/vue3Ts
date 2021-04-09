<template>
  <div class="home">
    <p class="title">首页 </p> 
    <p class="tips">测试 </p> 
  </div>
  <router-link to="/my-info">my-info</router-link> |
  <router-link to="/about">About</router-link>
  <van-button type="primary" @click="demoClick">主要按钮</van-button>
  <van-button type="primary" @click="callback">测试按钮</van-button>
  <van-button type="primary" v-copy='`这是我的文明走`'>拷贝按钮</van-button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useStore, createNamespacedHelpers} from 'vuex'
import { getInfo } from '@/api/home'
export default defineComponent({
  setup:()=>{
    //第一种方式
    const store = useStore();
    // console.log(store.state);
    // console.log(store.state.home.step);

    const demoClick = async() =>{
      // console.log('测试点击')
      // const res = await getInfo({ token: '3231_login success' })

      // 找出重复次数最多的
      // const arr = [1,2,1,'a','b',NaN,1];
      
      // 排序，去重
      const arr = [{n: 'a', p: 1}, {n: 'b', p: 3}, {n: 'c', p: 2},{n: 'a', p: 1}]
      callback(undefined)
      callback(null)
      callback(NaN)
      callback(122)
      callback('收到昂是')
      callback({name:'sdads',six:'211'})
      callback([12312,12312,2222])
          
    }
    const callback = (arr, type= 's') =>{ 
      // Object.prototype.toString.call(arr)  === '[object Array]'   // 通过 Object.prototype.toString  方法判断数组
      // console.log( Object.prototype.toString.call(arr) )
    }

    return{
      demoClick,
      callback,
    }


  },
  computed:{
  }
  
  
})
</script>

<style lang="less" scoped>
.home{
  .title{
    color: red;
    font-size: 14px;
  }
  .tips{
    color: @themeColor;
  }
}
</style>