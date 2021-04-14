import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
// import vitePluginImp from "vite-plugin-imp";

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      ext: '.br', // .gz
      algorithm: 'brotliCompress',  //gzip
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
      scss:{
        additionalData: `@import "@/styles/mixin.scss";@import "@/styles/variable.scss";`
      },
      // less: {
      //   additionalData: `@import "@/styles/variable.less";`,
      // }
    }
  }
})
