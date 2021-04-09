export default [
  {
    path: "/my-info",
    name: "my-info",
    component: () => import("../page/my-info/my-info.vue"),
    meta:{
      title:'我的',
    }
  }
]
