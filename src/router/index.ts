import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/page/home/home.vue"),
    meta:{
      title:'首页',
      keepAlive: true,
      is_show_footer: true,
      back: 'back',
    }
  },
];
//模块化路由
const routesModules = import.meta.globEager('./modules/*.ts')
const modules:Array<RouteRecordRaw> = []
Object.keys(routesModules).forEach(key => {
  modules.push(...routesModules[key].default)
})
routes = routes.concat(modules)



const router = createRouter({
    history: createWebHashHistory(),
    routes
});
// router.beforeEach(async(to, from, next) => {
//   // console.log(to)
//   // console.log(store)
  
//   // console.log(from)
//   next()
// })
export default router;
