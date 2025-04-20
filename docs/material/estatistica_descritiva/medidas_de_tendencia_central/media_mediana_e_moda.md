# Média, Mediana e Moda

## Quando a “média” mente: um caso real na análise de salários

Imagine o seguinte cenário: uma startup de tecnologia está crescendo rápido e quer divulgar que “paga bem acima da média do mercado”. Para isso, publica um relatório interno com os salários dos seus funcionários: segundo eles, o salário médio na empresa é de R$ 12.000, o que parece excelente — quase o dobro da média nacional no setor.

Mas há um problema oculto. A maior parte dos funcionários, ao verem esse número, se surpreende. A sensação geral é: “não conheço ninguém ganhando isso tudo”. Por quê?

Vamos investigar esse dilema, que não é só comum — é **decisivo** em análises de dados em tecnologia, negócios, saúde e políticas públicas. E, para isso, precisamos de três aliados: **média, mediana e moda**.

---

## Três formas de resumir uma história: o trio da tendência central

No caso da startup, temos uma lista de salários. Mas como resumir *todos* os valores em um só número que represente o grupo?

Esse tipo de resumo se chama **medida de tendência central** — uma forma de expressar onde os dados "tendem" a se concentrar. As três medidas mais comuns são: **média**, **mediana** e **moda**.

### A armadilha da média: quando um só valor distorce a visão

A **média** é provavelmente a medida mais conhecida. Ela é o total dos valores dividido pela quantidade de elementos.

!!! info "Definição"
    A média aritmética de um conjunto de dados é a soma de todos os valores dividida pelo número total de observações.

    $$ \bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n} $$

    Onde:
    
    - \( \bar{x} \) é a média;
    - \( x_1, x_2, \dots, x_n \) são os valores do conjunto;
    - \( n \) é o número de observações.

!!! example "Exemplo"
    Considere os seguintes salários em uma equipe de 9 pessoas:
    
    R$ 3.000, R$ 3.200, R$ 3.500, R$ 3.800, R$ 4.000, R$ 4.200, R$ 4.500, R$ 4.800, R$ 50.000

    A soma total é R$ 81.000.

    $$ \bar{x} = \frac{81.000}{9} = R\$ 9.000 $$

    Parece um bom salário médio, certo? Mas veja: 8 das 9 pessoas ganham abaixo disso. Só uma (talvez o fundador) tem um valor muito alto, que "puxa" a média para cima.

!!! warning "Atenção"
    A média **é sensível a valores extremos (outliers)**. Um único número fora da curva pode distorcer completamente a percepção geral.

### A mediana: o meio do caminho (literalmente)

Se quisermos um valor que represente o "centro" dos dados de forma mais estável, a **mediana** é uma ótima escolha.

!!! info "Definição"
    A mediana é o valor central de um conjunto de dados **ordenados**. Se o número de elementos for ímpar, é o valor do meio. Se for par, é a média dos dois centrais.

!!! example "Exemplo"
    Pegando os mesmos salários e organizando:

    R$ 3.000, R$ 3.200, R$ 3.500, R$ 3.800, **R$ 4.000**, R$ 4.200, R$ 4.500, R$ 4.800, R$ 50.000

    A mediana é o 5º valor: **R$ 4.000**.

    Agora sim, um valor que reflete melhor a maioria dos salários.

!!! tip "Dica"
    A mediana **não se deixa enganar por extremos**. Por isso, é muito usada em renda, tempo de resposta de sistemas e duração de sessões, onde os dados costumam ser assimétricos.

### A moda: o valor mais comum no grupo

Por fim, temos a **moda** — a medida que identifica o valor mais frequente em um conjunto.

!!! info "Definição"
    Moda é o valor que ocorre com maior frequência em um conjunto de dados.

!!! example "Exemplo"
    Suponha os salários:

    R$ 3.000, R$ 3.200, R$ 3.500, R$ 3.500, R$ 3.500, R$ 4.200, R$ 4.500, R$ 4.800, R$ 50.000

    A moda é **R$ 3.500**, pois aparece três vezes — mais do que qualquer outro valor.

!!! warning "Atenção"
    Um conjunto pode ter:
    
    - Uma única moda (unimodal)
    - Duas ou mais modas (bimodal, multimodal)
    - Nenhuma moda (se todos os valores forem únicos)

---

## E se eu escolher a medida errada?

Usar a medida inadequada pode levar a interpretações perigosas.

??? question "Reflexão: Qual seria a consequência de usar a média como única referência de salário?"
    - Muitos funcionários podem se sentir injustiçados, pois a média não reflete sua realidade.
    - Pode mascarar desigualdades internas, gerando descontentamento ou rotatividade.
    - Em processos seletivos, pode atrair candidatos com expectativas irreais.

O mesmo vale para outras áreas:

- Em análise de tempo de carregamento de uma página, a **média** pode ser inflada por poucos casos lentos. A **mediana** oferece uma visão mais estável.
- Em um app de delivery, a **moda** pode indicar o tempo mais frequente de entrega — útil para comunicação com o cliente.

---

## Escolhendo a ferramenta certa para o problema certo

Voltando à startup: ao analisarmos os salários, percebemos que:

- **Média**: R$ 9.000
- **Mediana**: R$ 4.000
- **Moda**: R$ 3.500

Qual representa melhor a realidade da equipe?

Se o objetivo é entender o que a maioria das pessoas está realmente ganhando, **mediana ou moda** são mais representativas. Já a média pode ser usada com cuidado, desde que se reconheça a sua limitação.

Cada medida tem seu lugar. O segredo está em **escolher aquela que responde melhor à pergunta que queremos fazer**.

---

## Fechamento: estatística como bússola, não como bengala

Neste capítulo, vimos que a forma como resumimos os dados pode mudar completamente a narrativa. A **estatística não mente, mas pode ser mal usada**.

Média, mediana e moda são formas de contar a mesma história com lentes diferentes. Saber quando usar cada uma é o que diferencia análises rasas de interpretações inteligentes e éticas.

**Na dúvida, pergunte sempre: “o que eu quero saber de verdade?” — a resposta certa começa por aí.**