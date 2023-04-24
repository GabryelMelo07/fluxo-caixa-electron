const entradas_semanais = document.getElementById('entradas_semanais');
const entradas_mensais = document.getElementById('entradas_mensais');
const saidas_semanais = document.getElementById('saidas_semanais');
const saidas_mensais = document.getElementById('saidas_mensais');

new Chart(entradas_semanais, {
    type: 'bar',
    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [{
            label: 'R$ Entradas / Dia da semana',
            data: [12, 19, 3, 5, 2, 3, 30],
            borderWidth: 1.5
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Entradas Semanais'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(entradas_mensais, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'R$ Entradas / Mês',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Entradas Mensais'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(saidas_semanais, {
    type: 'bar',
    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [{
            label: 'R$ Saidas / Dia da semana',
            data: [12, 19, 3, 5, 2, 3, 30],
            borderWidth: 1.5
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Saidas Semanais'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(saidas_mensais, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'R$ Saidas / Mês',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Saidas Mensais'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
