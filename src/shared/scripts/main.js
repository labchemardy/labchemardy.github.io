import { createApp } from 'vue'
import '../styles/global.css'
import App from '../components/app.vue'
import router from '../../router';

createApp(App).use(router).mount('#app');
