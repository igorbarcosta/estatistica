# A média

!!! objetivos "Objetivos de Aprendizagem"

    Ao final desta seção, você será capaz de:

    - Calcular a média aritmética de um conjunto de dados.
    - Interpretar o significado da média no contexto de um problema real.
    - Identificar como valores extremos (outliers) afetam a média.
    - Reconhecer situações onde a média é uma medida útil e onde pode ser limitada.

!!! onde-estamos "Onde Estamos"

    Você já viu por que é importante buscar uma medida central — um valor que represente, de forma resumida, o comportamento típico de um grupo de dados. Agora, vamos explorar essas medidas com mais profundidade, começando pela mais conhecida delas: a **média aritmética**.

---

## Cenário
### Quando a média parece ser a resposta perfeita

Considere uma equipe de engenharia de software em uma empresa de tecnologia. A liderança quer entender como está a produtividade da equipe e, para isso, decide acompanhar **quantas tarefas cada pessoa concluiu na última sprint**.

Eles coletam os dados de 10 desenvolvedores:

- 8 deles concluíram entre 8 e 12 tarefas  
- 1 concluiu 2 tarefas (por estar doente)  
- 1 concluiu 26 tarefas (ficou de plantão em um projeto crítico)

A pergunta que surge é: *“Quantas tarefas, em média, cada desenvolvedor concluiu?”*

Nesse caso, a liderança está buscando **um número que represente a produtividade típica da equipe**.

---

## Formalização

!!! info "Definição"
    A **média aritmética** é o valor obtido somando todos os dados e dividindo o total pelo número de observações. Representa o ponto de equilíbrio dos valores numéricos em um conjunto.

!!! note "Fórmula"
    Para um conjunto com \( n \) valores \( x_1, x_2, \dots, x_n \), a média é dada por:

    $$
    \bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}
    $$

    Onde:

    - \( \bar{x} \): média aritmética
    - \( x_i \): cada valor individual
    - \( n \): número total de valores

!!! example "Exemplo"
    Usando os dados da equipe de engenharia: [10, 9, 11, 8, 10, 9, 12, 8, 2, 26]

    1. **Soma dos valores:** \(10 + 9 + 11 + 8 + 10 + 9 + 12 + 8 + 2 + 26 = 105\)
    2. **Número de observações (desenvolvedores):** \(n = 10\)
    3. **Cálculo da Média:**
        $$
        \bar{x} = \frac{105}{10} = 10,5
        $$
    A média de tarefas concluídas por desenvolvedor nesta sprint é de 10,5 tarefas.

---

## Aplicações e Reflexões

### Como Interpretar a Média

A média de 10,5 tarefas sugere que, "em equilíbrio", cada membro da equipe produziu essa quantidade. Porém, será que esse número representa bem a experiência típica de um desenvolvedor?

A maioria dos desenvolvedores concluiu entre 8 e 12 tarefas, mas temos:

- O valor **2** (por doença) puxando a média para baixo  
- O valor **26** (plantonista) puxando a média para cima

Esses casos são chamados **valores extremos (outliers)** e têm grande impacto sobre a média.

###  Quando a Média Funciona Bem (e quando falha)

!!! warning "Atenção"
    A média aritmética é **muito sensível a valores extremos**. Poucas observações diferentes do restante podem distorcer significativamente a média, levando a interpretações incorretas sobre o grupo.

A média é especialmente útil quando os dados:

- São relativamente **simétricos**
- Não apresentam muitos **valores extremos**
- Precisam refletir um "ponto de equilíbrio" como orçamentos ou desempenho médio

Contudo, pode não ser ideal quando:

- Dados têm fortes **distorções ou assimetrias**
- A intenção é capturar a **experiência individual típica**

### Para Refletir

??? question "Você contrataria alguém baseado apenas na média da produtividade da equipe?"
    Talvez não. A média pode indicar boa produtividade geral, mas esconde diferenças significativas entre membros da equipe. Para decisões mais justas ou precisas, outras medidas precisam ser consideradas.

---

## Resumo

!!! abstract "Pontos-Chave"

    - Média é calculada somando os valores e dividindo pelo total de observações.
    - Representa o "ponto de equilíbrio" dos dados.
    - É sensível a valores extremos (outliers).
    - Adequada para dados simétricos e sem muitos valores extremos.

!!! success "Checklist de Revisão"

    - Consigo calcular facilmente a média de um conjunto simples de dados.
    - Entendo claramente como valores extremos afetam a média.
    - Sei reconhecer quando a média é adequada ou limitada para analisar os dados.

--- 

## Conclusão

A média é um bom começo para entender um grupo de dados, desde que saibamos interpretar seus limites. Fora do contexto, pode esconder complexidades importantes da realidade observada.

> Toda média precisa de contexto. Sem ele, pode ser apenas um número bonito que encobre uma realidade mais complexa.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)

