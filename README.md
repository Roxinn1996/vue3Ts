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
4. 页面标题
5. 模块化自动注册：自动注册router/自动注册Vuex
6. axios封装、api管理、请求代理
7. 生产环境优化


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

### scss支持、variables.scss、common.scss
选择scss作为css预处理，并对 variables、common.scss作全局引入。
```js
css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: `@import "@/styles/common.scss";@import "@/styles/variable.scss";`,
      }
    }
  }
```

### 模块化自动注册

vuex, router模块化<br>
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

### router的meta设置
路由`meta`内添加元信息，不设置默认为`false`
1. `is_show_footer` ：是否显示底部栏
2. `is_show_footer`： 是否显示顶部导航栏
3. `keepAlive` ：是否缓存页面

配合`vue-router`的`beforeEach`获取meta信息，不填meta默认为false, 数据保存到veux 内，方便后续业务做更多扩展设置



### 生产环境优化

上线前，得优化一下资源了，该项目做了如下几步操作

1. 使用br压缩代码，配置文件见 vite.config.ts
2. 移除掉debugger/console


[掘金文章地址](https://juejin.cn/post/6953553786375766047/)


