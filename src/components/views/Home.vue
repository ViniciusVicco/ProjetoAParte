<template>
    <div>
        <div class="card-deck">
            <div class="card">
                <img src="../../assets/images/hatches.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Melhores hatches usados entre 2014 e 2015</h5>
                    <p class="card-text">VW Golf apresenta uma crescente procura em seus modelos.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Atualizado em 14/11/2019</small>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/images/sinistroTabajara.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Financiar é vantajoso ?</h5>
                    <p class="card-text">O financiamento sempre foi aliado do trabalhador mas pode se tornar um pesadelo se mal planejado.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Atualizado em 14/11/2019</small>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/images/dinheirosobrando.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Quer um carro potente sem gastar muito ?</h5>
                    <p class="card-text">Algumas alternativas podem ser viáveis em tempos de crise...</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Atualizado em 14/11/2019</small>
                </div>
            </div>
        </div>
        <br>
        <div class="card-deck">
            <div class="card" style="width: 18rem; background-color: #CCCCCC">
<!--                <img class="card-img-top" src="../../assets/images/finan.png.jpeg" alt="Card image cap">-->
                <div class="card-body">
                    <h5 class="card-title">Financiamento</h5>
                    <p class="card-text">Financiamos seu veículo em até 60x, acesse nosso site parceiro.</p>
                    <a href="https://www.icarros.com.br/financiamento/index.jsp?ano=2013&parceiro_id=192&midia_id=5583&gclid=CjwKCAiA8K7uBRBBEiwACOm4dzPPkRW6DzpmeJHXPHHmjL76tCR6pCK9lzGRIFj1kxgnCjl-myG8YxoCvBoQAvD_BwE" class="btn btn-primary">Entenda Mais</a>
                </div>
            </div>
            <div class="card" style="width: 18rem; background-color: #CCCCCC">
                <div class="card-body">
                    <h5 class="card-title">Acesse Nosso Catálogo</h5>
                    <p class="card-text">Nosso catálogo possuí os mais variados tipos de veículos, confira.</p>
                    <router-link to="/catalogo"><button class="btn btn-primary">Acessar Catálogo</button></router-link>
                </div>
            </div>
        </div>
        <br>
        <div class="card-deck">
            <div class="card" style="width: 18rem; background-color: #CCCCCC">
                <div class="card-body">
                    <h5 class="card-title">Agendamentos</h5>
                    <p class="card-text">Para melhor comodidade realize todo tipo de agendamento previamente.</p>
                    <router-link to="/agendamentos"><button class="btn btn-primary">Agendamentos</button></router-link>
                </div>
            </div>
            <div class="card" style="width: 18rem; background-color: #CCCCCC">
                <div class="card-body">
                    <h5 class="card-title">Oficina Mêcanica</h5>
                    <p class="card-text">Entenda revisões, trocas preventivas e nossa cobertura em assistência.</p>
                    <router-link to="/oficina"><button class="btn btn-primary">Oficina</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cards"
    }
</script>

<style scoped>

</style>