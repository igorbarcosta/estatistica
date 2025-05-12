<style>
  #graficoModaCritica {
    max-width: 100%;
    height: 300px;
  }
</style>

# A moda

!!! success "Objetivos de Aprendizagem"

    Ao final desta seção, você será capaz de:

    - Identificar a moda de um conjunto de dados.
    - Reconhecer quando um conjunto é unimodal, bimodal ou amodal.
    - Aplicar a moda a dados numéricos e categóricos.
    - Avaliar quando a moda é uma medida central adequada (ou não).

!!! abstract "Onde Estamos"

    Depois de conhecer a **média**, que busca um ponto de equilíbrio numérico, e a **mediana**, que aponta o valor central da ordenação, é hora de olhar para a terceira peça desse quebra-cabeça: a **moda**.

    Diferente das anteriores, a moda **não calcula nem divide** — ela apenas **observa qual valor mais aparece**. Parece simples demais? Pois é justamente por isso que ela pode ser tão reveladora em certos contextos.

---

## Cenário
### O dilema do suporte técnico: por onde começar?

Imagine uma empresa de tecnologia que oferece suporte a clientes via chat. Ao final de cada atendimento, o cliente classifica sua experiência com uma nota de 1 a 5 estrelas.

A equipe quer entender:  
**“Qual é a nota que mais representa a avaliação dos nossos usuários?”**

Eles coletam os seguintes dados de 20 atendimentos:

```
[5, 4, 5, 3, 5, 2, 5, 3, 4, 1, 5, 3, 4, 5, 2, 5, 5, 3, 4, 5]
```

Nesse mar de números, a média pode dizer algo, a mediana outro… Mas o que salta aos olhos é a quantidade de vezes que o número **5** aparece.

---

## Conceito de moda

!!! info "Definição"
    A **moda** é o valor que **ocorre com maior frequência** em um conjunto de dados. Ela representa o **valor mais comum**, o que aparece mais vezes.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


!!! example "Exemplo"
        Dados: [5, 4, 5, 3, 5, 2, 5, 3, 4, 1, 5, 3, 4, 5, 2, 5, 5, 3, 4, 5]

    Contagem:

    - 5: aparece **9 vezes**  
    - 4: 3 vezes  
    - 3: 3 vezes  
    - 2: 2 vezes  
    - 1: 1 vez

    **Moda = 5** (nota mais comum)

    Veja a distribuição das notas no gráfico abaixo:
    
    <canvas id="graficoModa"></canvas>


Neste caso, a moda indica de forma clara: a maioria dos clientes deu **5 estrelas** para o atendimento.

---

## Aplicações e Reflexões

### Como Interpretar a Moda

A moda tem um comportamento peculiar entre as medidas centrais:

- Pode **não existir**, se todos os valores forem diferentes  
- Pode haver **mais de uma moda**, se múltiplos valores tiverem a mesma frequência máxima (bimodal, multimodal)  
- Pode ser usada tanto com **dados numéricos** quanto com **dados categóricos**

!!! example "Exemplo com dados qualitativos"
    Preferência de cores em um aplicativo:

        ["azul", "verde", "azul", "vermelho", "azul", "verde"]

    Contagem:

    - azul: 3 vezes  
    - verde: 2 vezes  
    - vermelho: 1 vez

    **Moda = "azul"**

    A média e a mediana não se aplicam nesse caso. 

    <small>*A mediana pode ser definida em variáveis ordinais (como notas ‘ruim’, ‘regular’, ‘bom’, ‘ótimo’), mas não em variáveis nominais como cores.*</small>

### Quando a Moda Funciona Bem (e quando falha)

A moda é especialmente útil para:

- **Identificar padrões de comportamento ou consumo**
- **Analisar dados categóricos**, como cores, marcas ou preferências
- Detectar o **valor mais recorrente** em distribuições assimétricas

!!! tip "Dica"
    Em situações como escolha de produtos, resultados de enquetes ou avaliações em escala, a moda **pode ser a medida mais relevante** — pois mostra o que aparece com mais força no coletivo.

Por outro lado, a moda pode ser limitada quando:

- Os dados têm **alta dispersão**
- Ela representa uma **minoria com forte presença**, mas não a maioria
- Há **empates** entre valores pouco representativos

