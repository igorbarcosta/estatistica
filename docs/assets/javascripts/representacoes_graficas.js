console.log("Iniciando gráficos");

Chart.defaults.font.size = 16;

generoCanvas = document.getElementById('generoBarras');
if (generoCanvas && !generoCanvas.dataset.rendered) {
  new Chart(generoCanvas, {
    type: 'bar',
    data: {
      labels: ['Comédia', 'Drama', 'Documentário', 'Ação', 'Terror'],
      datasets: [{
        label: 'Frequência',
        data: [350, 290, 180, 120, 60],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Gênero Preferido de Conteúdo'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  generoCanvas.dataset.rendered = "true";
}

// 2. Gênero Preferido - Gráfico de Pizza
pizzaCanvas = document.getElementById('generoPizza');
if (pizzaCanvas && !pizzaCanvas.dataset.rendered) {
  new Chart(pizzaCanvas, {
    type: 'pie',
    data: {
      labels: ['Comédia', 'Drama', 'Documentário', 'Ação', 'Terror'],
      datasets: [{
        label: 'Frequência',
        data: [350, 290, 180, 120, 60]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Composição por Gênero de Conteúdo'
        }
      }
    }
  });
  pizzaCanvas.dataset.rendered = "true";
}

// 2. Nº de Dispositivos por Conta - Gráfico de Barras
dispositivosCanvas = document.getElementById('dispositivosBarras');
if (dispositivosCanvas && !dispositivosCanvas.dataset.rendered) {
  new Chart(dispositivosCanvas, {
    type: 'bar',
    data: {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [{
        label: 'Frequência',
        data: [120, 280, 250, 90, 60],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Número de Dispositivos por Conta'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  dispositivosCanvas.dataset.rendered = "true";
}

// 3. Histograma - Tempo de Uso Diário
histogramaCanvas = document.getElementById('tempoHistograma');
if (histogramaCanvas && !histogramaCanvas.dataset.rendered) {
  new Chart(histogramaCanvas, {
    type: 'bar',
    data: {
      labels: ['0-30', '30-60', '60-90', '90-120', '120-150', '150-180'],
      datasets: [{
        label: 'Frequência',
        data: [40, 110, 220, 80, 30, 20],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Histograma do Tempo de Uso Diário (min)'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          title: {
            display: true,
            text: 'Intervalos de Tempo (min)'
          },
          grid: {
            offset: false
          }
        }
      }
    }
  });
  histogramaCanvas.dataset.rendered = "true";
}

// 4. Polígono de Frequências
poligonoCanvas = document.getElementById('tempoPoligono');
if (poligonoCanvas && !poligonoCanvas.dataset.rendered) {
  new Chart(poligonoCanvas, {
    type: 'line',
    data: {
      labels: ['15', '45', '75', '105', '135', '165'], // Pontos médios dos intervalos
      datasets: [{
        label: 'Frequência',
        data: [40, 110, 220, 80, 30, 20],
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Polígono de Frequências do Tempo de Uso Diário'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          title: {
            display: true,
            text: 'Ponto Médio dos Intervalos (min)'
          }
        }
      }
    }
  });
  poligonoCanvas.dataset.rendered = "true";
}

// 5. Ogiva - Frequência Acumulada
ogivaCanvas = document.getElementById('tempoOgiva');
if (ogivaCanvas && !ogivaCanvas.dataset.rendered) {
  new Chart(ogivaCanvas, {
    type: 'line',
    data: {
      labels: ['30', '60', '90', '120', '150', '180'], // Limites superiores
      datasets: [{
        label: 'Frequência Acumulada',
        data: [40, 150, 370, 450, 480, 500],
        fill: false,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Ogiva do Tempo de Uso Diário'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          title: {
            display: true,
            text: 'Limites Superiores dos Intervalos (min)'
          }
        }
      }
    }
  });
  ogivaCanvas.dataset.rendered = "true";
}

console.log("Gráficos carregados com sucesso");