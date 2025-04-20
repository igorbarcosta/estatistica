# Quartis, decis e percentis

!!! success "Onde estamos"

    Já sabemos que pensar em **posição** significa observar **onde um valor se encontra dentro do conjunto de dados**. Agora vamos explorar três ferramentas que fazem exatamente isso — de forma estruturada e comparável:

    - **Quartis**  
    - **Decis**  
    - **Percentis**

    Essas medidas nos ajudam a **dividir uma distribuição em partes iguais** e dizer, por exemplo, se um valor está entre os 25% mais baixos, entre os 10% do topo ou na média do grupo.

---

## O problema: como interpretar uma pontuação sem um padrão?

Imagine que você é responsável por uma plataforma de cursos. Um aluno acessa seu desempenho e vê:

> “Você está no **percentil 82** da turma.”

O que isso quer dizer?

Quer dizer que **ele foi melhor que 82% dos demais**.

Esse tipo de informação não depende apenas da nota absoluta. Depende de **como os dados estão distribuídos**, e de **qual fatia da distribuição um valor ocupa**.

É isso que quartis, decis e percentis fazem: **transformam valores em posições comparativas**.

---

## Quartis: dividindo os dados em 4 partes

!!! info "Definição"
    **Quartis** são valores que dividem um conjunto de dados ordenados em **quatro partes iguais**, cada uma com 25% dos dados.

- **Q1 (1º quartil)**: 25% dos dados estão **abaixo ou iguais** a ele  
- **Q2 (2º quartil)**: é a **mediana** (50%)  
- **Q3 (3º quartil)**: 75% dos dados estão **abaixo ou iguais** a ele

!!! example "Exemplo"
    Dados ordenados: [2, 4, 5, 6, 7, 8, 9, 11]  
    - Q1 = 4,5  
    - Q2 (mediana) = 6,5  
    - Q3 = 8,5  

Esses valores ajudam a entender **como os dados estão distribuídos ao longo da escala**. Por exemplo:  
Se Q1 está muito distante da mediana, pode haver **concentração ou assimetria** nos dados.

---

## Decis: indo além com mais divisões

!!! info "Definição"
    **Decis** dividem os dados ordenados em **dez partes iguais**, com cada faixa representando **10%** da amostra.

- D1 → 10% abaixo  
- D5 → 50% (mediana)  
- D9 → 90% abaixo  

Esse nível mais detalhado permite avaliações mais granulares, como:

> “Esse usuário está **no décimo superior de engajamento** (D9)”  
> ou  
> “40% dos usuários estão abaixo de D4”

!!! tip "Dica"
    Decis são pouco usados no dia a dia, mas são muito úteis em **análises educacionais, financeiras e demográficas** onde queremos identificar **faixas específicas com maior precisão**.

---

## Percentis: a escala mais fina de posição

!!! info "Definição"
    **Percentis** dividem os dados ordenados em **cem partes iguais**. Cada percentil corresponde a **1% da distribuição**.

- P25 → equivale ao 1º quartil (Q1)  
- P50 → é a mediana  
- P75 → é o 3º quartil (Q3)

Com os percentis, podemos expressar a posição de qualquer valor com precisão:

- **P82** → valor que deixa 82% dos dados abaixo  
- **P95** → 95% dos valores estão abaixo  
- **P99** → ponto de referência para identificar **valores extremos**

!!! example "Exemplo"
    Um aluno no **percentil 90** está entre os **10% melhores** da turma.  
    Um tempo de resposta no **percentil 5** indica que 95% das requisições são **mais lentas** — ou seja, um ótimo desempenho.

---

## Comparando: quartis, decis e percentis

| Medida     | Nº de divisões | Cada parte equivale a... | Precisão               | Aplicações comuns                            |
|------------|----------------|----------------------------|------------------------|-----------------------------------------------|
| Quartis    | 4              | 25%                        | Baixa                  | Boxplots, resumo descritivo                   |
| Decis      | 10             | 10%                        | Média                  | Relatórios educacionais, rankings             |
| Percentis  | 100            | 1%                         | Alta                   | Avaliação comparativa detalhada, benchmarks   |

---

## Por que essas divisões são úteis?

Essas medidas ajudam a:

- **Comparar desempenhos ou resultados com o grupo**
- Identificar **valores atípicos** ou **extremos**
- Avaliar **tendências e assimetrias**
- **Segmentar públicos ou faixas** em análise de dados (como os 20% mais ativos, os 10% com mais retorno etc.)

??? question "Reflexão: Uma nota 7 em uma prova é sempre boa?"
    Depende.  
    - Se a maioria tirou entre 4 e 6, ela está acima do Q3 — excelente.  
    - Se a maioria tirou entre 8 e 10, ela pode estar abaixo do Q1.  
    A nota em si **só ganha significado quando comparada à distribuição**. Por isso usamos quartis e percentis.

---

## Fechando: posições que revelam padrões

> Quartis, decis e percentis **não explicam a média, nem a dispersão total**, mas mostram **onde cada valor está em relação ao todo**.

São ferramentas indispensáveis quando o que importa não é *quanto alguém tem*, mas *onde essa pessoa está* — no ranking, na distribuição, no cenário.

**Entender posição é entender contexto.** E, na prática, **contexto é o que transforma dados em decisões inteligentes.**