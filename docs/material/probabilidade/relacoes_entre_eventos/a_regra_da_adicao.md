# A Regra da Adição

!!! objetivos "Objetivos de Aprendizagem"
    - Compreender a lógica por trás da regra da adição na probabilidade
    - Saber calcular a probabilidade da união de dois eventos
    - Diferenciar entre eventos mutuamente exclusivos e não exclusivos
    - Evitar contagem dupla ao lidar com sobreposição de eventos

!!! onde-estamos "Onde Estamos"
    Já aprendemos a calcular a probabilidade de um evento isolado e seu complementar. Agora vamos entender como lidar com **dois eventos ao mesmo tempo** — especialmente quando queremos saber a chance de **ocorrer pelo menos um deles**.

---

## Cenário

### “Qual a chance de dar certo de algum jeito?”

Imagine que você coordena uma equipe de marketing digital. Dois canais estão sendo testados para atrair clientes:

* Instagram: atrai cerca de 40% dos visitantes
* Google Ads: atrai cerca de 35% dos visitantes

A pergunta é:

> “Qual é a chance de um novo cliente chegar **por pelo menos um dos dois canais**?”

Alguém diz:
*"Ué, soma as duas: 40% + 35% = 75%!"*

Será que podemos **sempre** somar?
Depende. Alguns clientes podem ter chegado **pelos dois canais ao mesmo tempo** — e assim estariam sendo contados duas vezes.

---

## Explorando o Conceito

### A união de dois eventos

O que nos interessa é a probabilidade de ocorrer **pelo menos um dos dois eventos**: $A \cup B$

!!! info "Definição"
    A **união de dois eventos** $A \cup B$ representa a ocorrência de **pelo menos um** dos dois eventos:
    ou $A$, ou $B$, ou ambos.

### Regra geral da adição

!!! note "Fórmula"
    $     P(A \cup B) = P(A) + P(B) - P(A \cap B)
        $

    Onde:

    * $P(A)$: probabilidade do evento $A$
    * $P(B)$: probabilidade do evento $B$
    * $P(A \cap B)$: probabilidade de **ambos os eventos ocorrerem ao mesmo tempo**

---

### Por que subtrair a interseção?

Porque quando somamos $P(A) + P(B)$, estamos **contando duas vezes** os resultados que pertencem a **ambos os eventos**.

!!! example "Exemplo com sobreposição"
    Em uma pesquisa com 100 clientes:

    - 40 usaram o Instagram
    - 35 usaram o Google Ads
    - 15 usaram os dois

    Então:

    \[
    P(A \cup B) = \frac{40}{100} + \frac{35}{100} - \frac{15}{100} = \frac{60}{100} = 0{,}6
    \]

    Ou seja, 60% chegaram por **pelo menos um dos dois canais**.


---

### Caso especial: eventos mutuamente exclusivos

!!! info "Definição"
    Dois eventos são **mutuamente exclusivos** (ou disjuntos) quando **não podem acontecer ao mesmo tempo**.

    Nesse caso, \( P(A \cap B) = 0 \), e a fórmula se simplifica para:

    \[
    P(A \cup B) = P(A) + P(B)
    \]


!!! example "Exemplo de eventos mutuamente exclusivos"
    Sorteamos uma carta de um baralho:

    - \( A \): “sair um Rei”
    - \( B \): “sair um Ás”

    Como uma carta **não pode ser Rei e Ás ao mesmo tempo**, os eventos são disjuntos:

    \[
    P(A \cup B) = \frac{4}{52} + \frac{4}{52} = \frac{8}{52}
    \]

---

## Aplicações e Armadilhas

### Contar a interseção é essencial

Ignorar a interseção leva a **soma inflada** das probabilidades. Isso é especialmente grave em contextos onde as sobreposições são frequentes (clientes em múltiplos canais, sintomas em doenças, etc.).

!!! danger "Somar direto pode superestimar a probabilidade"
    Sempre verifique se os eventos podem ocorrer **juntos**.
    Se puderem, **subtraia a interseção**. Caso contrário, a probabilidade final será maior do que o real.

---

### Eventos que parecem disjuntos... mas não são

!!! warning "Nem sempre o que parece exclusivo é exclusivo"
    
    Exemplo:

    - $A$: “ser funcionário da empresa”
    - $B$: “ser aluno da empresa”

    À primeira vista parecem grupos distintos, mas pode haver bolsistas ou estagiários que se encaixam em **ambos**.

---

## Para Refletir

??? question "Por que subtrair a interseção?"
    Porque ao somar $P(A) + P(B)$, os resultados que pertencem a **ambos os eventos** são contados duas vezes. Subtrair corrige esse excesso.

??? question "Se dois eventos são incompatíveis, a regra muda?"
    Simplesmente se simplifica. Se $A$ e $B$ não podem ocorrer juntos, então $P(A \cap B) = 0$, e a soma direta está correta.

??? question "Posso aplicar essa regra com mais de dois eventos?"
    Sim, mas a fórmula fica mais complexa, com várias subtrações e adições. Por ora, focamos na união de **dois eventos**.

---

## O que Levamos Daqui

!!! abstract "Resumo dos pontos-chave"
    - A probabilidade da **união** de dois eventos é dada por:
    $$       P(A \cup B) = P(A) + P(B) - P(A \cap B)
      $$
    - A subtração da interseção evita a **contagem dupla**
    - Se os eventos são disjuntos, a fórmula se simplifica
    - Identificar corretamente a relação entre os eventos é essencial para evitar erros

!!! success "Checklist de Revisão"
    - Sei aplicar a regra da adição para dois eventos
    - Verifico se há interseção antes de somar
    - Reconheço eventos mutuamente exclusivos
    - Evito superestimar a probabilidade da união
