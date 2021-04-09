
const HOME_STEP ='homeStep'

export default {
  namespaced: true,
  state: {
    step: 'home测试一下下'
  },
  mutations: {
    [HOME_STEP] (state,data){
      state.step = data; 
    }

  },
  actions: {
 
  },
  getters: {
    getterStep(state){
      return state.step
    }
  }
}
