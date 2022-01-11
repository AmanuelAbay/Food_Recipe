import { createApp } from 'vue';
import Kaffe from './Kaffe.vue';
import './assets/css/tailwind.css';
import router from './components/routes/routes.js'


const app = createApp(Kaffe);
app.use(router)
app.mount('#app')