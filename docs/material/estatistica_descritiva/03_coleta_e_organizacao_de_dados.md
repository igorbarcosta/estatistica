# Capítulo 3 — Coleta e Organização de Dados

## Uma planilha, mil decisões

Imagine que você é contratado para avaliar o atendimento em uma rede de farmácias. No primeiro dia, recebe uma planilha com milhares de linhas: datas, horários, nomes de atendentes, tempos de espera, respostas de clientes, códigos numéricos e abreviações misteriosas.

Seu chefe pergunta:

> “Consegue me entregar um resumo disso até amanhã?”

A tentação pode ser abrir o Excel, gerar um gráfico qualquer e apresentar algo “bonitinho”.

Mas a verdade é que **sem organização**, os dados não dizem nada. Ou pior: **podem dizer o que você quiser ouvir**.

A coleta e a organização dos dados são o **ponto zero da análise estatística**.  
Tudo o que você fizer depois depende das escolhas que fizer aqui.

---

## De onde vêm os dados?

Dados podem ser coletados de diferentes formas — e cada fonte exige atenção:

- **Observação direta**: sensores, medições manuais, contagens em campo.
- **Questionários e pesquisas**: formulários, entrevistas, surveys digitais.
- **Bases públicas**: dados abertos do IBGE, TSE, INEP, DATASUS, etc.
- **Registros automáticos**: sistemas internos, logs de uso, APIs.

!!! warning "Dado não é sinônimo de verdade"
    Toda base de dados tem uma história: quem coletou, por quê, com qual objetivo?  
    Desconhecer essa origem é o primeiro passo para interpretações equivocadas.

---

## Como organizar variáveis categóricas: frequência absoluta e relativa

Suponha que você aplique uma pesquisa com a pergunta:

> “Qual é o seu meio de transporte mais utilizado para vir à faculdade?”

Com 50 respostas, você tem os seguintes resultados brutos:

`['ônibus', 'carro', 'ônibus', 'ônibus', 'bicicleta', 'carro', 'ônibus', 'a pé', ...]`

Você organiza os dados numa **tabela de frequência**:

| Meio de transporte | Frequência (abs.) | Frequência relativa |
|--------------------|-------------------|----------------------|
| Ônibus             | 24                | 0,48                 |
| Carro              | 12                | 0,24                 |
| Bicicleta          | 8                 | 0,16                 |
| A pé               | 6                 | 0,12                 |
| **Total**          | **50**            | **1,00**             |

- A **frequência absoluta** é o número de vezes que a categoria aparece.
- A **frequência relativa** é a proporção em relação ao total de respostas.

!!! tip "Proporções comparam melhor que contagens"
    A frequência relativa permite comparar populações de tamanhos diferentes — algo muito útil em pesquisas.

---

## Como organizar variáveis numéricas: intervalos e frequência acumulada

Agora imagine que você mediu o **tempo de espera** (em minutos) de 40 clientes na fila do atendimento. Como são dados contínuos, você decide **agrupar em intervalos**:

| Tempo de espera (min) | Freq. absoluta | Freq. relativa | Freq. acumulada |
|------------------------|----------------|----------------|------------------|
| 0 a 5                  | 4              | 0,10           | 4                |
| 5 a 10                 | 12             | 0,30           | 16               |
| 10 a 15                | 14             | 0,35           | 30               |
| 15 a 20                | 7              | 0,18           | 37               |
| 20 a 25                | 3              | 0,07           | 40               |
| **Total**              | **40**         | **1,00**       | **—**            |

- A **frequência acumulada** mostra o total de observações **até o final de cada intervalo**.
- É útil para responder perguntas como:  
  “Quantos clientes foram atendidos em até 15 minutos?” → 30

!!! note "Frequência acumulada responde perguntas práticas"
    Em filas, salários, tempos de atendimento ou notas, queremos saber **quantas pessoas ficaram abaixo de um certo valor**.  
    A frequência acumulada **dá essa resposta direto** — sem gráficos nem fórmulas.

---

## Estudo de caso: uma fila, uma falha e um relatório enganoso

Uma empresa queria avaliar o desempenho do novo sistema de agendamento digital.  
O gerente exibiu um gráfico em uma reunião com a seguinte afirmação:

> “Nosso tempo médio de espera caiu para 11 minutos. Estamos muito bem.”

Mas um funcionário pediu para ver os dados organizados. Com a tabela completa em mãos, percebeu que:

- 70% dos clientes esperaram **menos de 15 minutos**.
- Mas **10%** dos clientes esperaram **mais de 1 hora** — sem direito a reagendamento.

Esses **10% extremos puxaram a média para cima**.  
E como o relatório **não mostrava frequência acumulada**, ninguém percebeu **quantas pessoas foram afetadas de fato**.

!!! warning "Médias e gráficos sem tabela escondem desigualdades"
    A média de 11 minutos pode parecer boa, mas **esconde a experiência de quem ficou 1h na fila**.  
    Uma simples tabela com a frequência acumulada **teria mudado a conversa** naquela reunião.

---

## Fazendo isso no Python

Com `pandas`, você pode construir tabelas de frequência assim:

```python
import pandas as pd

dados = [3, 4, 6, 8, 9, 11, 13, 14, 15, 18, 22, 24, 25, 26, 28]
df = pd.DataFrame({'espera': dados})

# Definindo os intervalos
faixas = pd.cut(df['espera'], bins=[0, 5, 10, 15, 20, 25, 30])
frequencia = faixas.value_counts().sort_index()

# Frequência acumulada
frequencia_acumulada = frequencia.cumsum()

# Frequência relativa
frequencia_relativa = frequencia / frequencia.sum()

# Exibindo tudo junto
tabela = pd.DataFrame({
    'Frequência': frequencia,
    'Freq. relativa': frequencia_relativa.round(2),
    'Freq. acumulada': frequencia_acumulada
})

print(tabela)
```

!!! tip "Organizar dados no Python é mais rápido do que parece"
    Quando você aprende a usar `pandas`, construir tabelas, agrupar valores e extrair padrões **vira um processo natural e replicável**.

---

## O que aprendemos neste capítulo

- A organização dos dados é **o ponto de partida da análise**.
- Tabelas de frequência **resumem variáveis categóricas e quantitativas**.
- A frequência acumulada é essencial para entender **quantos ficaram abaixo de certos limites**.
- Médias e gráficos bonitos podem esconder padrões importantes — **a tabela bem feita não esconde nada**.
- O Python permite estruturar e explorar dados com agilidade e clareza.

---

## O que vem a seguir

No próximo capítulo, vamos aprender a **representar os dados visualmente**, construindo gráficos informativos e, principalmente, **evitando distorções comuns** que comprometem a comunicação estatística.

> Capítulo 4 — Gráficos Estatísticos: como representar dados sem distorcer a realidade
```

---

Se estiver tudo certo com essa versão, sigo para o **Capítulo 4 — Gráficos Estatísticos**. Deseja que eu continue?