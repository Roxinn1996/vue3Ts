
import copy from './cope'
const directives = {
  copy,
}

export default {
  install(Vue){
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}