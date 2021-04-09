import { createStore } from "vuex";

const files = import.meta.globEager('./modules/*.ts')
const modules = {}

Object.keys(files).forEach(key => {
  const name = key.replace(/(\.\/|\.ts)/g,'')
  modules[name.replace('modules/','')] = files[key].default;
})
export default createStore({
    state: {
      token:'12312asdas2421asf12d21d12'
    },
    mutations: {},
    actions: {},
    getters :{
      getToken(state){
        return state.token
      }
    },
    modules
});
