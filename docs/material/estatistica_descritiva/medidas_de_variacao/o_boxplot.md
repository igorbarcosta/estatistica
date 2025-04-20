# O boxplot: visualizando a variação

!!! success "Onde estamos"

    Já vimos que entender a **dispersão dos dados** é tão importante quanto conhecer seu valor central. Exploramos várias medidas para isso — da amplitude ao desvio padrão.

    Agora, vamos **unir tudo em uma imagem poderosa**: o **boxplot**, também conhecido como **diagrama de caixa**.

    Esse gráfico simples, mas extremamente expressivo, nos permite **ver de forma clara o centro, a dispersão, a simetria e até possíveis outliers** de um conjunto de dados. Em vez de fazer cálculos, **deixamos os dados falarem visualmente**.

---

## O problema: mil números, pouca clareza

Imagine que você trabalha em uma empresa de tecnologia educacional e está avaliando **quanto tempo os alunos passaram estudando em uma plataforma online** ao longo da semana. São centenas de registros por turma.

Você poderia calcular média, mediana, desvio padrão… mas, com tantos dados, isso ainda **não oferece uma visão rápida e comparativa entre as turmas**.

Como visualizar, de forma compacta, o comportamento de engajamento dos alunos?

---

## A ideia do boxplot: resumir a distribuição em 5 pontos

O **boxplot** resume a distribuição dos dados usando **cinco números-chave**, chamados de **resumo de cinco números**:

1. **Valor mínimo** (sem considerar outliers)  
2. **Primeiro quartil (Q1)**: 25% dos dados estão abaixo  
3. **Mediana (Q2)**: 50% dos dados estão abaixo  
4. **Terceiro quartil (Q3)**: 75% dos dados estão abaixo  
5. **Valor máximo** (sem considerar outliers)

Esses cinco pontos formam a estrutura do gráfico:

- Um **retângulo (caixa)** que vai de Q1 até Q3  
- Uma **linha dentro da caixa** representando a mediana  
- Dois **"bigodes"** (linhas finas) que se estendem até os valores mínimo e máximo (sem outliers)  
- E, se houver, **pontos fora dos bigodes**, indicando **valores atípicos**

<canvas id="boxplotGeneric" width="600" height="300"></canvas>

---

## Como o boxplot revela a variação

!!! example "Exemplo prático"
    Suponha que você está analisando o tempo de estudo semanal de três turmas em uma plataforma de aprendizagem.

    - **Turma A**: engajamento moderado e relativamente concentrado  
    - **Turma B**: comportamento disperso e assimétrico  
    - **Turma C**: tempo de uso baixo e homogêneo

    Resumo dos dados por turma:

    | Turma | Q1 | Mediana | Q3 | Mínimo | Máximo | Outliers  |
    |-------|----|---------|----|--------|--------|-----------|
    | A     | 4  | 6       | 8  | 2      | 10     | 1, 11     |
    | B     | 2  | 5       | 9  | 1      | 12     | 0.5, 13.5 |
    | C     | 1  | 2       | 3  | 1      | 4      | *nenhum*  |

    O boxplot horizontal mostra:

    - **Diferenças de dispersão** entre turmas  
    - **Assimetrias** visíveis  
    - **Presença ou ausência de outliers**  
    - **Medições centrais** bem localizadas por mediana

<canvas id="boxplotChartMultiple" width="800" height="400"></canvas>

---

## Análise comparativa entre turmas

Vamos interpretar o gráfico com base nas três turmas:

- **Turma A**: apresenta um comportamento típico de engajamento equilibrado. A maioria dos alunos estudou entre 4 e 8 horas. Os outliers (1h e 11h) são exceções esperadas em uma distribuição natural. Essa turma representa um padrão estável.

- **Turma B**: é claramente a mais dispersa. Tem alunos que estudaram menos de 1 hora e outros que passaram de 13 horas na plataforma. A caixa (Q1 a Q3) é larga, indicando grande variação entre os 50% centrais. Isso pode representar uma turma heterogênea ou falta de padronização no uso da plataforma.

