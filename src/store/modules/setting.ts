
import { settings } from '@/config/config'
export default {
  namespaced: true,
  state: {
    router_meta: {
      title:"",
      keepAlive: false,
      is_show_header: false,
      is_show_footer: false,
    },
  },
  mutations: {
    set_router_meta (state,data){
      state.router_meta = data; 
    },
  },
  actions: {
 
  },
  getters: {
    getSetting(state){
      return state.router_meta
    },
  }
}
