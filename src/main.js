import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('@/sass/mystyles.scss');

createApp(App).use(store).use(store).use(router).mount('#app')
