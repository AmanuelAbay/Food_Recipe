import { createApp } from 'vue';
import Kaffe from './Kaffe.vue';
import './assets/css/tailwind.css';
import router from './components/routes/routes.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { store } from './components/store/store.js';
import provider from './components/utils/apollo.config.js';
import VeeValidation from './components/utils/validation.js';

library.add(fas);
const app = createApp(Kaffe);
app.use(router);
app.use(store);
app.use(provider)
app.mount('#app')
app.use(VeeValidation);