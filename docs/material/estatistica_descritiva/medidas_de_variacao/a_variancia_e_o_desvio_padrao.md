# A variância e o desvio padrão

!!! success "Onde estamos"

    Você já viu que média, mediana e moda nos mostram o “centro” de um conjunto de dados — e que a variação nos conta **como os dados se espalham ao redor desse centro**. Exploramos duas medidas iniciais: a **amplitude**, que observa apenas os extremos, e o **desvio médio**, que calcula distâncias absolutas em torno da média.

    Agora é hora de avançar para duas ferramentas centrais da estatística moderna: a **variância** e o **desvio padrão**. Elas vão além da intuição: **formam a base para a maior parte das análises estatísticas mais robustas**, inclusive em aprendizado de máquina, ciência de dados e controle de qualidade.

---

## Um cenário de instabilidade oculta

Suponha que você seja responsável por monitorar o tempo de carregamento de páginas de um aplicativo de e-commerce. Você coleta os seguintes tempos (em segundos) ao longo de 5 acessos consecutivos:

- **Conjunto 1**: [2, 2, 2, 2, 2]  
- **Conjunto 2**: [1, 2, 2, 2, 5]

Ambos os conjuntos têm **média = 2**.

Mas no segundo caso, há um atraso significativo em um dos acessos. Como capturar essa **instabilidade específica**, que a média não revela?

É aqui que entra a **variância**.

---

## Variância: observando o quadrado das diferenças

!!! info "Definição"
    A **variância** mede o grau de dispersão de um conjunto de dados em torno da média, elevando ao quadrado as diferenças individuais. Isso dá **mais peso a desvios maiores** e evita que valores positivos e negativos se anulem.

!!! note "Fórmula (população)"
    Para uma população com \( n \) valores \( x_1, x_2, \dots, x_n \) e média \( \bar{x} \):

    $$
    \sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2
    $$

    Onde:

    - \( \sigma^2 \): variância populacional
    - \( x_i \): cada valor
    - \( \bar{x} \): média dos dados

!!! example "Exemplo"
    - Conjunto 2: \( [1, 2, 2, 2, 5] \)
    - Média: \( 2 \)
    - Diferenças: \( [-1, 0, 0, 0, 3]  \)
    - Quadrado das diferenças: \( [1, 0, 0, 0, 9] \)    

    $$
    \text{Variância} = \frac{1 + 0 + 0 + 0 + 9}{5} = 2
    $$

A variância do segundo conjunto é 2, enquanto no primeiro (com todos os valores iguais a 2), ela é **zero** — ou seja, **sem nenhuma variação**.

---

## Desvio padrão: trazendo a variância de volta à escala original

A variância é útil, mas seu valor está em **unidades ao quadrado**, o que pode dificultar a interpretação prática. Para resolver isso, usamos o **desvio padrão**, que é simplesmente a **raiz quadrada da variância**.

!!! info "Definição"
    O **desvio padrão** é a medida da dispersão dos dados em torno da média, expressa **na mesma unidade dos dados originais**.

!!! note "Fórmula"
    $$
    \sigma = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2}
    $$

    Onde:
    
    - \( \sigma \): desvio padrão populacional

!!! example "Exemplo"
    Variância = 2  
    Desvio padrão = \( \sqrt{2} \approx 1,41 \)

    Isso significa que, em média, os dados se desviam cerca de 1,41 segundos da média de 2.

---

## Por que usar quadrados? Por que não valores absolutos?

Ótima pergunta. O uso do quadrado tem vantagens estatísticas importantes:

- **Evita cancelamentos** entre desvios positivos e negativos  
- **Valoriza desvios maiores**, dando maior peso a casos extremos  
- Permite **manipulação matemática mais fluida**, especialmente em modelos probabilísticos

Por isso, **variância e desvio padrão são a base de testes estatísticos, modelos de regressão, algoritmos de machine learning e muito mais**.

---

## Um alerta sobre a amostra

Se estivermos analisando **uma amostra** (e não a população completa), usamos uma fórmula ligeiramente diferente: dividimos por \( n - 1 \) em vez de \( n \).

!!! tip "Dica"
    Quando os dados são uma **amostra**:

    - Variância amostral:  
      \( s^2 = \frac{1}{n - 1} \sum (x_i - \bar{x})^2 \)
    - Desvio padrão amostral:  
      \( s = \sqrt{s^2} \)

    Esse ajuste é necessário para **compensar a subestimação da variabilidade real**.

---

## Comparando com outras medidas de dispersão

| Medida           | Usa todos os dados? | Sensível a outliers? | Interpretação direta? |
|------------------|----------------------|------------------------|-------------------------|
| Amplitude        | Não (só extremos)    | Muito                  | Alta                    |
| Desvio médio     | Sim                  | Moderada               | Média dos desvios       |
| Variância        | Sim                  | Alta                   | Pouco direta (ao quadrado) |
| Desvio padrão    | Sim                  | Alta                   | Direta (mesma unidade)  |

??? question "Reflexão: O que o desvio padrão revela que a média não mostra?"
    Ele mostra **a consistência dos dados em torno da média**. Dois conjuntos com mesma média podem ter comportamentos totalmente diferentes — um muito estável, outro com flutuações grandes. O desvio padrão torna essa diferença visível e mensurável.

---

## Fechando: a base da variabilidade moderna

Variância e desvio padrão são mais do que medidas matemáticas. Eles são **ferramentas indispensáveis** para entender comportamento, riscos, instabilidades e incertezas.

> Se a média mostra o que esperar, o desvio padrão revela **o quão surpreso você deve estar com o que pode acontecer**.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)