import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store';
import '@/styles/common.scss';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'
import Directives from './directives'
import Vconsole from 'vconsole'
import { settings } from '@/config/config'

if (import.meta.env.DEV && settings.vconsole) {
  const vConsole = new Vconsole()
}
createApp(App)
  .use(Vant)
  .use(Directives)
  .use(store)
  .use(router)
  .mount('#app')
