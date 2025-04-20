# A média

!!! success "Onde Estamos"

    Você já viu por que é importante buscar uma medida central — um valor que represente, de forma resumida, o comportamento típico de um grupo de dados. Agora, vamos começar a explorar essas medidas com mais profundidade. A primeira delas, e talvez a mais conhecida, é a **média aritmética**.

---

## Quando a média parece ser a resposta perfeita

Considere uma equipe de engenharia de software em uma empresa de tecnologia. A liderança quer entender como está a produtividade da equipe e, para isso, decide acompanhar **quantas tarefas cada pessoa concluiu na última sprint**.

Eles coletam os dados de 10 desenvolvedores:

- 8 deles concluíram entre 8 e 12 tarefas  
- 1 concluiu 2 tarefas (por estar doente)  
- 1 concluiu 26 tarefas (ficou de plantão em um projeto crítico)

A pergunta que surge é: *“Quantas tarefas, em média, cada desenvolvedor concluiu?”*

Nesse caso, a liderança está buscando **um número que represente a produtividade típica da equipe**.

---

## O cálculo da média

!!! info "Definição"
    A **média aritmética** é o valor obtido somando todos os dados e dividindo o total pelo número de observações. Representa o ponto de equilíbrio dos valores numéricos em um conjunto.

!!! note "Fórmula"
    Para um conjunto com \( n \) valores \( x_1, x_2, \dots, x_n \), a média é dada por:

    $$
    \bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}
    $$

    Onde:

    - \( \bar{x} \): média aritmética
    - \( x_i \): cada valor individual
    - \( n \): número total de valores

!!! example "Exemplo"
    Dados: [10, 9, 11, 8, 10, 9, 12, 8, 2, 26]  
    Soma: 105  
    Número de desenvolvedores: 10  

    Média: \( \frac{105}{10} = 10,5 \) tarefas

A média sugere que a equipe, em geral, entrega 10,5 tarefas por sprint. Mas… será que isso representa bem todos os membros?

---

## A sensibilidade da média a valores extremos

Observe os dados do exemplo anterior. A maior parte da equipe está entre 8 e 12 tarefas. No entanto:

- O valor **2** (de quem esteve doente) puxa a média para baixo  
- O valor **26** (do plantonista) puxa a média para cima

Esses dois casos específicos são chamados de **valores extremos** ou **outliers**. E eles têm um efeito direto sobre a média.

!!! warning "Atenção"
    A média aritmética **é altamente sensível a valores extremos**. Mesmo que apenas uma ou duas observações sejam muito diferentes do restante, elas podem distorcer a média de forma significativa.

Essa distorção pode levar a interpretações erradas sobre o comportamento geral do grupo.

---

## Quando a média é útil (e quando não é)

A média funciona bem quando os dados:

- Estão relativamente **simétricos** (sem muitos extremos)  
- Não têm **valores muito destoantes**  
- São usados em situações que exigem um "ponto de equilíbrio" (como orçamentos, balanços, médias de desempenho consistentes)

Mas ela pode ser problemática quando:

- Há **distorções por casos atípicos**, como vimos  
- Os dados têm **distribuições assimétricas**  
- O público da análise **espera entender uma experiência individual comum**, e não um valor numérico puro

??? question "Reflexão: Você contrataria alguém baseado apenas na média da produtividade da equipe?"
    Talvez não. A média pode indicar que o time está indo bem, mas esconde a variabilidade. Uma pessoa pode estar produzindo o dobro de outra. A média não mostra essa diferença. Para decisões mais justas ou precisas, **outras medidas** precisam entrar na conversa.

---

## Por que ainda usamos tanto a média?

Apesar das limitações, a média continua sendo amplamente usada — e com razão:

- É **simples de calcular e interpretar**
- Permite fazer **comparações rápidas**
- Serve como base para **muitos modelos estatísticos**

O importante é saber quando ela **realmente representa o grupo** — e quando pode estar contando uma história incompleta.

---

## Fechando a conta: a média como ponto de partida, não como resposta final

A média pode ser um ótimo começo para entender um conjunto de dados, desde que saibamos **ler seus limites**. Ela resume, mas não explica tudo. E, especialmente em contextos onde **as experiências individuais variam muito**, confiar apenas na média pode levar a decisões injustas ou ineficazes.

> Toda média tem um contexto. E fora dele, pode ser apenas um número bonito que esconde uma realidade complexa.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)


