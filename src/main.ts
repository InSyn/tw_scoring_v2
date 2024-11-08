import { createApp } from 'vue';

import pinia from './store';
import router from './router';

import App from './App.vue';

import './assets/styles/main.scss';

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*');
  });
