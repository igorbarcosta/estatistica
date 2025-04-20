# Ogiva: a curva acumulada

!!! success  "Onde estamos"

    Você aprendeu que pensar em **posição** é essencial para interpretar corretamente onde um valor se encontra dentro de um conjunto de dados. Usamos ferramentas como **quartis, decis e percentis** para descrever posições específicas.  

    Agora vamos conhecer um instrumento gráfico que leva essa ideia ainda mais longe: a **ogiva**, ou **curva de frequência acumulada**.

    Com ela, conseguimos **visualizar toda a distribuição de posições** de forma contínua — uma ferramenta poderosa para entender **quanto da amostra está abaixo (ou acima) de determinado valor**.

---

## O cenário: uma prova nacional e a busca por referência

Pense em um exame nacional com milhares de participantes. Os organizadores querem responder perguntas como:

- Quantos candidatos tiraram **nota inferior a 600**?  
- Qual o percentual de alunos **abaixo da média nacional**?  
- A partir de que nota estão os **25% melhores colocados**?

Responder essas perguntas só com média ou mediana não basta.  
Precisamos de uma **visão acumulada** da distribuição — algo que mostre **como os dados se comportam progressivamente ao longo da escala**.

É isso que a **ogiva** fornece.

---

## O que é uma ogiva?

!!! info "Definição"
    A **ogiva** é um **gráfico de linha** que representa a **frequência acumulada** dos dados. Ela mostra **quantos (ou que porcentagem) dos valores estão abaixo (ou acima) de cada ponto da escala**.

Existem dois tipos principais:

- **Ogiva de frequência absoluta acumulada**: mostra o número total de dados até certo ponto  
- **Ogiva de frequência relativa (ou percentual) acumulada**: mostra a proporção acumulada (em %) até certo ponto

---

## Como a ogiva é construída?

1. Ordena-se os dados em **classes crescentes** (faixas de valores)  
2. Calcula-se a **frequência acumulada** para cada classe  
3. Plota-se os pontos (limite superior da classe, frequência acumulada)  
4. Une-se os pontos com uma linha — formando a curva

!!! example "Exemplo simples"
    Suponha as seguintes classes de nota e suas frequências:

    | Nota até | Frequência | Acumulada |
    |----------|------------|-----------|
    | 400      | 5          | 5         |
    | 500      | 12         | 17        |
    | 600      | 18         | 35        |
    | 700      | 10         | 45        |
    | 800      | 5          | 50        |

    A ogiva plota os pontos: (400, 5), (500, 17), (600, 35), (700, 45), (800, 50)  
    A linha curva ligando esses pontos mostra como os dados se acumulam.

    Com ela, é possível **estimar quantos estão abaixo de qualquer nota**.

---

## Visualizando a ogiva

<canvas id="ogivaChart" width="600" height="400"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('ogivaChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [400, 500, 600, 700, 800],
      datasets: [{
        label: 'Frequência acumulada',
        data: [5, 17, 35, 45, 50],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Ogiva de Frequência Acumulada – Notas do Exame'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Acumulado até ${context.label}: ${context.raw} candidatos`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Nota'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Frequência Acumulada'
          },
          ticks: {
            stepSize: 5
          }
        }
      }
    }
  });
</script>

---

## Por que a ogiva é tão útil?

- Permite ver **a proporção de dados abaixo de um valor específico**  
- Facilita a **identificação visual de quartis, decis e percentis**  
- Mostra a **forma da distribuição acumulada**: linear, acelerada, desacelerada  
- Indica se os dados estão mais **concentrados em determinada faixa**

!!! tip "Dica"
    A **inclinação da curva** revela muito:
    
    - Trechos mais íngremes → grande concentração de dados ali  
    - Trechos planos → poucos dados naquela faixa  

---

## Interpretações comuns com a ogiva

- **Onde está a mediana?**  
  Localize o ponto onde a frequência acumulada atinge 50%.

- **Qual o percentil de um valor X?**  
  Veja qual percentual da curva está **abaixo de X**.

- **Qual nota corresponde ao percentil 90?**  
  Encontre o valor onde a curva atinge 90% da frequência acumulada.

??? question "Reflexão: O que a ogiva revela que o histograma não mostra?"
    O histograma mostra **frequência em faixas**, mas não informa diretamente quantos estão **abaixo de um certo valor**.  
    A ogiva, por outro lado, mostra **acumulação progressiva**.  
    Isso a torna ideal para análises de **posição, percentis, e tomadas de decisão baseadas em metas percentuais**.

---

## Fechando: a curva que conecta dados e decisões

> A ogiva transforma tabelas e porcentagens em uma curva que mostra **quem está à frente, quem está atrás e onde você está no caminho**.

Ela é uma ponte entre **os números e suas posições acumuladas**, revelando de forma visual tudo o que os percentis e quartis descrevem numericamente.

**Em situações onde posição relativa importa — e quase sempre importa — a ogiva é a curva certa a seguir.**
