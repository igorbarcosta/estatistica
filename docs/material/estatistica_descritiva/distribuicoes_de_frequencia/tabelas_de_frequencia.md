# Tabelas de Frequência: A Arte de Organizar o Caos em Palavras ou Números

Você faz parte de uma equipe de análise de dados de uma grande plataforma de redes sociais. O time está investigando duas questões importantes:

1. **Quantos minutos, em média, os usuários passam por sessão no aplicativo?**
2. **Qual é o principal sentimento dos usuários em relação à nova interface (amor, ódio ou indiferença)?**

Você coleta as respostas e, de repente, se depara com **centenas de respostas textuais e números misturados**. A pergunta que surge é: como transformar isso tudo em algo que ajude sua equipe a tomar decisões?

É nesse cenário que entram as **tabelas de frequência**, tanto para dados **quantitativos** quanto **qualitativos**.

---

## O Que São Tabelas de Frequência (Para Todos os Gostos de Dados)

!!! info "Definição"
    Uma **tabela de frequência** é uma forma de organizar dados em que indicamos **com que frequência** (ou seja, quantas vezes) cada valor ou categoria aparece no conjunto de dados. Pode ser usada tanto para variáveis **qualitativas** quanto **quantitativas**.

A estrutura muda um pouco conforme o **tipo de dado**. Vamos entender como funciona para **cada caso**.

---

## Caso 1: Dados Qualitativos — Quando as Palavras Falam Alto

Você lançou uma pesquisa com a pergunta:

> “Como você descreveria sua reação à nova interface do aplicativo?”

As respostas possíveis eram:

- “Gostei muito”
- “Gostei”
- “Indiferente”
- “Não gostei”
- “Odiei”

Com 1000 respostas, seria um caos tentar entender algo só olhando a lista. A solução? **Contar quantas vezes cada resposta apareceu.**

| Resposta             | Frequência (f) |
|----------------------|----------------|
| Gostei muito         | 240            |
| Gostei               | 310            |
| Indiferente          | 180            |
| Não gostei           | 160            |
| Odiei                | 110            |
| **Total**            | **1000**       |

Podemos ainda acrescentar a **frequência relativa** (proporção em relação ao total) e a **frequência acumulada** (quando a ordem tem sentido, como em níveis de satisfação).

| Resposta             | f   | f (%)  | F (acum.) | F (%) (acum.) |
|----------------------|-----|--------|-----------|----------------|
| Gostei muito         | 240 | 24,0%  | 240       | 24,0%          |
| Gostei               | 310 | 31,0%  | 550       | 55,0%          |
| Indiferente          | 180 | 18,0%  | 730       | 73,0%          |
| Não gostei           | 160 | 16,0%  | 890       | 89,0%          |
| Odiei                | 110 | 11,0%  | 1000      | 100,0%         |

!!! warning "Atenção"
    A **ordem das categorias** em variáveis qualitativas pode ser importante! Nesse exemplo, os sentimentos têm um **grau de intensidade**. Isso nos permite calcular a frequência acumulada. Mas se estivéssemos lidando com **cores favoritas** (azul, vermelho, verde...), a frequência acumulada não faria sentido.

!!! question "Reflexão"
    Se a maioria respondeu "Gostei" ou "Gostei muito", o que isso sugere sobre a interface?  
    **Resposta:** Que a recepção foi majoritariamente positiva (55% dos usuários). A equipe de design pode ficar tranquila — ou otimista.

---

## Caso 2: Dados Quantitativos — Quando os Números Exigem Organização

Agora, imagine que você também coletou o **tempo de uso por sessão (em minutos)** de 500 usuários.

Esses dados são **quantitativos contínuos**, o que exige **agrupar os valores em intervalos de classe**.

| Intervalo (minutos) | Frequência (f) |
|---------------------|----------------|
| 0 ⟼ 5               | 35             |
| 5 ⟼ 10              | 102            |
| 10 ⟼ 15             | 173            |
| 15 ⟼ 20             | 116            |
| 20 ⟼ 25             | 52             |
| 25 ⟼ 30             | 22             |
| **Total**           | **500**        |

Esses intervalos foram definidos com base nos passos clássicos:

1. Determinar mínimo e máximo dos dados.
2. Calcular amplitude total.
3. Decidir o número de classes.
4. Definir a largura das classes.
5. Contar os dados em cada intervalo.

!!! tip "Dica"
    Dados **quantitativos discretos** (como número de cursos feitos por aluno) não precisam de classes. Basta listar os valores possíveis:

| Número de cursos | Frequência |
|------------------|------------|
| 0                | 20         |
| 1                | 55         |
| 2                | 110        |
| 3                | 85         |
| 4                | 40         |

---

## Erros Frequentes: Armadilhas para Evitar

!!! danger "Perigo"
    **Usar tabelas qualitativas para dados quantitativos** (ou vice-versa) pode levar a análises totalmente erradas. Se você agrupa idades em "jovem", "adulto", "idoso" sem critérios consistentes, perde a precisão dos dados numéricos originais.

!!! warning "Atenção"
    **Frequência acumulada em dados sem ordem** (como tipo sanguíneo, gênero, ou cor) não faz sentido e **pode induzir a interpretações absurdas**.

---

## Concluindo: O Valor de Organizar

Vamos lembrar: sua equipe queria entender **como as pessoas usavam o aplicativo** e **o que achavam da nova interface**. Sem as tabelas de frequência, vocês teriam apenas uma **lista confusa de números e palavras**. Com as tabelas, foi possível:

- Saber que 55% dos usuários aprovaram a interface.
- Ver que a maioria das sessões dura entre 10 e 20 minutos.
- Tomar decisões informadas com base em dados bem organizados.

---

## Síntese

- **Tabelas de frequência** organizam dados e facilitam a análise.
- São usadas tanto para variáveis **qualitativas** (categóricas) quanto **quantitativas** (discretas e contínuas).
- A estrutura da tabela muda conforme o tipo de dado, mas o objetivo é sempre o mesmo: **entender padrões e comportamentos**.

---

## Materiais Complementares

- [Khan Academy: Análide de dados categóricos](https://pt.khanacademy.org/math/statistics-probability/analyzing-categorical-data)
- [Khan Academy: Exibição e comparação de dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/displaying-describing-data)

---