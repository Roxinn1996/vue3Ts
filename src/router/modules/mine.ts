export default [
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/page/mine/mine.vue"),
    meta:{
      title:'我的',
      keepAlive: true,
      is_show_footer: true,
      back: 'back',
    }
  },
  {
    path: "/my-info",
    name: "my-info",
    component: () => import("@/page/mine/views/my-info.vue"),
    meta:{
      keepAlive: false,
      is_show_header: true,
      back: 'back',
    }
  }
]
