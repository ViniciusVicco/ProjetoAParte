
    <template>
        <body>
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Cadastrar-se</h5>
                            <form class="form-signin">
                                <div class="form-label-group">
                                    <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus>
                                </div>
                                <br>
                                <div class="form-label-group">
                                    <input type="number" id="inputCpf" class="form-control" placeholder="CPF/CNPJ" required autofocus>
                                </div>
                                <br>
                                <div class="form-label-group">
                                    <input type="number" id="inputTelefone" class="form-control" placeholder="Telefone" required autofocus>
                                </div>
                                <br>
                                <div class="form-check-label">
                                <div class="form-label-group">
                                    <input type="number" id="inputCep" class="form-control" placeholder="Cep: Ex 77000000" required autofocus>
                                </div>
                                    <br>
                                    <div class="form-label-group">
                                        <input type="text" id="inputCepPais" class="form-control" placeholder="Pais" required autofocus>
                                    </div>
                                    <br>
                                    <div class="form-label-group">
                                        <input type="text" id="inputCepUF" class="form-control" placeholder="Estado" required autofocus>
                                    </div>
                                    <br>
                                    <div class="form-label-group">
                                        <input type="text" id="inputCepCidade" class="form-control" placeholder="Cidade" required autofocus>
                                    </div>
                                    <br>
                                    <div class="form-label-group">
                                        <input type="text" id="inputCepSetor" class="form-control" placeholder="Setor" required autofocus>
                                    </div>
                                    <br>
                                    <div class="form-label-group">
                                        <input type="text" id="inputCepRua" class="form-control" placeholder="Rua" required autofocus>
                                    </div>
                                </div>
                                <br>
                                <div class="form-label-group">
                                    <input type="text" id="inputNumero" class="form-control" placeholder="Número/Apartamento" required autofocus>
                                </div>
                                <br>
                                <div class="form-label-group">
                                    <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
                                    <br>
                                    <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Confirmar Senha" required>
                                </div>
                                <br>
                                <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" v-model="estadoF" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">Li e concordo com as políticas da empresa.</label>
                                    </div>
                                <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" v-model="estadoV" id="customCheck2">
                                    <label class="custom-control-label" for="customCheck2">Desejo receber e-mails e promoções.</label>
                                </div>
                                <button v-if="estadoF" class="btn btn-lg btn-primary btn-block" type="submit">Registrar</button>
                                <button v-if="estadoV" class="btn btn-lg btn-primary btn-block" onclick="alert('Aceite as políticas da empresa para prosseguir.')" type="submit">Ajuda</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>

    </template>

    <style>
        #headerCabecalho{
            position: absolute;
            background-color: #1E95EA;
            width: auto;
            width: 100%;

        }
    </style>


<script>
    export default {
        name: "Registrar",
        data(){
            return {
                estadoF: false,
                estadoV: true
            }
        }
    }
</script>

<style scoped>

</style>