# Tipos de Dados: Qualitativos vs. Quantitativos

## O que um erro de classificação pode custar?

Em uma análise recente, a equipe da startup de meditação detecta um padrão curioso: usuários que escolhem o “modo escuro” do app tendem a usar mais funcionalidades. Animados, os desenvolvedores propõem uma mudança drástica: tornar o modo escuro o padrão para todos.

Mas aí alguém pergunta:  
*— Esse dado é numérico? Como foi analisado?*

Silêncio.

A equipe havia tratado a **cor da interface** como se fosse um número — aplicando cálculos de média e correlação que **não fazem sentido para esse tipo de dado**. A decisão, por pouco, **não foi baseada em uma análise estatística completamente equivocada**.

Esse erro nasce de algo simples, mas essencial: **não entender a diferença entre dados qualitativos e quantitativos.**

---

## Por que essa distinção é tão importante?

Antes de fazer qualquer análise estatística — calcular médias, montar gráficos ou aplicar testes — precisamos saber: **que tipo de dado temos em mãos?**

Afinal, **nem todo dado pode ser somado, ordenado ou colocado em um gráfico de dispersão.**

!!! info "Definição"
    **Dados qualitativos (ou categóricos)** são aqueles que expressam uma qualidade, característica ou categoria. Não têm valor numérico, mesmo que às vezes sejam representados por números.

    **Dados quantitativos** são aqueles que expressam quantidades. São numéricos e permitem operações matemáticas, como soma e média.

---

## Exemplos práticos do app de meditação

| Variável                                  | Tipo de Dado         | Justificativa                                           |
|-------------------------------------------|----------------------|----------------------------------------------------------|
| Modo preferido de interface (claro/escuro)| Qualitativo nominal  | São categorias sem ordem natural                        |
| Grau de satisfação (ruim, médio, bom)     | Qualitativo ordinal  | São categorias **com** ordem                           |
| Tempo médio de meditação (em minutos)     | Quantitativo contínuo| Pode assumir qualquer valor dentro de um intervalo      |
| Número de sessões por semana              | Quantitativo discreto| São contagens (valores inteiros)                        |

!!! tip "Dica"
    - Se você **não pode somar** os dados, provavelmente são **qualitativos**.
    - Se os dados são **contagens ou medidas**, provavelmente são **quantitativos**.
    - Se há **ordem**, mas não números, são **qualitativos ordinais**.

---

## Subtipos: nem todo qualitativo ou quantitativo é igual

### Qualitativos:
- **Nominais:** Sem ordem natural (ex: tipo de plano: básico, premium).
- **Ordinais:** Com ordem, mas sem distâncias precisas (ex: nível de estresse: baixo, médio, alto).

### Quantitativos:
- **Discretos:** Contagens exatas (ex: número de sessões).
- **Contínuos:** Medidas que podem ter casas decimais (ex: tempo de meditação, frequência cardíaca).

---

## O perigo de analisar errado

Um desenvolvedor quer saber qual **modo de interface** (claro ou escuro) está associado a maior tempo de uso. Ele codifica:

- Modo claro = 1  
- Modo escuro = 2

E calcula a média. Resultado: **1,6**.

Mas... **o que significa 1,6?** Nada.

!!! danger "Perigo"
    **Atribuir números arbitrários a categorias qualitativas e usá-los em cálculos pode gerar resultados sem sentido.** Isso é uma armadilha comum — e perigosa.

A análise correta seria comparar os **tempos de uso médios entre os grupos**, não somar os códigos.

---

## E os gráficos?

Cada tipo de dado tem formas mais apropriadas de visualização:

| Tipo de Dado         | Gráficos Sugeridos                          |
|----------------------|---------------------------------------------|
| Qualitativo nominal  | Gráfico de barras, gráfico de pizza         |
| Qualitativo ordinal  | Gráfico de barras ordenado, mapa de calor   |
| Quantitativo discreto| Histograma, gráfico de colunas              |
| Quantitativo contínuo| Histograma, gráfico de linha, dispersão     |

---

## Retomando o erro da equipe

Agora ficou claro: o “modo escuro” é uma variável **qualitativa nominal**.  
Não faz sentido calcular a média entre categorias como se fossem números.  
A análise correta seria comparar a **distribuição do tempo de uso entre os grupos**, usando **boxplots** ou **médias por grupo**, com testes adequados.

A mudança de interface, se viesse daquele erro, teria sido baseada em um dado **mal classificado** — e a consequência poderia ser uma **queda no engajamento**, não o aumento esperado.

---

## O que aprendemos?

- **Qualitativos** descrevem categorias; **quantitativos**, quantidades.
- Cada tipo de dado exige **tratamento estatístico específico**.
- Subtipos (nominal, ordinal, discreto, contínuo) ajudam a afinar a análise.
- Classificar errado pode invalidar toda uma conclusão.
- **Entender os tipos de dados é o primeiro passo de qualquer análise estatística responsável.**

---

## Para explorar mais

- 📺 **Vídeo:** [Tipos de Variáveis – Canal do Estatística com o Diego](https://www.youtube.com/watch?v=rWi7w_RB1Y8)
- 📄 **Artigo:** [Tipos de dados em Estatística – Blog Khan Academy Brasil](https://pt.khanacademy.org/math/statistics-probability/displaying-describing-data)
- 📖 **Post:** [Dados qualitativos vs. quantitativos – Blog Biostats Brasil](https://biostatsbrasil.com.br/dados-qualitativos-e-quantitativos/)

Esses materiais trazem exemplos visuais e explicações diretas — ideais para consolidar esse conteúdo na prática.