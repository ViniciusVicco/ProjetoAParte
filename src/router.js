import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home'
import Pagina from './components/views/paginaLogin'


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

    ]
})