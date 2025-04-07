# Vieses de Amostragem: Quando os Dados Contam uma História Falsa

## Os dados dizem... mas estão dizendo a verdade?

A equipe da startup de meditação está empolgada: aplicaram uma pesquisa de satisfação e 82% dos usuários disseram estar “muito satisfeitos” com o app.

Isso parece ótimo — mas um analista mais atento pergunta:

*— Quem respondeu essa pesquisa?*

Descobre-se que o questionário foi enviado apenas por notificação dentro do app. Ou seja, **só usuários ativos e engajados** responderam. Os que desinstalaram ou usaram pouco sequer foram contatados.

**Resultado: a amostra está contaminada por viés.**  
E a conclusão otimista pode estar **completamente desconectada da realidade.**

---

## O que é viés de amostragem?

!!! info "Definição"
    **Viés de amostragem** ocorre quando o processo de seleção da amostra **favorece certos grupos da população**, tornando os dados **não representativos**.

Isso faz com que as **estatísticas obtidas na amostra não reflitam os verdadeiros parâmetros da população** — gerando conclusões distorcidas.

!!! warning "Atenção"
    Nem sempre o problema está nos números.  
    Muitas vezes, **o erro está em *quem* foi incluído na amostra — e *quem* foi deixado de fora.**

---

## Exemplos de viés em situações reais

!!! example "Exemplo 1 – Viés de engajamento"
    A pesquisa de satisfação foi respondida só por usuários que ainda usam o app. Os que desistiram (talvez por insatisfação) não estão na amostra. Resultado: a média de satisfação está inflada.

!!! example "Exemplo 2 – Viés geográfico"
    A equipe sorteou aleatoriamente 500 usuários... mas só dentro do estado de São Paulo. As conclusões sobre “todos os usuários do Brasil” são, na verdade, regionais.

!!! example "Exemplo 3 – Viés de acesso"
    Um estudo sobre qualidade do sono só incluiu usuários que têm smartwatches conectados ao app. Mas isso exclui usuários de menor renda, criando um viés socioeconômico.

---

## Tipos comuns de viés de amostragem

| Tipo de Viés                    | O que é                                                      | Exemplo no app de meditação                                |
|---------------------------------|---------------------------------------------------------------|-------------------------------------------------------------|
| **Viés de seleção**             | Alguns grupos têm mais chance de serem incluídos              | Só usuários com login recente recebem a pesquisa            |
| **Viés de não resposta**        | Pessoas que não respondem são diferentes das que respondem     | Só os mais engajados completam o questionário               |
| **Viés de cobertura**           | Parte da população não tem chance de ser incluída             | Pesquisar só usuários iOS e ignorar quem usa Android        |
| **Viés de sobrevivência**       | A análise considera apenas quem “permanece”                   | Avaliar satisfação só entre quem ainda está usando o app    |
| **Viés voluntário (autoseleção)** | A amostra se forma por quem decide participar                | Usuários muito satisfeitos (ou muito insatisfeitos) são os que respondem |

---

## Como identificar se uma amostra é tendenciosa?

Perguntas-chave que **você sempre deve fazer antes de confiar em uma amostra**:

- **Quem foi incluído na amostra?**
- **Alguém importante ficou de fora?**
- **A participação foi voluntária ou controlada?**
- **Houve critérios de exclusão implícitos (ex: idioma, região, plataforma)?**
- **O método de coleta influenciou quem respondeu?**

!!! question "Reflexão"
    Uma pesquisa é enviada por e-mail para avaliar o impacto do app na qualidade do sono. Apenas 8% dos usuários respondem.  

    Você confiaria nessa média de sono como representativa?  

    **Resposta:** Não. A taxa de resposta é muito baixa e provavelmente só usuários com interesse no tema (ou que dormem melhor) participaram. Há alto risco de viés de não resposta e autoseleção.

---

## Como evitar vieses de amostragem?

- **Use técnicas de amostragem probabilística** (aleatória simples, estratificada, etc.);
- **Garanta cobertura ampla da população** (diferentes dispositivos, perfis e regiões);
- **Incentive respostas de grupos menos engajados**, oferecendo alternativas de acesso ou recompensas;
- **Compare quem respondeu com quem não respondeu** — se forem muito diferentes, o viés é provável;
- **Se houver viés, reconheça-o na análise.** Não tente esconder.

!!! tip "Dica"
    Às vezes, o viés é inevitável. Mas reconhecê-lo **e indicar suas possíveis consequências** já é uma atitude estatística responsável.

---

## O que aprendemos?

- Viés de amostragem **não é um detalhe técnico — é um erro estrutural.**
- Uma amostra enviesada pode levar a **decisões completamente erradas**, mesmo com análise correta.
- **Saber identificar e evitar viés** é uma habilidade crítica para qualquer pessoa que trabalha com dados.
- Pergunte sempre: *essa amostra representa quem deveria representar?*

---

## Para explorar mais

- 📺 **Vídeo:** [Viés de Amostragem – Canal Estatística com o Diego](https://www.youtube.com/watch?v=Es87F-2Y04E)
- 📄 **Artigo:** [Viés de Seleção: o que é e como evitar – Blog do IBGE Explica](https://educa.ibge.gov.br/jovens/conceitos-estatisticos/21188-sobre-o-vies-de-selecao.html)
- 📖 **Post:** [Como evitar vieses de amostragem – Blog Ciência dos Dados](https://cienciadosdados.com/vieses-de-amostragem/)

Esses materiais mostram casos reais e oferecem estratégias práticas para evitar esse erro silencioso — mas devastador — na análise estatística.