<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Tabajara Motors</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/catalogo">Catálogo <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/registrar">Registrar <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contatos
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link class="dropdown-item" to="/vendedores">Vendedores <span class="sr-only">(current)</span></router-link>
                        <router-link class="dropdown-item" to="/empresa">Empresa<span class="sr-only">(current)</span></router-link>
                        <router-link class="dropdown-item" to="/agendamentos">Agendamentos <span class="sr-only">(current)</span></router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import axios from 'axios'

    export default {
        mounted(){
            axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(function (response) {
                console.log(response.data)
            })
        },
    }
</script>

<style scoped>

</style>