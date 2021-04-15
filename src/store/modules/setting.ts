
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
    isLoading:false
  },
  mutations: {
    set_router_meta (state,data){
      state.router_meta = data; 
    },
    set_isLoading(state,data){
      state.isLoading = data;
    }
  },
  actions: {
 
  },
  getters: {
    getSetting(state){
      return state.router_meta
    },
    getIsLoading(state){
      return state.isLoading
    }
  }
}
