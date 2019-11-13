<template>
    <div>
        <div class="card-deck">
            <div class="card">
                <img src="../../assets/images/hatches.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Melhores Hatches usados entre 2014 e 2015</h5>
                    <p class="card-text">VW Golf apresenta uma crescente procura em seus modelos.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/images/hatches.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/images/hatches.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
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
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style="width: 18rem; background-color: #CCCCCC">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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