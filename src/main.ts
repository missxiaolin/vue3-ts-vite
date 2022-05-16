import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import 'lib-flexible'
import { setupPlugins } from './plugins';
import { setupStore } from './store';

const app = createApp(App)

// 安装插件（vant-ui等）,若使用了 vite-plugin-components 插件，则需要手动引入组件
setupPlugins(app);
// 安装vuex
setupStore(app);
app.use(router)
app.use(createPinia())

app.mount('#app')
