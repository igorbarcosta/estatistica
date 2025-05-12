console.log("Iniciando gráficos");

Chart.defaults.font.size = 16;

console.log("Iniciando gráficos");

Chart.defaults.font.size = 16;

ctxNormal = document.getElementById('normalChart');
new Chart(ctxNormal, {
  type: 'bar',
  data: {
    labels: ['18', '19', '20', '21', '22', '23', '24', '25', '26'],
    datasets: [{
      label: 'Frequência',
      data: [3, 6, 10, 15, 20, 15, 10, 6, 3],
      borderWidth: 1,
      barPercentage: 1.0,
      categoryPercentage: 1.0
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Distribuição Normal (Simétrica)'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

ctxRightSkew = document.getElementById('rightSkewChart');
new Chart(ctxRightSkew, {
  type: 'bar',
  data: {
    labels: ['0-1k', '1-2k', '2-3k', '3-4k', '4-5k', '5-10k', '10-20k', '20k+'],
    datasets: [{
      label: 'Frequência',
      data: [25, 20, 15, 10, 7, 5, 3, 1],
      borderWidth: 1,
      barPercentage: 1.0,
      categoryPercentage: 1.0
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Assimetria à Direita (Skew Positivo)'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

ctxLeftSkew = document.getElementById('leftSkewChart');
new Chart(ctxLeftSkew, {
  type: 'bar',
  data: {
    labels: ['0-2', '2-4', '4-6', '6-8', '8-10'],
    datasets: [{
      label: 'Frequência',
      data: [1, 3, 7, 12, 20],
      borderWidth: 1,
      barPercentage: 1.0,
      categoryPercentage: 1.0
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Assimetria à Esquerda (Skew Negativo)'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

ctxLepto = document.getElementById('leptokurticChart');
new Chart(ctxLepto, {
  type: 'bar',
  data: {
    labels: ['18', '19', '20', '21', '22', '23', '24'],
    datasets: [{
      label: 'Frequência',
      data: [2, 5, 15, 30, 15, 5, 2],
      borderWidth: 1,
      barPercentage: 1.0,
      categoryPercentage: 1.0
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Distribuição Leptocúrtica'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

ctxPlaty = document.getElementById('platykurticChart');
new Chart(ctxPlaty, {
  type: 'bar',
  data: {
    labels: ['18', '19', '20', '21', '22', '23', '24'],
    datasets: [{
      label: 'Frequência',
      data: [10, 12, 14, 15, 14, 12, 10],
      borderWidth: 1,
      barPercentage: 1.0,
      categoryPercentage: 1.0
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Distribuição Platicúrtica'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

ctxBimodal = document.getElementById('bimodalChart');
new Chart(ctxBimodal, {
  type: 'bar',
  data: {
    labels: ['0-2s', '2-4s', '4-6s', '6-8s', '8-10s', '10-12s'],
    datasets: [{
      label: 'Frequência',
      data: [12, 18, 5, 4, 16, 20],
      borderWidth: 1,
      barPercentage: 1.0,
      categoryPercentage: 1.0
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Distribuição Bimodal'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

ctxUniform = document.getElementById('uniformChart');
new Chart(ctxUniform, {
  type: 'bar',
  data: {
    labels: ['1-10', '11-20', '21-30', '31-40', '41-50'],
    datasets: [{
      label: 'Frequência',
      data: [10, 10, 10, 10, 10],
      borderWidth: 1,
      barPercentage: 1.0,
      categoryPercentage: 1.0
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Distribuição Uniforme'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});