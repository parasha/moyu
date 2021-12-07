import '@/common/less/reset.less';
import '@/common/less/common.less';

import { createApp, defineComponent } from "vue";
import { RouterView } from "vue-router";

import router from './routes/index';
import store from './store/index';

// 后退时刷新页面
window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    location.reload();
  }
});

const App = defineComponent({
  name: "App",
  setup() {
    return () => <RouterView />;
  },
});

const app = createApp(App).use(store).use(router);
app.mount("#app");
