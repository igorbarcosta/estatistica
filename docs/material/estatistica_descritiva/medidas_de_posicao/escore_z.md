# O escore-z

!!! success "Onde estamos"

    Você já aprendeu a localizar um valor dentro de um conjunto de dados com **quartis, decis e percentis**, além de visualizar posições com o **boxplot**. Mas e se quisermos ir além da faixa de 0 a 100% e perguntar:

    > **“O quão distante esse valor está da média?”**  
    > **“Em termos de variação, esse valor é comum ou fora do padrão?”**

    É aqui que entra o **escore z** — uma medida que permite **comparar valores diferentes em distribuições diferentes**, usando uma unidade universal: **o desvio padrão**.

---

## O problema: comparações em escalas diferentes

Imagine duas avaliações diferentes em uma empresa de tecnologia:

- Teste técnico: média = 70, desvio padrão = 5  
- Teste de lógica: média = 20, desvio padrão = 4  

Um candidato tirou:

- 78 no teste técnico  
- 26 no teste de lógica

Em qual teste ele se saiu melhor? As escalas são diferentes, os valores são incomparáveis diretamente.

Para resolver isso, usamos o **escore z** — uma forma de **padronizar os valores**, transformando todos para a mesma base.

---

## O que é o escore z?

!!! info "Definição"
    O **escore z** (ou **z-score**) indica **quantos desvios padrão** um valor está **acima ou abaixo da média**.  
    Ele padroniza diferentes distribuições para uma **escala comum**, com média zero e desvio padrão 1.

!!! note "Fórmula"
    $$
    z = \frac{x - \bar{x}}{\sigma}
    $$

    Onde:  
    - \( x \): valor observado  
    - \( \bar{x} \): média da distribuição  
    - \( \sigma \): desvio padrão

O resultado é um número **sem unidade**, que indica **a posição relativa do valor na escala padronizada**.

---

## Interpretando o escore z

- **z = 0** → o valor é exatamente igual à média  
- **z > 0** → o valor está acima da média  
- **z < 0** → o valor está abaixo da média  
- **z = 2** → o valor está **2 desvios padrão acima** da média  
- **z = -1,5** → o valor está **1,5 desvios abaixo** da média

!!! example "Exemplo prático"
    Um tempo de resposta de API foi de 380 ms  
    - Média dos tempos = 300 ms  
    - Desvio padrão = 40 ms

    EsCore z:  
    \( z = \frac{380 - 300}{40} = \frac{80}{40} = 2 \)

    Isso significa que **o tempo foi 2 desvios padrão acima da média** — um tempo **fora do esperado**, mesmo que o número absoluto pareça próximo.

---

## Por que usar escore z?

- Permite **comparar dados em diferentes escalas**  
- Identifica **valores atípicos (outliers)**  
- Ajuda a **avaliar desempenho relativo**  
- Serve como base para **probabilidades em distribuições normais** (em testes estatísticos, por exemplo)

!!! tip "Dica"
    Em uma **distribuição normal**, aproximadamente:
    
    - 68% dos valores têm z entre -1 e 1  
    - 95% entre -2 e 2  
    - 99,7% entre -3 e 3  

    Valores com |z| > 2 geralmente são considerados **atípicos**.

---

## Escore z e comparação entre contextos

!!! example "Comparando desempenho"
    Dois desenvolvedores participaram de desafios diferentes:

    - Desafio A: nota 85, média 70, desvio padrão 5  
    - Desafio B: nota 32, média 20, desvio padrão 4  

    EScore z:
    - Desafio A: \( z = \frac{85 - 70}{5} = 3 \)  
    - Desafio B: \( z = \frac{32 - 20}{4} = 3 \)

    Resultado: em **ambos os contextos**, o desempenho foi **3 desvios padrão acima da média** — ou seja, **excelente**, mesmo com notas e escalas totalmente diferentes.

---

## Quando usar (e quando não usar) escore z

### Use escore z quando:

- As distribuições forem **aproximadamente simétricas ou normais**  
- Você quiser **padronizar dados de origens diferentes**  
- Precisa detectar **valores extremos com precisão estatística**

### Evite usar escore z quando:

- Os dados forem **muito assimétricos** ou com **outliers extremos**, pois o desvio padrão pode ser enganoso  
- A variável não for **numérica e contínua** (como cores ou categorias)

??? question "Reflexão: O escore z muda se os dados forem transformados em outra escala (ex: de 0 a 10 para 0 a 100)?"
    Não. Como o escore z mede **distância relativa em unidades de desvio padrão**, ele permanece o mesmo **após transformações lineares**.  
    Isso reforça sua utilidade para **comparações entre escalas distintas**.

---

## Fechando: a régua universal da estatística

> O escore z é uma **ferramenta de tradução**: transforma qualquer valor em uma **posição relativa**, padronizada e comparável.

Ele responde perguntas como:

- “Esse valor é comum?”  
- “Está acima ou abaixo da média?”  
- “Quão surpreendente ele é?”

Com ele, **a comparação deixa de ser subjetiva e passa a ser quantitativa** — mesmo entre contextos, escalas e unidades diferentes.  
**É a régua invisível que mede o quão distante um valor está da normalidade.**