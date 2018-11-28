var codigo = localStorage.getItem("cod_usuario");
let urlMachine = 'http://localhost:3000/usuario/maquina/' + parseInt(codigo);
var trHTML = '';
$.ajax({
    type: 'GET',
    url: urlMachine,
    success: function (response) {
        $.each(response, function (i, item) {
            trHTML += '<tr><td><button value="'+item.COD_MAQUINA+'" onclick="getCodMaquina('+item.COD_MAQUINA+')">Monitorar</button>' + item.COD_MAQUINA + '</td><td>' + item.NOME_MAQUINA + '</td><td>' + item.ATIVA + '</td></tr>';
        });
        $('#records_table').append(trHTML);
    },
    error: function (error) {
        console.log(error);
    }
});

function getCodMaquina(value){
    localStorage.setItem("codMaquina", value);
    location.href = "../JSProject/dashboardPage.html"
}
