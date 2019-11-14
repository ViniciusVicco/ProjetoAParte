import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home'
import Pagina from './components/views/paginaLogin'
import Registrar from './components/views/paginaRegistro'
import Catalogo from './components/views/paginaCatalogo'
import Vendedores from "./components/views/contatos/vendedores";
import Oficina from "./components/views/contatos/oficina";
import Agendamentos from "./components/views/contatos/agendamentos";
import TemplateVeiculos from "./components/views/veiculos/templateVeiculo"
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {   path: '/login',
            component: Pagina
        },
        {
            path: '/registrar',
            component: Registrar
        },
        {
            path: '/catalogo',
            component: Catalogo
        },
        {
            path: '/vendedores',
            component: Vendedores
        },
        {
            path: '/oficina',
            component: Oficina
        },
        {
            path: '/agendamentos',
            component: Agendamentos
        },
        {
            path: '/veiculos',
            component: TemplateVeiculos
        },

    ]
})