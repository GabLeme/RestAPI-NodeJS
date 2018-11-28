var codigoMaquina = localStorage.getItem("codMaquina");
let urlLeitura = 'http://localhost:3000/usuario/maquina/leitura/' + parseInt(codigoMaquina);
var i = 0;
setInterval(() => {
    $.ajax({
        type: 'GET',
        url: urlLeitura,
        success: function (response) {
            if (i == 5) {
                i = 0;
            }
            lineChartOne.data.datasets[0].data[i] = response[0].RAM_PERCENTUAL;
            lineChartOne.data.labels[i] = i;
            lineChartOne.update();
            lineChartTwo.data.datasets[0].data[i] = response[0].CPU_PERCENTUAL;
            lineChartTwo.data.labels[i] = i;
            lineChartTwo.update();
            lineChartTree.data.datasets[0].data[i] = response[0].HD_TEMPO_ATIVIDADE_PERCENTUAL;
            lineChartTree.data.labels[i] = i;
            lineChartTree.update();
            i++;
        },
        error: function (error) {
            console.log(error);
        }
    });
}, 1000);