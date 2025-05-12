# A Probabilidade Clássica

!!! objetivos "Objetivos de Aprendizagem"
    - Entender a definição clássica de probabilidade
    - Aplicar corretamente a fórmula em experimentos com espaço amostral finito
    - Evitar erros ao contar eventos e interpretar probabilidades
    - Relacionar o número da probabilidade a uma expectativa prática (ex.: chance, risco)

!!! onde-estamos "Onde Estamos"
    Já sabemos o que é um experimento aleatório, como identificar o espaço amostral, resultados e eventos. Agora, damos o próximo passo: **medir a chance de um evento acontecer**.

---

## Cenário

### Quantas vezes esperamos que algo aconteça?

Voltemos ao nosso exemplo da plataforma de streaming. Suponha que, em um teste interno, 10 usuários abriram o app com uma recomendação personalizada. Apenas 3 clicaram.

A equipe pergunta:

> “Qual é a chance de um novo usuário clicar na recomendação?”

Alguém pode responder:
*“Bom, no teste, 3 de 10 clicaram... então deve ser 30%.”*

Mas... isso é probabilidade? É uma estimativa? É confiável?
Antes de responder, vamos aprender a forma mais básica e estruturada de calcular uma probabilidade: **pela contagem dos casos possíveis e favoráveis**.

---

## Explorando o Conceito

### A definição clássica de probabilidade

Se tivermos um experimento aleatório com um número **finito** de resultados possíveis — e **todos eles igualmente prováveis** — podemos calcular a probabilidade com uma fórmula simples:

!!! note "Fórmula"
    $$     P(E) = \frac{\text{número de casos favoráveis}}{\text{número total de casos possíveis}}
        $$

    
    Onde:
    - \( P(E) \) é a probabilidade do evento \( E \)
    - O numerador é o número de resultados que compõem o evento
    - O denominador é o número total de elementos no espaço amostral
    

!!! example "Exemplo"
    Em um dado comum:

    - Espaço amostral: \( S = \{1, 2, 3, 4, 5, 6\} \)
    - Evento: “Sair número par” = \( E = \{2, 4, 6\} \)
    - Casos favoráveis = 3
    - Casos possíveis = 6

    Então:

    \[
    P(E) = \frac{3}{6} = 0{,}5
    \]

---

### Traduzindo o número: o que significa uma probabilidade?

Uma probabilidade de 0,5 **não quer dizer que o evento vai acontecer na metade das vezes com certeza**, mas que **esperamos, em média, que ocorra em 50% das repetições no longo prazo**.

!!! info "Probabilidade como expectativa"
    A probabilidade expressa uma **expectativa racional**:
    Se repetirmos o experimento muitas vezes, a frequência do evento tende a se aproximar desse valor.

---

## Aplicações e Armadilhas

### Quando não podemos aplicar a fórmula clássica

A fórmula acima só vale quando **todos os resultados do espaço amostral são igualmente prováveis**. Isso nem sempre é verdade.

!!! warning "Nem todo experimento tem resultados igualmente prováveis"
    Jogar um dado viciado, observar o comportamento de usuários com perfis diferentes ou medir o tempo até um atendimento são exemplos em que **a fórmula simples não se aplica diretamente**.

    Nestes casos, usamos outras abordagens — como probabilidade empírica ou modelos probabilísticos mais sofisticados.


---

### Contagem mal feita = probabilidade errada

Um erro comum é **contar mal** os elementos do espaço amostral ou do evento. Veja este exemplo:

!!! example "Exemplo com erro de contagem"
    Uma moeda é lançada duas vezes. Qual a chance de sair **exatamente uma cara**?

    Muitas pessoas pensam:  
    *“Tem dois lançamentos, então as possibilidades são: cara ou coroa, duas opções. Só uma delas tem uma cara.”*

    Mas isso ignora a ordem dos resultados! O espaço amostral real é:

    \[
    S = \{CC, CK, KC, KK\}
    \]

    O evento “exatamente uma cara” tem dois casos favoráveis: CK e KC.

    \[
    P(E) = \frac{2}{4} = 0{,}5
    \]

!!! danger "Contar errado distorce a realidade"
    Um erro na contagem dos casos possíveis ou favoráveis pode gerar probabilidades que **não refletem o comportamento real do experimento**.

---

### Probabilidade como ferramenta para decisão

Voltemos ao exemplo do app: se a probabilidade estimada de clique for 30%, isso pode embasar uma decisão:

* Vale a pena exibir a recomendação para todos os usuários?
* Devemos segmentar só para quem tem histórico semelhante aos que clicaram?
* Podemos testar outro modelo e comparar as probabilidades de clique?

!!! tip "Probabilidade orienta ações — não apenas previsões"
    Use a probabilidade para avaliar **riscos, expectativas e impactos**, não apenas para responder “vai ou não vai acontecer?”.

---

## Para Refletir

??? question "A fórmula clássica sempre funciona?"
    Não. Ela funciona apenas quando todos os resultados do espaço amostral são igualmente prováveis. Em experimentos assimétricos, usamos outras abordagens.

??? question "Se a probabilidade de algo é 0,7, isso quer dizer que vai acontecer 7 em cada 10 vezes?"
    Não exatamente. Quer dizer que **esperamos** que isso ocorra com frequência próxima de 70%, **em muitas repetições**. Em 10 tentativas, pode acontecer 4 ou 10 vezes — e ainda assim não haver contradição.

??? question "Qual a vantagem de expressar um evento com probabilidade em vez de só dizer 'é provável'?"
    A probabilidade é uma **medida objetiva e comparável**, enquanto expressões como “provável” ou “raro” são ambíguas. Com números, podemos tomar decisões mais racionais.

---

## O que Levamos Daqui

!!! abstract "Resumo dos pontos-chave"
    - A probabilidade clássica se baseia na razão entre casos favoráveis e casos possíveis.
    - Só usamos essa definição quando os resultados são igualmente prováveis.
    - Saber contar corretamente é essencial para obter uma probabilidade válida.
    - A probabilidade ajuda a tomar decisões melhores em contextos incertos.

!!! success "Checklist de Revisão"
    - Sei aplicar a fórmula da probabilidade clássica
    - Verifico se os resultados são equiprováveis antes de usá-la
    - Cuido ao contar casos favoráveis e possíveis
    - Entendo que probabilidade não garante o que vai acontecer, mas informa expectativas
