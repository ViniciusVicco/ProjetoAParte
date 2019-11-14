<template>
    <div class="card-deck">
        <div class="card-body">
            <h3 class="card-title" style="">Agendamento</h3>
            <p class="card-text">Os agendamentos podem ser realizados em dias utéis (segunda a sexta-feira), cuidado, agendamentos realizados em feriados ou finais de semana não serão considerados pelo sistema.</p>
                <div class="card-deck">
                        <div class="card">

                            <table>
                                <tr>
                                    <th>Data</th>
                                    <th>Tipo De Agendamento</th>
                                    <th>Atendente</th>
                                </tr>
                                <tr>
                                    <td><datetime id="data" type="datetime" style="width: 100%" v-model="estadoV"></datetime></td>
                                    <td><div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Tipo de agendamento
                                        </button>
                                        <br>
                                        <br>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Teste-Drive</a>
                                            <a class="dropdown-item" href="#">Avaliação de usado</a>
                                            <a class="dropdown-item" href="#">Recall</a>
                                        </div>
                                    </div></td>
                                    <td>Fulano</td>
                                </tr>

                        <br>

                            </table>
                            <button v-if="estadoV" class="btn btn-lg btn-primary btn-block">Confirmar Agendamento</button>
                    </div>
                </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "agendamentos",
            data(){
                return {
                    estadoF: false,
                    estadoV: true,
                    datetime: true

                }
            }
        }
</script>

<style scoped>

</style>