# A mediana

!!! success  "Objetivos de Aprendizagem"

    Ao final desta seção, você será capaz de:

    - Calcular a mediana de um conjunto de dados ordenados.
    - Interpretar a mediana como uma medida de posição central.
    - Entender por que a mediana é resistente a valores extremos.
    - Reconhecer situações em que a mediana é mais apropriada que a média.

!!! abstract "Onde Estamos"

    Você já viu que a média é uma forma comum de representar o comportamento típico de um grupo de dados. Porém, em muitos casos, ela pode ser **fortemente influenciada por valores extremos**. Agora, vamos conhecer uma alternativa que busca **equilibrar o grupo de outra forma** — apontando o valor **central real** dos dados. Essa medida é a **mediana**.

---

## Cenário
### Quando a média engana, a mediana revela

Imagine uma empresa de tecnologia analisando os salários da equipe técnica para ajustar sua política de remuneração. Veja os salários (em milhares de reais) de 9 colaboradores:

- [3, 3, 4, 5, 6, 6, 7, 8, 60]

A média salarial é:

\[
\bar{x} = \frac{3 + 3 + 4 + 5 + 6 + 6 + 7 + 8 + 60}{9} = \frac{102}{9} \approx 11,3 \text{ mil}
\]

Mas, olhando os dados, percebemos que **oito pessoas ganham até 8 mil**. Apenas uma tem um salário de 60 mil. A média representa bem essa realidade?

---

## Conceito

!!! info "Definição"
    A **mediana** é o valor central de um conjunto de dados **ordenado**. Ela divide os dados em duas partes iguais: **metade dos valores está abaixo (ou igual) a ela, e metade está acima (ou igual)**.

!!! note "Regra de cálculo"
    - Se o número de dados \( n \) for **ímpar**: a mediana é o valor da posição \( \frac{n+1}{2} \).
    - Se \( n \) for **par**: a mediana é a **média dos dois valores centrais**, nas posições \( \frac{n}{2} \) e \( \frac{n}{2} + 1 \).

!!! example "Exemplo com número ímpar"
    Dados: [3, 3, 4, 5, 6, 6, 7, 8, 60]  
    Total de valores: \( n = 9 \) (ímpar)  
    A mediana está na posição \( \frac{9 + 1}{2} = 5 \)  
    **Mediana = 6 mil**

!!! example "Exemplo com número par"
    Dados: [4, 5, 7, 9]  
    Total de valores: \( n = 4 \) (par)  
    A mediana será:  
    \( \frac{5 + 7}{2} = 6 \)

---

## Aplicações e Reflexões

### Como Interpretar a Mediana

A mediana mostra o **centro posicional dos dados**, não o ponto de equilíbrio. No exemplo dos salários, ela indica que **a metade da equipe ganha até 6 mil**, enquanto a outra metade ganha mais que isso. O valor de 60 mil **não afeta** esse ponto central.

### Quando a Mediana Funciona Bem (e quando falha)

!!! warning "Atenção"
    A mediana **não é afetada por outliers**. Isso a torna uma medida **robusta** — ideal para situações onde poucos valores destoantes podem distorcer a percepção geral.

    No exemplo dos salários, a mediana continuaria praticamente igual mesmo que o maior salário fosse 100 mil.

A mediana é mais apropriada quando:

- Há **valores extremos** no conjunto de dados
- A distribuição é **assimétrica**
- Você quer representar uma **experiência comum**, como no caso de **salários, preços ou tempos de espera**

Ela pode não ser ideal quando:

- Você precisa considerar o **valor total agregado**
- Está lidando com dados **simétricos e sem outliers**, onde média e mediana coincidem


### Para Refletir

??? question "Você decidiria uma política salarial com base na média ou na mediana?"
    A mediana mostra o valor que a maioria das pessoas recebe. Já a média pode ser inflada por poucos salários altíssimos. Para políticas que querem refletir a realidade da maior parte dos colaboradores, **a mediana costuma ser mais justa**.

---

## Resumo

!!! abstract "Pontos-Chave"

    - É o valor central de um conjunto de dados ordenados.
    - Divide o grupo em duas partes: metade dos valores está abaixo, metade acima.
    - Não é influenciada por valores extremos (outliers).
    - Representa bem o "valor típico" em distribuições assimétricas.
    - Pode coincidir com a média em dados simétricos.
    - É ideal quando o objetivo é descrever a **experiência comum**.

!!! success  "Checklist de Revisão"

    - Sei calcular a mediana para dados ímpares e pares.
    - Compreendo por que a mediana é resistente a outliers.
    - Identifico situações em que a mediana representa melhor o grupo do que a média.

---

## Conclusão

A mediana é como um espelho da maioria silenciosa. Ela não se deixa influenciar por quem está muito acima ou muito abaixo. Em análises sociais, econômicas ou operacionais, onde **valores extremos são comuns**, confiar na mediana é muitas vezes a decisão mais honesta.

> Quando você quer saber “o que é comum”, pergunte à mediana. Ela não representa o espetáculo, mas o cotidiano.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)

---

