# Capítulo 2 — Tipos de Variáveis

## Começando pela base

Antes de analisar qualquer conjunto de dados, é preciso saber **com o que estamos lidando**.

Imagine uma planilha com centenas de colunas: idade, nome, cidade, salário, escolaridade, tempo de sono, número de filhos...  
Você não vai tratar o **nome** da mesma forma que o **salário**, nem o **tempo de sono** da mesma forma que o **cidade**.  
Cada variável carrega um tipo de informação diferente — e exige um tratamento específico.

> Saber **que tipo de variável** você tem em mãos é o primeiro passo para qualquer análise estatística séria.

---

## O que é uma variável?

Na estatística, chamamos de **variável** qualquer característica observável ou mensurável de uma unidade de análise (uma pessoa, um produto, um time, um sensor, etc.).

Exemplos de variáveis:

- A idade de um aluno
- O modelo de um carro
- A nota de uma prova
- O número de gols em um jogo
- A cor de um produto

Cada uma dessas variáveis representa um tipo diferente de informação — e será classificada de maneira diferente.

---

## Classificação geral das variáveis

Existem duas grandes categorias de variáveis: **qualitativas** e **quantitativas**.

### Variáveis qualitativas

São aquelas que expressam **categorias, rótulos ou atributos**.  
Não fazem sentido em operações matemáticas — você não soma "vermelho" com "azul".

Exemplos:
- Cor dos olhos
- Gênero
- Estado civil
- Tipo sanguíneo
- Time de futebol

As qualitativas se dividem em:

- **Nominais**: não possuem ordem (ex: cor dos olhos, tipo sanguíneo)
- **Ordinais**: têm uma ordem definida (ex: nível de escolaridade, grau de satisfação)

### Variáveis quantitativas

São aquelas que expressam **quantidades**.  
Permitem operações como somar, subtrair, calcular médias e desvios.

Exemplos:
- Peso
- Altura
- Renda
- Temperatura
- Número de filhos

As quantitativas se dividem em:

- **Discretas**: assumem valores inteiros e contáveis (ex: número de gols)
- **Contínuas**: podem assumir qualquer valor dentro de um intervalo (ex: tempo, altura, temperatura)

---

## Tabela-resumo

| Tipo         | Subtipo   | Exemplos                        | Observações                                |
|--------------|-----------|----------------------------------|---------------------------------------------|
| Qualitativa  | Nominal   | Cor, estado civil, time         | Sem ordem entre os valores                  |
| Qualitativa  | Ordinal   | Escolaridade, grau de dor       | Possui ordem, mas sem distância definida    |
| Quantitativa | Discreta  | Número de filhos, gols marcados | Contável, geralmente número inteiro         |
| Quantitativa | Contínua  | Altura, peso, temperatura       | Pode ter casas decimais, valores fracionados |

---

## Estudo de caso: uma pesquisa mal codificada

Imagine uma pesquisa simples com alunos da sua instituição. Uma das perguntas é:

> Qual seu nível de satisfação com o curso?

As opções são:

- Muito insatisfeito
- Insatisfeito
- Neutro
- Satisfeito
- Muito satisfeito

O estagiário que digitou os dados decidiu fazer assim:

| Resposta original     | Código atribuído |
|-----------------------|------------------|
| Muito insatisfeito    | 1                |
| Insatisfeito          | 2                |
| Neutro                | 3                |
| Satisfeito            | 4                |
| Muito satisfeito      | 5                |

Mais tarde, alguém soma os valores e calcula a média da satisfação. O resultado foi **3,4**.

O relatório então conclui: “**A média de satisfação é 3,4**.”

Mas o que isso quer dizer?

!!! warning "Cuidado: nem todo número é quantitativo"
    A variável "nível de satisfação" é **ordinal**, não quantitativa.  
    Os números representam **ordem**, mas **não têm uma distância definida entre eles**.  
    Calcular a média nesse caso **não é apropriado**, porque não sabemos se a diferença entre “neutro” e “satisfeito” é igual à diferença entre “insatisfeito” e “neutro”.

Esse tipo de erro é comum — e quase sempre passa despercebido em relatórios e dashboards.

---

## Como o Python interpreta variáveis?

Ao carregar dados com `pandas`, o Python faz uma inferência automática do tipo de dado:

```python
import pandas as pd

df = pd.DataFrame({
    'sexo': ['M', 'F', 'F', 'M'],
    'idade': [22, 23, 21, 20],
    'satisfacao': [1, 2, 5, 4]
})

df.dtypes
```

Saída:
```
sexo          object
idade          int64
satisfacao     int64
dtype: objec
```

A coluna satisfacao aparece como número (int64) — mas você agora sabe que ela é, na verdade, uma variável ordinal.

!!! note "O código vê tipo. O analista vê sentido." 
    O Python reconhece o tipo de dado, mas não reconhece o significado estatístico.
    Quem precisa interpretar corretamente é o analista — ou seja, você.

## O que aprendemos neste capítulo
- Variáveis são as colunas da nossa análise: representam características de interesse.
- Saber o tipo de variável é fundamental para escolher os métodos certos de análise.
- Variáveis qualitativas (nominais e ordinais) não devem ser tratadas como números brutos.
- Variáveis quantitativas (discretas e contínuas) permitem operações matemáticas — mas ainda assim exigem contexto.
- Erros conceituais simples, como calcular a média de uma variável ordinal, são mais comuns do que parecem — e afetam decisões reais.

## O que vem a seguir

Agora que você entende como identificar e classificar variáveis, o próximo passo é saber como organizar os dados: montar tabelas de frequência, interpretar distribuições e preparar os dados para visualizações e medidas.