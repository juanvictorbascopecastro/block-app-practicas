import { createApp } from 'vue'
import router from './router'
import store from './store/index'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './css/style.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

/**
 *
 *
 * SERVIDOR UBUNTU, XAMPP, POSTGRESQL,
 * Servidor VPS, facturacion electronica no usar
 *
 */
