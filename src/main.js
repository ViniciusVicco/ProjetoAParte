import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import 'bootstrap';
import './assets/app.scss'
import paginaLogin from './components/views/paginaLogin';
import Home from "./components/views/Home";
import router from "./router";
import  {Datetime} from "vue-datetime";
import 'vue-datetime/dist/vue-datetime.css'


Vue.use(VueRouter);
Vue.component('datetime',Datetime);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
Vue.use(Datetime)