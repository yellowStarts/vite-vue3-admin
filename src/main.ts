import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import { createPinia } from 'pinia'
import App from './App.vue';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import './styles'

createApp(App).use(createPinia()).use(TDesign).mount('#app');
