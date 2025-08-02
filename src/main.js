import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import formContact from './components/formContact.vue'
// import map from '@/components/map.vue';


createApp(App)
  .use(router)
  .mount('#app')
