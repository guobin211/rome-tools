import { createApp } from 'vue'
import './style.scss'
import App from './pages/App.vue'
import router from './app.router'

const app = createApp(App)
app.use(router)
app.mount('#app')
