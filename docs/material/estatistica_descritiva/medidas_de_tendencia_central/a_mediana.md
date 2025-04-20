# A mediana

!!! success "Onde Estamos"

    Você já viu que a média é uma forma simples e comum de resumir um conjunto de dados, mas também que ela pode ser **enganosa quando há valores muito extremos**. Agora, vamos conhecer uma alternativa poderosa e muitas vezes mais justa: a **mediana**.  

    Ela não tenta “equilibrar” os dados, mas sim **descobrir o valor central real** — aquele que divide o grupo ao meio.

---

## O caso da análise de salários: quem está no meio?

Uma empresa de tecnologia quer entender a situação salarial dos seus colaboradores para ajustar sua política interna. Veja os salários (em milhares de reais) de 9 profissionais da equipe técnica:

```
[3, 3, 4, 5, 6, 6, 7, 8, 60]
```

A média salarial é:

\[
\frac{3 + 3 + 4 + 5 + 6 + 6 + 7 + 8 + 60}{9} = \frac{102}{9} \approx 11,3 \text{ mil}
\]

Mas olhe novamente os dados: **oito pessoas ganham até 8 mil**. A média de 11,3 mil representa bem esse grupo?

---

## A mediana entra em cena

Nesse tipo de situação, em que **um valor extremo distorce a média**, a mediana pode oferecer uma representação mais fiel do “centro real” dos dados.

!!! info "Definição"
    A **mediana** é o valor que ocupa a posição central em um conjunto de dados ordenados. Ela divide os dados em duas metades: metade dos valores está **abaixo ou igual** a ela, e metade está **acima ou igual**.

!!! example "Exemplo"
    Dados ordenados: [3, 3, 4, 5, 6, 6, 7, 8, 60]  
    Como temos 9 valores (número ímpar), a mediana é o **quinto valor** da lista:  
    **Mediana = 6 mil**

    Agora compare:

    - Média ≈ 11,3 mil  
    - Mediana = 6 mil

    A média foi puxada para cima por um único valor muito alto. A mediana ignora essa distorção.

---

## Como calcular a mediana

!!! note "Regra de cálculo"
    Para um conjunto com \( n \) valores **ordenados**:

    - Se \( n \) for ímpar: a mediana é o valor da posição \( \frac{n+1}{2} \)
    - Se \( n \) for par: é a média dos dois valores centrais, nas posições \( \frac{n}{2} \) e \( \frac{n}{2}+1 \)

!!! example "Exemplo com número par de elementos"
    Dados: [4, 5, 7, 9]  
    Como há 4 valores, a mediana será:

    \( \frac{5 + 7}{2} = 6 \)

---

## Por que a mediana é resistente?

A força da mediana está no fato de que **ela depende apenas da ordem dos dados, não dos seus valores exatos**.

!!! tip "Dica"
    A mediana é considerada uma medida **robusta**, porque não se deixa influenciar por valores muito altos ou baixos. Ela é ideal quando o objetivo é capturar o comportamento central **sem ser afetado por extremos**.

---

## Quando preferir a mediana

A mediana é especialmente útil quando:

- Os dados têm **valores extremos (outliers)**  
- A distribuição dos dados é **assimétrica**  
- Você quer representar a **experiência de uma pessoa comum**, como no caso de **salários, tempos de espera ou preços**

??? question "Reflexão: Em uma empresa com poucos salários altíssimos e muitos salários baixos, qual medida representa melhor a realidade da maioria?"
    A mediana. A média seria elevada pelos salários altíssimos, dando a impressão de que “todos ganham bem”, quando na verdade a maioria pode estar ganhando muito menos que esse valor.

---

## E se todos os valores forem iguais?

Nesse caso, não há mistério: a média e a mediana coincidem. Isso mostra que **quando os dados são simétricos e uniformes, ambas as medidas contam a mesma história**. Mas basta um único valor destoante para que **a média mude e a mediana permaneça**.

---

## Encerrando: a mediana como espelho da maioria

A mediana não tenta fazer média com ninguém. Ela simplesmente aponta: *“Aqui está o valor que separa a metade superior da metade inferior.”* Simples, direto e, muitas vezes, mais justo.

> A mediana não se deixa influenciar por extremos. Em muitos casos, é ela quem melhor revela o que é comum, não o que é espetacular.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)