- **Turma C**: tem uma caixa muito estreita e ausência de outliers. A maioria dos alunos estudou entre 1 e 3 horas, com a mediana próxima ao mínimo. Isso sugere um comportamento de baixo engajamento, mas com padrão bastante consistente.

Essa comparação ilustra a força do boxplot: **em uma única visualização, conseguimos detectar padrões, assimetrias e anomalias que exigiriam muitas estatísticas para serem percebidas**.

---

## Por que usar o boxplot?

!!! tip "Dica"
    O boxplot é extremamente útil quando você:

    - Precisa comparar rapidamente **vários grupos ou categorias**
    - Quer identificar **assimetrias** na distribuição
    - Deseja destacar **outliers** sem que eles distorçam a escala do gráfico
    - Quer combinar, em um único gráfico, **informações sobre centro e dispersão**

Além disso, ele **não depende de suposições sobre a forma da distribuição dos dados**, o que o torna uma ferramenta robusta e exploratória.

---

## Armadilhas e interpretações equivocadas

!!! warning "Atenção"
    Um boxplot não mostra **a quantidade exata de valores**, nem **a forma precisa da curva de distribuição**.  
    Por isso, ele deve ser usado para **comparações gerais e identificação de padrões**, não como substituto de análises mais detalhadas.

??? question "Reflexão: O que significa uma caixa muito estreita em um boxplot?"
    Significa que **a maioria dos dados está concentrada em um intervalo pequeno**. Isso indica **baixa variação** entre os valores próximos ao centro da distribuição.

---

## Fechando: quando ver é entender

Enquanto medidas numéricas exigem interpretação, o boxplot oferece **leitura imediata e intuitiva**. Ele transforma números em forma, estrutura e contraste.

> Em uma única imagem, o boxplot mostra **onde estão os dados, o que é típico, o que é extremo e como tudo se distribui**.  
> É uma ferramenta essencial para quem quer tomar decisões **com base em padrões, não em suposições**.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@sgratzl/chartjs-chart-boxplot"></script>

<script>
  const generic = document.getElementById('boxplotGeneric').getContext('2d');
  new Chart(generic, {
    type: 'boxplot',
    data: {
      labels: ['Exemplo Genérico'],
      datasets: [{
        label: 'Distribuição de Dados',
        backgroundColor: 'rgba(201, 203, 207, 0.5)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1,
        data: [{
          min: 10,
          q1: 25,
          median: 40,
          q3: 60,
          max: 90,
          outliers: [5, 100]
        }]
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Boxplot Genérico (Distribuição Horizontal)'
        }
      },
      scales: {
        x: {
          min: 0,
          max: 110,
          title: {
            display: true,
            text: 'Valor'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Categoria'
          }
        }
      }
    }
  });

  const multiple = document.getElementById('boxplotChartMultiple').getContext('2d');
  new Chart(multiple, {
    type: 'boxplot',
    data: {
      labels: ['Turma A', 'Turma B', 'Turma C'],
      datasets: [{
        label: 'Horas na Plataforma',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
        itemRadius: 2,
        data: [
          {
            min: 2,
            q1: 4,
            median: 6,
            q3: 8,
            max: 10,
            outliers: [1, 11]
          },
          {
            min: 1,
            q1: 2,
            median: 5,
            q3: 9,
            max: 12,
            outliers: [0.5, 13.5]
          },
          {
            min: 1,
            q1: 1,
            median: 2,
            q3: 3,
            max: 4,
            outliers: []
          }
        ]
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Comparação entre Turmas - Tempo de Estudo na Plataforma'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const d = context.raw;
              return [
                `Mínimo: ${d.min}h`,
                `Q1: ${d.q1}h`,
                `Mediana: ${d.median}h`,
                `Q3: ${d.q3}h`,
                `Máximo: ${d.max}h`,
                d.outliers.length > 0 ? `Outliers: ${d.outliers.join(', ')}h` : `Sem outliers`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Horas na Plataforma'
          },
          min: 0,
          max: 15
        },
        y: {
          title: {
            display: false
          }
        }
      }
    }
  });
</script>
