import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
} from "ant-design-vue";
import Authorized from "@/components/Authorized";
import Auth from "@/directives/auth";

import request from "@/utils/request";

Vue.config.productionTip = false;
Vue.prototype.$request = request;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.component("Authorized", Authorized);
Vue.use(Auth);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1453752_4r47jtu3irw.js",
});

Vue.component("IconFont", IconFont);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
