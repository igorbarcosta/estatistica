# A amplitude e desvio médio

!!! success "Onde Estamos"

    Você já entendeu por que é essencial olhar **além da média**. Quando queremos compreender se um conjunto de dados é **homogêneo ou desigual**, **estável ou imprevisível**, precisamos de ferramentas que nos digam **o quanto os valores se afastam do centro**.

    Vamos começar com duas formas intuitivas e fundamentais de medir essa dispersão: a **amplitude** e o **desvio médio**.

---

## Cenário: qual projeto tem maior risco de atrasos?

Imagine duas equipes de desenvolvimento trabalhando em projetos distintos. A gerência quer saber **qual equipe tem um cronograma mais estável**, ou seja, **menos sujeito a variações nos prazos de entrega de funcionalidades**.

Ambas as equipes entregaram 5 tarefas na última semana. Veja os tempos de entrega, em dias:

- **Equipe A**: [4, 4, 5, 5, 6]  
- **Equipe B**: [2, 3, 5, 7, 9]

A média dos dois conjuntos é 5 dias. Mas a **sensação de estabilidade** ao olhar para os dados é bem diferente, não?

---

## Primeira medida: a amplitude

!!! info "Definição"
    A **amplitude** é a medida mais simples de dispersão. Ela mostra **a diferença entre o maior e o menor valor** do conjunto de dados.

!!! note "Fórmula"
    $$
    \text{Amplitude} = \text{valor máximo} - \text{valor mínimo}
    $$

!!! example "Exemplo"
    Equipe A:  
    Máximo = 6, Mínimo = 4 → Amplitude = 6 - 4 = 2 dias

    Equipe B:  
    Máximo = 9, Mínimo = 2 → Amplitude = 9 - 2 = 7 dias

A amplitude mostra que a **Equipe B apresenta uma maior variação** nos prazos. Mesmo com média igual, a estabilidade dos dois grupos é claramente diferente.

!!! warning "Atenção"
    A amplitude considera **apenas os extremos**. Ela ignora como os demais valores estão distribuídos. Um único valor atípico pode inflar a amplitude — mesmo que o restante dos dados esteja concentrado.

---

## Segunda medida: o desvio médio

Para superar as limitações da amplitude, podemos usar uma medida que considera **todos os valores do conjunto**: o **desvio médio**.

Essa medida responde:  
**“Em média, o quanto cada valor se afasta da média do conjunto?”**

!!! info "Definição"
    O **desvio médio** é a média das distâncias (em valor absoluto) entre cada dado e a média do conjunto. Ele mostra **quanto os dados oscilam em torno da média**.

!!! note "Fórmula"
    Dados: \( x_1, x_2, ..., x_n \) com média \( \bar{x} \):

    $$
    \text{Desvio médio} = \frac{1}{n} \sum_{i=1}^{n} |x_i - \bar{x}|
    $$

    Onde \( |x_i - \bar{x}| \) representa o valor absoluto da diferença entre cada dado e a média.

!!! example "Exemplo"
    Equipe A: [4, 4, 5, 5, 6] → Média = 4,8  
    Diferenças absolutas: [0,8; 0,8; 0,2; 0,2; 1,2]  
    
    Desvio médio ≈ \( \frac{0,8 + 0,8 + 0,2 + 0,2 + 1,2}{5} = 0,64 \)

    Equipe B: [2, 3, 5, 7, 9] → Média = 5  
    Diferenças absolutas: [3; 2; 0; 2; 4]  
    
    Desvio médio = \( \frac{3 + 2 + 0 + 2 + 4}{5} = 2,2 \)

Agora temos uma medida mais robusta: **a Equipe B tem um desvio médio maior**, o que indica maior instabilidade nos prazos — mesmo que a média seja a mesma.

---

## Comparando: amplitude vs desvio médio

| Característica          | Amplitude                  | Desvio Médio                          |
|-------------------------|----------------------------|----------------------------------------|
| Usa todos os dados?     | Não (apenas o maior e o menor) | Sim                                    |
| Sensível a extremos?    | Muito                      | Moderadamente                          |
| Fácil de calcular?      | Muito                      | Exige mais passos                      |
| Representa dispersão?   | Sim, mas de forma limitada | Sim, com maior fidelidade              |

??? question "Reflexão: Em que situação a amplitude pode ser útil mesmo com suas limitações?"
    Quando precisamos de **uma visão rápida** sobre o intervalo de variação dos dados, especialmente em **ambientes estáveis** ou com poucos valores. Por exemplo, para definir **limites máximos e mínimos aceitáveis** em um controle de qualidade.

---

## Encerrando: primeiros passos rumo à variabilidade real

Amplitude e desvio médio são duas portas de entrada para entender a **dispersão dos dados**. A primeira é direta e simples; a segunda, mais rica e equilibrada. Ambas ajudam a evitar um erro comum: **assumir que a média conta toda a história**.

> Saber a média é saber onde está o centro. Saber a variação é entender **como os dados respiram ao redor dele**.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)