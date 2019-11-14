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
import agendamentos from "./components/views/contatos/agendamentos";

Vue.component('datetime', Datetime);
Vue.extend({
    template: agendamentos,
    comments: {
        datetime: Datetime
    }
});