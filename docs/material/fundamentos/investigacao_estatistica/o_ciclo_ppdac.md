# O Ciclo PPDAC: O Caminho da Investigação Estatística

## A pergunta está certa? E os dados? Já estão prontos para análise?

Na startup de meditação, a equipe quer investigar se enviar notificações motivacionais aumenta a frequência de uso do app. Um analista corre para pegar os dados e já começa a montar gráficos. Outro abre o software de análise e inicia testes estatísticos.

Mas então, uma estagiária pergunta:

*— Espera... a gente já definiu exatamente **o que quer descobrir**? Esses dados respondem mesmo à nossa pergunta?*

Esse é um erro clássico: **começar a análise antes de pensar**. E é justamente o que o Ciclo PPDAC foi criado para evitar.

---

## O que é o Ciclo PPDAC?

O Ciclo PPDAC é um modelo estruturado para guiar investigações estatísticas. Ele garante que você **pense antes de analisar**, colete dados apropriados e interprete os resultados com cautela.

!!! info "Definição"
    O **Ciclo PPDAC** representa cinco etapas interligadas da investigação estatística:
    
    - **P**: *Problema*  
    - **P**: *Plano*  
    - **D**: *Dados*  
    - **A**: *Análise*  
    - **C**: *Conclusão*

    ```mermaid
    flowchart LR
        A[Problema] --> B[Plano]
        B --> C[Dados]
        C --> D[Análise]
        D --> E[Conclusão]
        E -. revisar .-> A:::revisar

        classDef default fill:#00b8d433,stroke:#00b8d4; 

    ```

Cada etapa depende da anterior. Um erro em qualquer ponto **contamina os seguintes**. Por isso, seguir o ciclo com disciplina é essencial para uma **investigação estatística sólida.**

---

## 1. **Problema**: a pergunta certa muda tudo

A etapa mais negligenciada — e mais importante.

Aqui, o objetivo é **definir claramente a pergunta de investigação**. Ela precisa ser:

- Delimitada;
- Estatisticamente investigável;
- Baseada em variáveis que podem ser medidas.

!!! example "Exemplo no App"
    *“Usuários que recebem mensagens motivacionais 3 vezes por semana aumentam a frequência de meditação após 1 mês?”*

!!! danger "Erro comum"
    Começar a análise sem formular uma pergunta específica leva a interpretações soltas e à famosa “tortura de dados até que eles confessem algo”.

---

## 2. **Plano**: como responder à pergunta?

Com a pergunta em mãos, é hora de planejar **como os dados serão obtidos e analisados**:

- Qual será a população-alvo?
- Qual o tamanho e o tipo da amostra?
- Quais variáveis serão medidas?
- Como os dados serão coletados (automatizado, questionário, registro)?
- Que tipo de análise estatística será apropriada?

!!! example "Exemplo no App"
    - Amostra: 1.000 usuários novos, divididos aleatoriamente em dois grupos (com e sem notificações).
    - Variável de interesse: número de sessões por semana.

!!! warning "Atenção"
    **Falta de planejamento = dados inadequados.**  
    É comum perceber, só na hora da análise, que **faltam variáveis importantes**, ou que **os dados não respondem à pergunta original.**

---

## 3. **Dados**: a coleta responsável

Hora de **recolher as informações planejadas**. Aqui, o foco é:

- Seguir rigorosamente o plano;
- Garantir a qualidade e integridade dos dados;
- Documentar erros, perdas ou inconsistências.

!!! example "Exemplo no App"
    - O sistema monitora automaticamente a frequência de sessões.
    - O envio das notificações é controlado para cada grupo.

!!! danger "Erro comum"
    Coletar dados em excesso ou irrelevantes pode parecer útil, mas **gera ruído**. Por outro lado, dados incompletos ou mal organizados **inviabilizam a análise posterior.**

---

## 4. **Análise**: responder com ferramentas adequadas

Com dados organizados, chega o momento de usar ferramentas estatísticas para **responder à pergunta**.

Dependendo do tipo de dado e da pergunta, você pode usar:

- Medidas descritivas (média, mediana, desvio padrão);
- Gráficos (barras, histogramas, boxplots);
- Testes estatísticos (teste t, qui-quadrado, regressões);
- Inferência (intervalos de confiança, p-valores).

!!! example "Exemplo no App"
    - Comparar a **média de sessões semanais** entre os dois grupos.
    - Aplicar um **teste t** para avaliar se a diferença é estatisticamente significativa.

!!! warning "Atenção"
    **Usar técnicas sofisticadas em dados ruins não salva uma análise.**  
    E usar a técnica errada pode distorcer completamente os resultados.

---

## 5. **Conclusão**: mais do que números

Finalmente, a análise deve ser **traduzida em uma resposta clara** para a pergunta inicial, com reconhecimento das limitações envolvidas.

!!! example "Exemplo no App"
    “A média de sessões foi 4,2 para o grupo com notificações e 3,5 para o grupo sem notificações. A diferença foi estatisticamente significativa (p < 0,05). Podemos concluir que o envio de mensagens motivacionais está associado a um aumento na frequência de meditação.”

!!! tip "Dica"
    A conclusão deve **voltar à pergunta original** e responder de forma direta, mas sempre com base na evidência.

!!! danger "Perigo"
    Nunca afirme mais do que os dados permitem.  
    **Associação não é causalidade**, a menos que o plano experimental tenha garantido isso (como em testes controlados aleatórios).


---

## O que aprendemos?

- O **Ciclo PPDAC** estrutura toda investigação estatística em 5 etapas lógicas e interdependentes.
- Cada fase tem sua função específica, erros típicos e boas práticas.
- **Pular etapas ou tratá-las de forma superficial compromete toda a análise.**
- Uma boa pergunta e um bom plano são tão importantes quanto a análise em si.

---

## Para explorar mais

- 📺 **Vídeo:** [PPDAC – O ciclo da investigação estatística – Canal Estatística com o Diego](https://www.youtube.com/watch?v=auiKDq5wGNY)
- 📖 **Blog:** [O que é o ciclo PPDAC e por que ele é essencial para estatística – Blog do Ensino Einstein](https://ensinomedicina.einstein.br/ciclo-ppdac/)
- 📄 **Artigo:** [Investigação Estatística e o PPDAC – Revista do Professor de Matemática](https://revistadoprofessor.ime.usp.br/investigacao-estatistica-e-o-ppdac/)

Esses recursos trazem exemplos reais e abordagens didáticas para consolidar o uso do PPDAC no cotidiano de quem trabalha com dados.