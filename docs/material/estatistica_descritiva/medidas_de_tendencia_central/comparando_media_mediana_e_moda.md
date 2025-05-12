# Comparando média, mediana e moda

!!! success "Objetivos de Aprendizagem"

    Ao final desta seção, você será capaz de:

    * Comparar média, mediana e moda em um mesmo conjunto de dados.
    * Identificar como outliers afetam cada medida central.
    * Escolher a medida mais apropriada para diferentes contextos.
    * Interpretar o que as diferenças entre as medidas revelam sobre a distribuição dos dados.

!!! abstract "Onde Estamos"

    Você já conheceu separadamente as três principais formas de representar o “centro” de um conjunto de dados: **média, mediana e moda**. Cada uma delas captura uma perspectiva diferente do que seria o “valor típico”.

    Agora, é hora de **compará-las diretamente**, entendendo **quando elas coincidem, quando divergem, e como interpretar essas diferenças** no mundo real — especialmente em contextos tecnológicos onde decisões se baseiam em números.

---

## Cenário

### O mesmo conjunto, três leituras diferentes

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
  O valor **6** aparece 3 vezes — é o mais frequente  
  **Moda = 6**

Neste exemplo, todas as medidas estão próximas — a distribuição é **simétrica e concentrada**. Isso indica **homogeneidade nos dados** e um cenário estável.

---

### O impacto de um valor extremo

Agora, vamos alterar apenas um valor para ver como o equilíbrio se quebra:

```
[4, 5, 5, 6, 6, 6, 7, 9, 100]
```

- **Média**:  
  \( \frac{4 + 5 + 5 + 6 + 6 + 6 + 7 + 9 + 100}{9} = \frac{148}{9} \approx 16,44 \)

- **Mediana**: continua sendo o **quinto valor** ordenado: **6**

- **Moda**: ainda é **6**, por ser o valor mais frequente

!!! warning "Atenção"
    Esse exemplo mostra claramente que **a média é sensível a outliers**, enquanto **a mediana e a moda são mais resistentes**. Em situações com dados extremos ou assimétricos, **a média pode distorcer a realidade**.

---

## Comparando em diferentes contextos


### Medida mais adequada

| Situação                                               | Medida mais adequada       | Justificativa                                         |
|--------------------------------------------------------|----------------------------|-------------------------------------------------------|
| Salários em uma empresa com poucos diretores milionários | Mediana                   | A média seria inflada pelos altos salários            |
| Notas de alunos com concentração em um único valor      | Moda                      | Identifica a nota mais comum entre os alunos          |
| Medição de temperatura ambiente ao longo do dia         | Média                     | Dados simétricos e sem grandes variações              |
| Avaliações de produto com notas polarizadas             | Mediana (ou moda com cautela) | A média pode mascarar a polarização                 |

??? question "Existe uma medida central "melhor"?"
    Não existe uma medida única que seja sempre a melhor. Cada uma tem suas **forças e limitações**. O mais importante é considerar:

    - O **tipo de dado** (quantitativo, qualitativo)
    - A **distribuição** (simétrica ou assimétrica)
    - A **presença de outliers**
    - O **objetivo da análise** (descrever, prever, comunicar)

---


### O gráfico escondido atrás dos números

Quando as três medidas centrais são muito diferentes entre si, isso costuma indicar que os dados estão **distorcidos, assimétricos ou polarizados**. É um sinal de alerta: **os números sozinhos não contam tudo**.

!!! tip "Dica"
    Sempre que possível, acompanhe as medidas centrais com um **gráfico de distribuição**. Um histograma ou boxplot pode mostrar claramente a forma dos dados e onde cada medida se posiciona.

---

## Resumo

!!! abstract "Pontos-Chave"

    * Média, mediana e moda são formas diferentes de resumir o centro dos dados.
    * A **média** é influenciada por todos os valores — inclusive os extremos.
    * A **mediana** representa a posição central e resiste a outliers.
    * A **moda** mostra o valor mais comum e pode ser usada com dados categóricos.
    * Quando as três medidas são próximas, os dados são provavelmente simétricos.
    * Diferenças entre elas indicam **assimetria, dispersão ou concentração** incomum.

---

## Conclusão

- A **média** é útil, mas sensível a extremos  
- A **mediana** é estável e justa em cenários assimétricos  
- A **moda** destaca padrões e preferências dominantes

> Usar apenas uma medida central é como tentar entender uma paisagem olhando por uma fresta. Compará-las — e entender seus significados — permite ver o cenário completo.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)


---