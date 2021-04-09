import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import store  from './store';
import Directives from './directives'

import 'lib-flexible'
import 'vant/lib/index.css';
// import '@/styles/common.less'
import '@/config/config'

createApp(App)
  .use(router)
  .use(Directives)
  .use(store)
  .use(Vant)
  .mount('#app')
