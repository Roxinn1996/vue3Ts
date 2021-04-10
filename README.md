# 基于Vue 3 + Typescript + Vite 搭建H5通用架子

### 项目初衷

用最新的前端技术开发一个H5的通用架子，让前端同学开箱即用，迅速投入战斗。

----

项目源码在文章结尾处，记得查收哦~ <br>
如果有帮助到你，请点个 star~ 

### 主要功能
1. 常用目录别名
2. Vant/Rem适配
3. scss支持、_mixin.scss、_variables.scss
4. 页面切换动画+keepAlive
5. 页面标题
6. 模块化自动注册：自动注册路由表/自动注册Vuex/svg图标引入
7. axios封装、api管理
8. 生产环境优化


### 常用目录别名
```js

alias: {
        '@': '/src',
        'assets': '/src/assets',
        'components': '/src/components',
        'config': '/src/config',
        'router': '/src/router',
        'api': '/src/api',
    }
```

### Vant/Rem适配

```js
module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
```

### less支持、variables.less、common.less
选择less作为css预处理，并对 variables、common.less作全局引入。
```js
css: {
    preprocessorOptions: {
      // 引入公用的样式
      less: {
        additionalData: `@import "@/styles/common.less";@import "@/styles/variable.less";`,
      }
    }
  }
```

### 模块化自动注册

使用vite import.meta.globEager 方法获取文件上下文<br>
下面用路由自动注册为例

```js
//模块化路由，将router 文件夹下的ts文件内路由自动导入
const routesModules = import.meta.globEager('./**/*.ts')
const modules:Array<RouteRecordRaw> = []
Object.keys(routesModules).forEach(key => {
  modules.push(...routesModules[key].default)
})
routes = routes.concat(modules)

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

```



