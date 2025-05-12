# A Regra da Multiplicação

!!! objetivos "Objetivos de Aprendizagem"
    - Compreender o que são eventos independentes na prática
    - Calcular a probabilidade da ocorrência conjunta de eventos independentes
    - Aplicar corretamente a **regra da multiplicação**
    - Identificar confusões comuns entre independência e exclusão mútua

!!! onde-estamos "Onde Estamos"
    Já aprendemos a calcular a probabilidade de eventos isolados e da união entre eles. Agora vamos explorar **como calcular a chance de dois eventos acontecerem juntos**, quando **um não afeta o outro** — ou seja, quando os eventos são **independentes**.

---

## Cenário

### “Qual a chance de duas coisas darem certo ao mesmo tempo?”

Você trabalha com testes automatizados de software. Dois sistemas são testados separadamente, com as seguintes informações:

* Sistema A passa no teste com 90% de chance
* Sistema B passa no teste com 95% de chance

O gerente pergunta:

> “E se executarmos os dois ao mesmo tempo? Qual a chance de ambos funcionarem?”

Como os testes são **independentes** — um não interfere no outro —, a chance de ambos funcionarem é simplesmente o produto das probabilidades:

$$
P(\text{A e B}) = P(A) \cdot P(B) = 0{,}9 \cdot 0{,}95 = 0{,}855
$$

Ou seja, 85,5% de chance de sucesso **duplo**.

---

## Explorando o Conceito

### O que são eventos independentes?

!!! info "Definição"

    Dois eventos são **independentes** quando a ocorrência de um **não altera a probabilidade do outro ocorrer**.

    Em termos simples: saber que um evento aconteceu **não muda nada** sobre a chance do outro.


!!! example "Exemplos de independência"
    
    - Jogar dois dados: o resultado de um **não afeta** o outro
    - Sortear uma carta, anotar e depois **devolver ao baralho antes de sortear outra**: o segundo sorteio não depende do primeiro
    - Um cliente clicar em um anúncio hoje e **outro cliente** clicar amanhã: os comportamentos são independentes

---

### A regra da multiplicação para eventos independentes

!!! note "Fórmula"
    $$    P(A \cap B) = P(A) \cdot P(B)
        $$

    Quando os eventos são independentes, a probabilidade de ocorrerem **simultaneamente** é o **produto** das probabilidades individuais.

---

### Exemplo prático

!!! example "Exemplo direto"
    Um dado e uma moeda são lançados:

    - \( A \): “Sair número maior que 4 no dado” → \( P(A) = \frac{2}{6} = \frac{1}{3} \)
    - \( B \): “Sair cara na moeda” → \( P(B) = \frac{1}{2} \)

    Como são experimentos independentes:

    \[
    P(A \cap B) = \frac{1}{3} \cdot \frac{1}{2} = \frac{1}{6}
    \]

---

## Aplicações e Armadilhas

### Independência **não** é a mesma coisa que exclusão mútua

!!! warning "Cuidado: eventos independentes ≠ eventos disjuntos"

    - Eventos **mutuamente exclusivos (disjuntos)**: **não podem** ocorrer ao mesmo tempo.
    Ex: “sair 2” ou “sair 5” em um dado → só um pode acontecer.

    - Eventos **independentes**: podem acontecer juntos, mas **um não interfere no outro**.  
    Ex: “tirar cara na moeda” e “sair 6 no dado”.

    Se dois eventos são disjuntos, a probabilidade de ambos ocorrerem é **zero**.  
    Se são independentes, usamos a multiplicação.

---

### Nem todo par de eventos é independente

!!! danger "A independência deve ser verificada — não assumida"

    Suponha que um aluno é aprovado se tirar nota acima de 7 em duas provas. Se as provas têm o **mesmo conteúdo**, o desempenho em uma pode influenciar a outra.
    Nesse caso, os eventos **não são independentes**.

---

### Repetições de um mesmo experimento

Em muitos casos, usamos a regra da multiplicação para **repetições idênticas de um mesmo experimento**, como:

* Jogar uma moeda 3 vezes:

  $$
  P(\text{3 caras}) = \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
  $$

* Realizar 5 testes de qualidade, cada um com 95% de chance de sucesso:

  $$
  P(\text{todos passam}) = 0{,}95^5 \approx 0{,}77
  $$

!!! tip "Multiplicação de probabilidades em sequências"
    Quando experimentos são repetidos de forma independente, a probabilidade de sucesso total é o **produto das probabilidades individuais**.

---

## Para Refletir

??? question "É possível que dois eventos tenham interseção, mas ainda assim sejam independentes?"
    Sim. Independência **não significa** que os eventos não podem ocorrer juntos. Significa apenas que a **ocorrência de um não muda a chance do outro ocorrer**.

??? question "Como saber se dois eventos são realmente independentes?"
    Às vezes, por lógica (como jogar dois dados). Outras vezes, só é possível verificar com dados ou modelagem.

??? question "Posso aplicar a regra da multiplicação com mais de dois eventos?"
    Sim, desde que **todos** sejam mutuamente independentes.

---

## O que Levamos Daqui

!!! abstract "Resumo dos pontos-chave"
    - Eventos são **independentes** quando um **não influencia** a chance do outro ocorrer
    - A regra da multiplicação vale apenas para eventos independentes:
    $$       P(A \cap B) = P(A) \cdot P(B) $$
      
    - Não confunda independência com exclusão mútua
    - Em repetições de experimentos iguais, a multiplicação de probabilidades é muito útil

!!! success "Checklist de Revisão"
    - Sei identificar quando dois eventos são independentes
    - Sei aplicar a regra da multiplicação corretamente
    - Reconheço quando **não** devo assumir independência
    - Evito confundir eventos independentes com mutuamente exclusivos
