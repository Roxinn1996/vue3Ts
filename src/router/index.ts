import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/page/home/home.vue"),
    meta:{
      title:'首页',
      keepAlive: true,
      is_show_header: false,
      is_show_footer: false,
      back: 'back',
    }
  },
];
//模块化路由
const routesModules = import.meta.globEager('./**/*.ts')
// console.log(routesModules)
const modules:Array<RouteRecordRaw> = []
Object.keys(routesModules).forEach(key => {
  modules.push(...routesModules[key].default)
})
routes = routes.concat(modules)



const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
