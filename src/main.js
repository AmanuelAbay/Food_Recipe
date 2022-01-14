import { createApp } from 'vue';
import Kaffe from './Kaffe.vue';
import './assets/css/tailwind.css';
import router from './components/routes/routes.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const app = createApp(Kaffe);
app.use(router)
app.mount('#app')