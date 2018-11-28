var lineChartOne = new Chart(
    document.getElementById("chartjs-0"),
    {
        "type": "line",
        "data": {
            "labels": [],
            "datasets": [
                {
                    "label": "Memória RAM",
                    "data": [],
                    "fill": false,
                    "borderColor":
                        "rgb(75, 192, 192)",
                    "lineTension": 0.1
                }
            ]
        },
        "options": {}
    });

var lineChartTwo = new Chart(
    document.getElementById("chartjs-1"),
    {
        "type": "line",
        "data": {
            "labels": [],
            "datasets": [
                {
                    "label": "CPU",
                    "data": [],
                    "fill": false,
                    "borderColor":
                        "rgb(75, 192, 192)",
                    "lineTension": 0.1
                }
            ]
        },
        "options": {}
    });

var lineChartTree = new Chart(
    document.getElementById("chartjs-2"),
    {
        "type": "line",
        "data": {
            "labels": [],
            "datasets": [
                {
                    "label": "Atividade HD",
                    "data": [],
                    "fill": false,
                    "borderColor":
                        "rgb(75, 192, 192)",
                    "lineTension": 0.1
                }
            ]
        },
        "options": {}
    });