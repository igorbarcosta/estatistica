# Comparando média, moda e mediana

!!! success "Onde estamos"

    Você já conheceu separadamente as três principais formas de representar o “centro” de um conjunto de dados: **média, mediana e moda**. Cada uma delas captura uma perspectiva diferente do que seria o “valor típico”.

    Agora, é hora de **compará-las diretamente**, entendendo **quando elas coincidem, quando divergem, e como interpretar essas diferenças** no mundo real — especialmente em contextos tecnológicos onde decisões se baseiam em números.

---

## O mesmo conjunto, três leituras diferentes

Imagine que uma plataforma de ensino online quer analisar as notas finais dos alunos em uma disciplina. Os dados coletados são os seguintes:

```
[4, 5, 5, 6, 6, 6, 7, 9, 10]
```

Vamos calcular as três medidas centrais:

- **Média**:  
  \( \frac{4 + 5 + 5 + 6 + 6 + 6 + 7 + 9 + 10}{9} = \frac{58}{9} \approx 6,44 \)

- **Mediana**:  
  Como há 9 valores, a mediana é o **quinto valor** ordenado: **6**

- **Moda**:  
  O valor **6** aparece 3 vezes. É o mais frequente.  
  **Moda = 6**

Neste exemplo, todas as medidas estão próximas — a distribuição é **simétrica e concentrada**. Isso indica **homogeneidade nos dados** e um cenário estável.

Agora, vamos alterar um único valor para ver o que acontece.

---

## O impacto de um valor extremo

Novo conjunto de notas:

```
[4, 5, 5, 6, 6, 6, 7, 9, 100]
```

- **Média**:  
  \( \frac{4 + 5 + 5 + 6 + 6 + 6 + 7 + 9 + 100}{9} = \frac{148}{9} \approx 16,44 \)

- **Mediana**: continua sendo o quinto valor ordenado: **6**

- **Moda**: ainda é **6**, por ser o mais frequente

Veja o que mudou:

- A **média foi drasticamente puxada para cima** por um único valor fora do padrão (100)
- A **mediana e a moda não se alteraram**

!!! warning "Atenção"
    Esse exemplo mostra claramente que **a média é sensível a outliers**, enquanto **a mediana e a moda são mais resistentes**. Em situações com dados extremos ou assimétricos, **a média pode distorcer a realidade**.

---

## Comparando em diferentes contextos

| Situação                                | Melhor medida central                        | Por quê?                                      |
|-----------------------------------------|----------------------------------------------|-----------------------------------------------|
| Salários em uma empresa com poucos diretores milionários | Mediana                                   | A média seria distorcida pelos altos salários |
| Notas de alunos com concentração em um único valor | Moda                                      | Indica onde está a maior frequência           |
| Medição de temperatura ambiente ao longo do dia | Média                                     | Os valores são geralmente simétricos e estáveis |
| Avaliações de produto com polarização (1 e 5 estrelas) | Mediana (ou moda com cautela)            | A média pode enganar; moda pode polarizar     |

??? question "Reflexão: Existe uma medida central ‘melhor’?"
    Não. Cada medida tem suas forças e limitações. A escolha certa depende:

    - Do **tipo de dados** (quantitativos ou qualitativos)
    - Da **presença de valores extremos**
    - Do **objetivo da análise** (representar o que é comum, o que divide o grupo, ou o valor médio em si)

---

## O gráfico escondido atrás dos números

Quando as três medidas centrais são muito diferentes entre si, isso geralmente indica que os dados estão **distorcidos, assimétricos ou polarizados**. É um sinal de alerta: **os números sozinhos não contam tudo**.

!!! tip "Dica"
    Sempre que possível, acompanhe as medidas centrais com um **gráfico de distribuição**. Um histograma ou boxplot pode mostrar claramente se os dados são simétricos, se há outliers, e como as medidas se posicionam no conjunto.

---

## Encerrando: um trio que se complementa

- A **média** é útil, mas sensível a extremos  
- A **mediana** é estável e justa em cenários assimétricos  
- A **moda** destaca padrões e preferências dominantes

> Usar apenas uma medida central é como tentar entender uma paisagem olhando por uma fresta. Compará-las — e entender seus significados — permite ver o cenário completo.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)