import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import type { AppRouteModule } from './type' 
import store from '@/store'

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

router.beforeEach(async(to, from, next) => {
  const { keepAlive= false, is_show_header= false, is_show_footer= false, title='' } = to.meta
  store.commit('setting/set_router_meta',
  { 
    keepAlive,
    is_show_header,
    is_show_footer,
    title,
  })
  to.meta.title?(document.title = to.meta.title  as string):( document.title = '通用架子' ) 
  next()
})
export default router;
