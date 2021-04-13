import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import type { AppRouteModule } from './type' 
let routes: AppRouteModule[] = [
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
  {
    path: '/404',
    name: '404',
    component: () => import('@/page/404.vue'),
    meta: {
      title: '404',
      keepAlive: true
    }
  },
  { path: '/:pathMatch(.*)*', redirect: '/404',}
];
//模块化路由
const routesModules = import.meta.globEager('./modules/*.ts')
const modules:AppRouteModule[] = []
Object.keys(routesModules).forEach(key => {
  modules.push(...routesModules[key].default)
})
routes = routes.concat(modules)

const router = createRouter({
    history: createWebHashHistory(),
    routes:(routes as unknown) as RouteRecordRaw[],
});
// router.beforeEach(async(to, from, next) => {
//   // console.log(to)
//   // console.log(store)
  
//   // console.log(from)
//   next()
// })
export default router;
