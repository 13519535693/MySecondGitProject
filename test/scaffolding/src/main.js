import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import qs from "qs";
//引入全局组件
import SayHello from "./components/SayHello.vue";
import AddMethod from "./components/AddMethod.vue";
axios.defaults.baseURL = "http://127.0.0.1";
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

//注册全局组件，全局组件的注册要在vue创建之前
Vue.component("say-hello", SayHello);
Vue.component("add-method", AddMethod);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