!!! example "A moda pode enganar"
    Imagine as notas de uma turma em uma avaliação:

        [1, 1, 7, 7, 7, 8, 9, 9, 10, 10, 10, 10]

    Contagem:

    - Moda = **10** (ocorre 4 vezes)

    Agora calcule:

    - Média ≈ 7.25  
    - Mediana = 8

    <canvas id="graficoModaCritica"></canvas>

    O que é mais representativo do grupo? A moda (10) está puxada por **uma minoria com alto desempenho**, mas a maior parte dos alunos está entre 7 e 9.

    Neste caso, a **moda enfatiza um grupo menor**, e **pode ocultar** o desempenho típico da maioria. A média e a mediana, aqui, são mais informativas.




### Para Refletir

??? question "Se a moda for um valor extremo, ela ainda representa bem o grupo?"
    Imagine um produto com avaliações majoritárias entre 3 e 4 estrelas, mas várias pessoas deram 1 estrela por insatisfação específica. Se 1 for o valor mais frequente, a moda será 1 — mas será que isso representa bem a percepção geral?

---

## Resumo

!!! abstract "Pontos-Chave"

    - A moda é o valor mais frequente em um conjunto de dados.
    - Pode ser usada com dados numéricos e categóricos.
    - Pode não existir ou ter múltiplas modas.
    - Ignora a distribuição dos demais valores — o que pode ser uma limitação.
    - É muito útil para análises de preferências, padrões de consumo e dados qualitativos.

!!! success "Checklist de Revisão"

    - Sei identificar a moda em dados numéricos e categóricos.
    - Entendo quando há uma única moda, múltiplas ou nenhuma.
    - Reconheço os limites da moda em representar a totalidade dos dados.

---

## Conclusão

Enquanto a média resume e a mediana divide, a moda **captura o que é mais recorrente**. Ela pode parecer simples, mas sua força está justamente nisso: **mostrar aquilo que o grupo mais expressa — seja uma nota, uma opinião, uma cor ou uma escolha.**

> A moda é a voz da repetição. E muitas vezes, o que mais se repete é o que mais importa entender.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)

---

<script src="
https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/3.1.0/chartjs-plugin-annotation.min.js
"></script>

<script>
    ctx = document.getElementById('graficoModa').getContext('2d');
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
        label: 'Frequência',
        data: [1, 2, 3, 3, 9],
        borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
        y: {
            beginAtZero: true,
            precision: 0,
            ticks: {
            stepSize: 1
            }
        }
        },
        plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
            label: (context) => ` ${context.parsed.y} ocorrência(s)`
            }
        }
        }
    }
    });
</script>


<script>
  Chart.register(window['chartjs-plugin-annotation']);

  const ctx = document.getElementById('graficoModaCritica').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Frequência',
        data: [
          { x: 1, y: 2 },
          { x: 7, y: 3 },
          { x: 8, y: 1 },
          { x: 9, y: 2 },
          { x: 10, y: 4 }
        ],
        backgroundColor: function(context) {
          return context.raw.x === 10 ? '#fbc531' : '#dcdcdc';
        },
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 10
      },
      scales: {
        x: {
          type: 'linear',
          min: 0,
          max: 11,
          ticks: {
            stepSize: 1,
            font: {
              size: 14
            }
          },
          title: {
            display: true,
            text: 'Notas',
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
            stepSize: 1,
            font: {
              size: 14
            }
          },
          title: {
            display: true,
            text: 'Frequência',
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw.y} ocorrência(s)`
          }
        },
        annotation: {
          annotations: {
            media: {
              type: 'line',
              borderColor: '#00a8ff',
              borderWidth: 2,
              scaleID: 'x',
              value: 7.25,
              label: {
                content: 'Média ≈ 7.25',
                display: true,
                position: 'start',
                color: '#000',
                font: {
                  weight: 'bold',
                  size: 12
                }
              }
            },
            mediana: {
              type: 'line',
              borderColor: '#e84118',
              borderWidth: 2,
              scaleID: 'x',
              value: 8,
              label: {
                content: 'Mediana = 8',
                display: true,
                position: 'end',
                color: '#000',
                font: {
                  weight: 'bold',
                  size: 12
                }
              }
            }
          }
        }
      }
    }
  });
</script>






