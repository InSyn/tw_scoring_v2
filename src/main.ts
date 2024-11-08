import { createApp } from 'vue';

import pinia from './store';
import router from './router';

import App from './App.vue';

import './styles/defaults.css';

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*');
  });
