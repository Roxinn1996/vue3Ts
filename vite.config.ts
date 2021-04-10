import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
// import vitePluginImp from "vite-plugin-imp";

// console.log(loadEnv())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    // vitePluginImp({   //使用 vant 组件的再加载css文件
    //   libList:[
    //     {
    //       libName: 'vant',
    //       style: (name) => {
    //         return`vant/es/${name}/index.css`
    //       }
    //     }
    //   ]
    // })
  ],
  server: {
    port: 6061, // 配置启用的端口号
    proxy: {
      '/api': {
        target: 'http://api.ourclass.com.cn/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {  //别名设置
    alias: {
        '@': '/src',
        'assets': '/src/assets',
        'components': '/src/components',
        'config': '/src/config',
        'router': '/src/router',
        'api': '/src/api',
    }
  },
  build:{
    terserOptions:{
      compress: {
        drop_console: true,
      }
    }
  },
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      less: {
        additionalData: `@import "@/styles/common.less";@import "@/styles/variable.less";`,
      }
    }
  }
})
