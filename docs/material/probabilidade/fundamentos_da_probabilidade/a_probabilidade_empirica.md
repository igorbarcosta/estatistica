# A Probabilidade Empírica

!!! objetivos "Objetivos de Aprendizagem"
    - Compreender o que é probabilidade empírica e como ela se diferencia da clássica
    - Saber como calcular uma probabilidade com base em dados observados
    - Identificar as limitações e os cuidados ao usar probabilidades empíricas
    - Refletir sobre o papel da experiência e dos dados na estimativa de incertezas

!!! onde-estamos "Onde Estamos"
    Aprendemos a calcular a probabilidade **quando conhecemos todos os resultados possíveis e sabemos que são equiprováveis**. Mas e quando não temos essas informações?
    Agora vamos descobrir como a **experiência** — isto é, os dados observados — pode nos ajudar a estimar probabilidades no mundo real.

---

## Cenário

### “Qual a chance de um aluno faltar amanhã?”

Você é coordenador de um curso universitário e precisa planejar um evento em um dia de aula regular. A dúvida surge:

> “Será que muitos alunos vão faltar amanhã?”

Você poderia pensar em todos os fatores possíveis: clima, calendário, avaliações… mas, no fundo, você **não sabe com certeza**.

Aí alguém sugere:
*"Olha, nos últimos 4 eventos desse tipo, cerca de 20% dos alunos faltaram. Provavelmente será parecido."*

Essa é a essência da **probabilidade empírica**: **estimar a chance de algo acontecer com base em dados anteriores** — e não em regras teóricas.

---

## Explorando o Conceito

### Quando o modelo idealizado não existe

A definição clássica de probabilidade parte do princípio de que:

* O espaço amostral é **conhecido**
* Todos os resultados têm a **mesma chance**

Mas na prática, raramente temos essas garantias. Pense em:

* Quantos usuários vão clicar num botão?
* Quantos clientes vão cancelar o serviço esse mês?
* Qual a chance de um equipamento falhar hoje?

Não temos um “dado equilibrado” para esses problemas. Só temos **histórico**, registros, dados reais. E é sobre isso que se constrói a **probabilidade empírica**.

### A fórmula baseada na experiência

!!! note "Fórmula"
    $$     P(E) = \frac{\text{número de vezes que o evento ocorreu}}{\text{número total de observações}} $$
    

!!! info "Definição"
    A **probabilidade empírica** é uma estimativa da chance de ocorrência de um evento, calculada a partir da **frequência relativa observada** em dados anteriores.

---

### Exemplo: estimando com dados reais

!!! example "Exemplo prático"
    Uma loja registrou os seguintes dados em 100 atendimentos:

    - 73 clientes compraram
    - 27 clientes saíram sem comprar

    Qual a probabilidade empírica de um cliente **comprar**?

    \[
    P(\text{comprar}) = \frac{73}{100} = 0{,}73
    \]

    Isso **não garante** que 73% dos próximos clientes vão comprar, mas indica que essa foi a frequência passada — e pode ser usada como base para estimativa.

---

## Aplicações e Armadilhas

### Quando os dados enganam: amostra pequena ou enviesada

Probabilidades empíricas **dependem da qualidade dos dados**. Se a amostra for pequena ou não representar bem a realidade, a estimativa será fraca ou até enganosa.

!!! warning "Cuidado com conclusões apressadas"
    Observar 2 ou 3 casos e tirar uma conclusão geral é um erro comum. A probabilidade empírica melhora **com mais dados e representatividade**.

### A tentação de tratar a estimativa como verdade absoluta

Outro erro: tratar a probabilidade empírica como se fosse **exata**. Ela é uma **aproximação**, e está sujeita a flutuações — especialmente se o comportamento das pessoas, condições ou contexto mudarem.

!!! danger "Probabilidades empíricas mudam com o tempo"
    Se o cenário muda (ex: nova política de descontos, mudança de clima, novo público), os dados antigos podem não refletir mais a realidade.

---

### Probabilidade empírica ≠ garantia de repetição

!!! tip "Probabilidade empírica é um guia, não uma profecia"
    Ela serve para **tomar decisões com base em evidências**, mas nunca como certeza do que vai ocorrer.

---

## Para Refletir

??? question "Qual é a diferença entre probabilidade clássica e empírica?"
    A clássica se baseia em contagem de casos teóricos igualmente prováveis. A empírica se baseia em dados observados, em frequências reais.

??? question "A probabilidade empírica pode mudar?"
    Sim. Basta termos novos dados. Por isso, ela é especialmente útil em contextos dinâmicos e com coleta contínua de informações.

??? question "E se os dados forem poucos ou muito antigos?"
    A estimativa será fraca ou possivelmente enganosa. Devemos sempre avaliar **a qualidade e a atualidade dos dados** antes de confiar na probabilidade empírica.

---

## O que Levamos Daqui

!!! abstract "Resumo dos pontos-chave"
    - A probabilidade empírica é baseada em dados observados, não em modelos teóricos.
    - Ela é útil quando o espaço amostral ou as chances teóricas são desconhecidas.
    - Sua confiabilidade depende da **quantidade, representatividade e atualidade dos dados**.
    - Ela **não é garantia** do que vai acontecer, mas uma estimativa com base na experiência.

!!! success "Checklist de Revisão"
    - Sei calcular a probabilidade empírica a partir de dados observados
    - Entendo quando usar a abordagem empírica em vez da clássica
    - Reconheço as limitações dessa estimativa e a importância da qualidade dos dados
    - Evito conclusões com base em amostras pequenas ou enviesadas
