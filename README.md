# LTD.2025.1.021-Conecta

## Sumário
* Introdução
* Objetivo
* Backlogs do Produto
* Cronograma
* Materiais e Métodos
* Resultados
* Conclusão

## Introdução
Entrar na faculdade é um grande passo, mas pode ser desafiador encontrar oportunidades para se envolver e ganhar experiência prática. Muitos calouros querem participar de projetos acadêmicos, mas nem sempre sabem por onde começar ou como encontrar iniciativas já em andamento.

Para resolver esse problema, criamos uma plataforma que conecta calouros a projetos desenvolvidos por veteranos. Aqui, os novos alunos poderão explorar diferentes iniciativas, encontrar algo que combine com seus interesses e se juntar a equipes para aprender e contribuir.

Nosso sistema será construído com HTML, CSS e JavaScript no front-end, JAVA no back-end e PostgreSQL para armazenar os dados. Tudo pensado para ser intuitivo, acessível e seguro.

Com essa plataforma, integrar-se a projetos acadêmicos será mais fácil, tornando a experiência universitária mais dinâmica e colaborativa desde o primeiro semestre!

## Objetivo
Facilitar a integração de calouros em projetos acadêmicos ao centralizar e organizar as oportunidades disponíveis. Atualmente, muitos novos alunos encontram dificuldades para acessar informações sobre projetos em andamento e ingressar neles. O sistema permitirá que os calouros explorem, filtrem e escolham projetos de forma simples e intuitiva, garantindo uma experiência universitária mais colaborativa e enriquecedora.

## Escopo
O sistema será uma plataforma web que conectará calouros a projetos acadêmicos em andamento, permitindo que escolham iniciativas para participar e contribuir. Os principais requisitos implementados serão:

* Cadastro e autenticação de usuários: Calouros e veteranos poderão criar contas, gerenciar perfis e acessar funcionalidades específicas.
* Catálogo de projetos: Os veteranos poderão cadastrar seus projetos, e os calouros poderão explorá-los, filtrá-los e se inscreverem nos que tiverem interesse.
* Gerenciamento de participação: O sistema permitirá que os responsáveis pelos projetos gerenciem as inscrições e organizem os participantes.
* Fora do escopo O sistema não incluirá funcionalidades como chat interno, gerenciamento completo de tarefas dentro dos projetos ou qualquer tipo de intermediação financeira. Seu foco será exclusivamente conectar calouros e veteranos de maneira simples e eficiente.

## Backlogs do Produto
**Requisitos - Plataforma Web:**

Funcionalidade para criação e publicação de novos projetos, com interface intuitiva e fácil navegação.

Definição de períodos específicos para a abertura de novas publicações e inscrições, com controle de datas para maior organização.

Capacidade de configurar o número mínimo e máximo de calouros permitidos por projeto, garantindo flexibilidade no gerenciamento de participantes.

## Cronograma
O desenvolvimento do projeto Conecta foi organizado em sprints semanais, seguindo a metodologia ágil Scrum. Abaixo, apresentamos o cronograma detalhado das atividades realizadas em cada sprint:

### Sprint 1: Levantamento de Requisitos e Planejamento (08/03/2025 – 17/03/2025)
- Definição dos objetivos do projeto.
- Levantamento dos requisitos funcionais e não funcionais.
- Criação do backlog inicial no Jira.
- Planejamento das funcionalidades a serem desenvolvidas nas próximas sprints.

### Sprint 2: Configuração do Ambiente e Estrutura Inicial (19/03/2025 – 08/04/2025)
- Configuração do ambiente de desenvolvimento.
- Estruturação inicial do projeto Flutter.
- Configuração do backend em Python com Flask.
- Integração inicial com o banco de dados PostgreSQL.

### Sprint 3: Desenvolvimento das Funcionalidades Básicas (09/04/2025 – 22/04/2025)
- Implementação do sistema de cadastro e autenticação de usuários.
- Desenvolvimento da interface de login e registro no Flutter.
- Criação das rotas de API para autenticação.

### Sprint 4: Catálogo de Projetos e Inscrições (23/04/2025 – 14/05/2025)
- Desenvolvimento do catálogo de projetos disponíveis.
- Implementação da funcionalidade de inscrição em projetos.
- Criação de filtros para busca de projetos por área de interesse.

### Sprint 5: Gerenciamento de Participações e Validações (21/05/2025 – 04/06/2025)
- Implementação do painel para veteranos gerenciarem inscrições.
- Validação de dados e regras de negócio (número mínimo e máximo de calouros por projeto).
- Testes de usabilidade e correções de bugs identificados.
