import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style.scss'

import router from '@/plugins/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
