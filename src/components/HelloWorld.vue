<template>
  <h1>{{ msg }}</h1>
  <div class="psotcss_demo">这是测试样式是否成功转换</div>
  <button @click="count++">count is: {{ count }}</button>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
.psotcss_demo{
  font-size: 14px;
  margin: 0 20px;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
