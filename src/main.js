import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 创建 Vue 应用实例
const app = createApp(App);

// 使用 Vue Router
app.use(router);

// 使用 Element Plus
app.use(ElementPlus);

// 挂载应用
app.mount('#app');
