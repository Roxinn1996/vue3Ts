export default [
  {
    path: "/about",
    name: "about",
    component: () => import("@/page/about/about.vue"),
    meta:{
      title:'关于',
      keepAlive: true,
      is_show_header: false,
      is_show_footer: true,
      back: 'back',
    }
  },
]
