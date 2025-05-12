console.log("Iniciando gráficos");

Chart.defaults.font.size = 16;
    
// === Gráfico de Barras - Eixo Y começando em zero ===
eixoYCheio = document.getElementById('eixoYCheio');
if (eixoYCheio && !eixoYCheio.dataset.rendered) {
  new Chart(eixoYCheio, {
    type: 'bar',
    data: {
      labels: ['Plataforma A', 'Plataforma B'],
      datasets: [{
        label: 'Usuários Ativos',
        data: [2000, 2200]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Usuários Ativos (Eixo Y de 0 a 2500)'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 2500
        }
      }
    }
  });
  eixoYCheio.dataset.rendered = "true";
}

// === Gráfico de Barras - Eixo Y Cortado (tendencioso) ===
eixoYCortado = document.getElementById('eixoYCortado');
if (eixoYCortado && !eixoYCortado.dataset.rendered) {
  new Chart(eixoYCortado, {
    type: 'bar',
    data: {
      labels: ['Plataforma A', 'Plataforma B'],
      datasets: [{
        label: 'Usuários Ativos',
        data: [2000, 2200]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Usuários Ativos (Eixo Y de 1900 a 2300)'
        }
      },
      scales: {
        y: {
          min: 1900,
          max: 2300
        }
      }
    }
  });
  eixoYCortado.dataset.rendered = "true";
}

// === Gráfico de Pizza - Diferenças pequenas desaparecem ===
pizzaEnganosa = document.getElementById('pizzaEnganosa');
if (pizzaEnganosa && !pizzaEnganosa.dataset.rendered) {
  new Chart(pizzaEnganosa, {
    type: 'pie',
    data: {
      labels: ['Preferência A', 'Preferência B', 'Preferência C'],
      datasets: [{
        label: 'Porcentagem',
        data: [48, 44, 8]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Preferências (Gráfico de Pizza Enganoso)'
        }
      }
    }
  });
  pizzaEnganosa.dataset.rendered = "true";
}

// === Gráfico de Barras - Mesmo dado, mais claro que pizza ===
barrasClaridade = document.getElementById('barrasClaridade');
if (barrasClaridade && !barrasClaridade.dataset.rendered) {
  new Chart(barrasClaridade, {
    type: 'bar',
    data: {
      labels: ['Preferência A', 'Preferência B', 'Preferência C'],
      datasets: [{
        label: 'Porcentagem',
        data: [48, 44, 8]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Preferências (Gráfico de Barras mais claro)'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 60
        }
      }
    }
  });
  barrasClaridade.dataset.rendered = "true";
}

// === Gráfico de Barras com espaços - dado contínuo ===
barrasErradas = document.getElementById('barrasErradas');
if (barrasErradas && !barrasErradas.dataset.rendered) {
  new Chart(barrasErradas, {
    type: 'bar',
    data: {
      labels: ['0–10', '10–20', '20–30'],
      datasets: [{
        label: 'Frequência',
        data: [30, 50, 70],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Tempo de Espera (Gráfico de Barras Errado)'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  barrasErradas.dataset.rendered = "true";
}

// === Histograma Correto - barras coladas ===
histogramaCorreto = document.getElementById('histogramaCorreto');
if (histogramaCorreto && !histogramaCorreto.dataset.rendered) {
  new Chart(histogramaCorreto, {
    type: 'bar',
    data: {
      labels: ['0–10', '10–20', '20–30'],
      datasets: [{
        label: 'Frequência',
        data: [30, 50, 70],
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Tempo de Espera (Histograma Correto)'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          grid: {
            offset: false
          }
        }
      }
    }
  });
  histogramaCorreto.dataset.rendered = "true";
}
