<template>
    <div id="app">
        <div>
           <header id="headerCabecalho">
                <ul class="produto">
                    <li class="li1" style="list-style-type:none">
                        <h1 class="produto">Tabajara Motors</h1>
                        <button class="btnmenu">Entrar</button>
                        <button class="btnmenu">Cadastre-se</button>
                        <button class="btnmenu">Catálogo</button>
                        <button class="btnmenu">Ajuda</button>
                    </li>
                </ul>
           </header>
        </div>
    </div>
</template>

<style>
    #headerCabecalho{
        background-color:#333;
    }
    body, html{
        height: 100%;
    }

    body{
        background-color: #FFF;
    }

    .menu{
        background-color: red;
        height: 100%;
        width: 250px;
    }
    .produto {
        display: flex;
        flex-flow: wrap;
        padding: 1rem;
        color: red;
        width: 50%;
    }
    .ul{
        background: red;
        padding: 20px;
    }
    .btnmenu{
        margin-top: 30px;
        border: none;
        background-color: #1E95EA;
        color: white;
        height: 40px;
        width: 100px;
        font-size: 14px;
        border-radius: 10px;
    }
    .li1{
        width: 100%;
    }
</style>