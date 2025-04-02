# Capítulo 1 — Introdução à Estatística

## Por que a Estatística é Essencial?

Vivemos cercados por dados. Das estatísticas da pandemia aos algoritmos de recomendação da internet, dos indicadores econômicos aos gráficos do seu aplicativo de saúde, tudo hoje é quantificado, monitorado, medido. Só que — e aqui está o ponto crucial — a presença de números **não significa compreensão**.

A estatística descritiva é o nosso primeiro filtro. Antes de pensar em previsões, modelos ou algoritmos, precisamos olhar para os dados e perguntar:

> “O que está realmente acontecendo aqui?”

Ela serve para isso: **resumir dados de forma inteligível**, **descobrir padrões**, **revelar exceções**, e principalmente, **nos proteger contra conclusões precipitadas**.

---

## O que é Estatística?

Estatística é a ciência que estuda como **coletar**, **organizar**, **analisar**, **interpretar** e **apresentar dados**. Seu papel é transformar a complexidade dos números em **informações úteis**.

Mas estatística também é linguagem. É uma forma de contar histórias — e como toda linguagem, ela pode ser usada com honestidade ou com manipulação.

Você pode usar estatística para entender melhor o mundo…  
Ou para tentar convencer alguém de algo que os dados **não sustentam de verdade**.

!!! tip "Estatística é mais do que conta"
    Saber calcular uma média é útil. Mas mais importante do que o cálculo é saber o que aquela média **significa**, em que contexto ela **faz sentido**, e onde ela **pode enganar**.

---

## Estatística Descritiva × Estatística Inferencial

Antes de avançarmos, é importante entender essa divisão fundamental:

- **Estatística descritiva**: foca em **resumir** os dados que temos.
- **Estatística inferencial**: foca em **tirar conclusões** a partir dos dados observados.

| Estatística Descritiva | Estatística Inferencial |
|------------------------|--------------------------|
| Resume os dados observados | Tira conclusões sobre um grupo maior |
| Usa gráficos, tabelas, médias, desvios etc. | Usa testes de hipóteses, estimativas, modelos probabilísticos |
| Foca no que foi medido | Generaliza para além da amostra |
| Ex: média das idades da turma | Ex: estimar a média das idades dos engenheiros do Brasil |

Ao longo deste módulo, nosso foco será a **estatística descritiva** — ela é a base que sustenta toda análise posterior.

---

## O papel da Estatística Descritiva

A estatística descritiva é aplicada em praticamente todas as áreas do conhecimento:

- Engenharia: controle de qualidade, análise de falhas, otimização de processos.
- Computação: análise de logs, desempenho de algoritmos, ciência de dados.
- Economia e negócios: relatórios de vendas, previsão de demanda, comportamento do consumidor.
- Saúde: evolução de pacientes, eficácia de tratamentos, distribuição de casos.
- Educação: desempenho por disciplina, evasão escolar, comparações entre escolas.

Mais do que calcular números, ela ajuda a **interpretar realidades**. E, sobretudo, a **formular perguntas melhores**.

> Antes de buscar respostas, precisamos aprender a fazer boas perguntas com os dados.

---

## Estudo de Caso Real: A escola que “melhorou” seus resultados

Imagine duas turmas de uma mesma escola.

- **Turma A (ano passado):** 10 alunos fizeram uma prova. A média foi **6,0**.
- **Turma B (este ano):** 10 alunos fizeram a mesma prova. A média foi **6,5**.

A direção comemora: “**A escola melhorou!**”

Mas aqui está o detalhe:

- Na Turma A, **todos os alunos tiraram entre 5 e 7**.
- Na Turma B, **cinco alunos tiraram 10 e cinco tiraram 3**.

A média subiu de 6,0 para 6,5. Mas será que o desempenho geral melhorou?

Se você olhar apenas a média, vai acreditar que sim. Mas a **distribuição dos resultados** mostra outra história: **os alunos estão mais polarizados**, com metade indo muito bem e metade indo muito mal.

!!! warning "A média pode enganar"
    A média esconde a variação entre os alunos. Ela pode sugerir progresso onde há apenas polarização.  
    Em casos assim, a **mediana** ou um **boxplot** contariam uma história bem diferente.

Esse exemplo é simples — e justamente por isso, poderoso.  
A média subiu. Os números parecem melhores. Mas por trás da cortina dos dados, metade da turma está afundando — e ninguém vê.



---

## O uso (e o abuso) da estatística

Um dos usos mais perigosos da estatística é quando ela é empregada apenas para **dar um ar técnico a argumentos frágeis**. É o clássico:

> “Com base nos dados, concluímos que...”

Mas… **quais dados? De onde vieram? Que medidas foram usadas?** E, principalmente, **foram bem escolhidas?**

!!! warning "Cuidado com o verniz de cientificidade"
    Sem o mínimo de criticidade, a estatística pode ser apenas um adorno sofisticado para disfarçar imprecisões ou manipulações.  
    Muitas vezes, ela é usada mais como argumento de autoridade do que como ferramenta de esclarecimento.

Um leitor atento sabe que:

- Médias podem esconder desigualdades;
- Gráficos podem distorcer proporções com pequenos ajustes visuais;
- Termos como “normal”, “típico” ou “acima da média” precisam ser examinados com muito cuidado.

Estatística bem usada revela.  
Estatística mal usada confunde.

E esse curso existe para que você **reconheça a diferença**.

---

## O que você vai aprender neste curso

Ao longo das próximas semanas, você vai aprender a:

- Classificar corretamente os diferentes tipos de variáveis;
- Construir e interpretar gráficos e tabelas;
- Calcular e interpretar medidas como média, mediana, desvio padrão, quartis e correlação;
- Trabalhar com dados reais usando Python (com `pandas`, `matplotlib` e `seaborn`);
- Avaliar se um gráfico é honesto ou manipulador;
- Refletir sobre o papel da estatística na comunicação, na ciência e nas decisões do dia a dia.

!!! tip "Mais do que saber calcular, você vai aprender a pensar"
    A estatística não serve apenas para dar respostas — ela nos ajuda a fazer as **perguntas certas**.  
    E esse é o primeiro passo para tomar decisões mais conscientes, em qualquer área.

---

## O que vem a seguir

No próximo capítulo, vamos explorar os **tipos de variáveis** — qualitativas, quantitativas, discretas, contínuas — e entender como isso influencia todas as etapas da análise.

> Capítulo 2 — Tipos de Variáveis: como identificar, classificar e tratar dados com Python
