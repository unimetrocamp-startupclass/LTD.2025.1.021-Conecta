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

Nosso sistema será construído com HTML, CSS e JavaScript no front-end, Python no back-end e PostgreSQL para armazenar os dados. Tudo pensado para ser intuitivo, acessível e seguro.

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

## Materiais e Metódos
### Materiais:
O desenvolvimento do projeto Conecta está sendo realizado com um conjunto de tecnologias modernas que visam garantir desempenho, escalabilidade e boa experiência do usuário. As ferramentas escolhidas estão divididas conforme as camadas do sistema:

### Front-end
- Flutter: Framework utilizado para a construção da interface gráfica da aplicação. Permite o desenvolvimento multiplataforma (web e mobile), oferecendo uma experiência moderna, responsiva e consistente.
- Dart: Linguagem de programação utilizada pelo Flutter, responsável por definir a lógica da interface e o comportamento dos componentes visuais.

### Back-end
- Python: Utilizado na implementação da lógica de negócio e construção das APIs RESTful que interligam o front-end ao banco de dados. Frameworks como Flask ou Django estão sendo considerados para estruturar o servidor da aplicação.

### Banco de Dados
- PostgreSQL: Sistema gerenciador de banco de dados relacional, utilizado para armazenar dados dos usuários, projetos, inscrições e demais informações da plataforma.

### Formato de Comunicação
- JSON (JavaScript Object Notation): Padrão adotado para a troca de dados entre front-end e back-end, pela sua leveza, legibilidade e compatibilidade.

Essas tecnologias foram selecionadas por sua robustez, comunidade ativa, ampla documentação e aderência a projetos escaláveis e modernos.

### Métodos:
A construção do sistema seguiu uma abordagem baseada nos princípios da engenharia de software, com foco em desenvolvimento iterativo, validação contínua e priorização das necessidades dos usuários:

Levantamento de Requisitos
Foram identificadas as principais dificuldades enfrentadas por calouros ao tentar ingressar em projetos acadêmicos. Com base nesse levantamento, foram definidos os requisitos funcionais e não funcionais da plataforma.

### Modelagem do Sistema
O sistema foi estruturado em módulos principais, incluindo:
- Cadastro e autenticação de usuários (calouros e veteranos);
- Catálogo de projetos com filtros por área de interesse;
- Mecanismo de inscrição e gerenciamento de participantes nos projetos.

### Desenvolvimento
- O front-end está sendo desenvolvido com Flutter, visando uma interface amigável e responsiva.
- O back-end, implementado em Python, expõe APIs RESTful e utiliza JSON como padrão de comunicação com o front-end.

As principais funcionalidades previstas no backlog incluem:
- Publicação e visualização de projetos;
- Controle de períodos de abertura para projetos e inscrições;
- Definição de número mínimo e máximo de participantes por projeto.

### Testes e Validação
Serão realizados testes funcionais para verificar o correto funcionamento das funcionalidades, testes de usabilidade com usuários finais e testes de integração entre front-end e back-end.

### Deploy
Após as fases de desenvolvimento e testes, a aplicação será disponibilizada em ambiente web, possibilitando o acesso por parte dos estudantes e veteranos da instituição.

## Resultados

### Protótipos:

#### ✅ Página Inicial
![Página Inicial](https://github.com/user-attachments/assets/2a990405-1204-40f8-98c7-cbbdb344e5cb)

> Função: Página de entrada do sistema — oferece opções de login, cadastro e sobre.
📌 Ações do usuário:
- Clicar em login
- Clicar em cadastro
- Clicar em sobre
Reação do sistema:
- Redirecionar para a página correspondente

#### ✅ Página de Login
![Página de Login](https://github.com/user-attachments/assets/c1c321b2-8db0-4716-acb2-c77219e8a5b3)

> Função: Autenticação de usuários.
📌 Ações do usuário:
- Inserir e-mail
- Inserir senha
- Clicar em login
Reação do sistema:
- Verificar credenciais no banco de dados
- Autenticar usuário

#### ✅ Página de Cadastro
![Página de Cadastro](https://github.com/user-attachments/assets/ec249796-4267-46b7-8203-905032348b45)

> Função: Registro de novos usuários.
📌 Ações do usuário:
- Inserir nome
- Inserir e-mail
- Criar senha
- Clicar em cadastrar
Reação do sistema:
- Armazenar informações no banco de dados

#### ✅ Página Inicial Pós-Login
![Página Inicial Pós-Login](https://github.com/user-attachments/assets/29e8a37c-c8fb-4900-af91-63bfc7a7e247)

![Página Inicial Pós-Login 2](https://github.com/user-attachments/assets/87dd1621-8507-4b30-91c0-c4365957ea3e)

> Função: Página de entrada após autenticação.
📌 Ações do usuário:
- Acessar projetos
- Acessar perfil
- Sair
- Postar novo projeto
Reação do sistema:
- Exibir opções correspondentes

#### ✅ Página de Projetos
![Página de Projetos](https://github.com/user-attachments/assets/d9c160a8-3559-44ee-b4f1-0df5071be44f)

> Função: Listagem de projetos publicados.
📌 Ação do sistema:
- Exibir projetos armazenados no banco de dados

#### ✅ Página de Perfil
![Página de Perfil](https://github.com/user-attachments/assets/0ab0ff9f-5a9e-4e90-8b49-51f3d5d8f4ed)

> Função: Exibição de informações do usuário.
📌 Ação do sistema:
- Exibir informações do usuário

#### ✅ Página Sobre
![Página Sobre](https://github.com/user-attachments/assets/df483aa9-177c-4d65-87ce-b16fbbd2d9eb)

> Função: Descrição sobre a equipe da Conecta.
📌 Ação do sistema:
- Exibir descrição sobre a equipe

### Códigos das principais funcionalidades:

#### ✅ 1. `main.js`
> **Função**: Coração da lógica do sistema — controla o login, cadastro, logout e criação de projetos.

![main.js](https://github.com/user-attachments/assets/929c254f-ba27-4710-8877-25da5b9d1dfd)

📌 **Responsável por:**
- Autenticação de login  
- Registro de usuários
Partes que tem no código mas não deu para mostrar no print:
- Logout  
- Integração com a classe `Projeto`

### ✅ 2. `usuario.js`
> **Função**: Define a **estrutura e comportamentos do usuário**.

![usuario.js](https://github.com/user-attachments/assets/9a8c26d6-4d3e-4a13-810f-ced4499427b9)

📌 **Responsável por:**
- Criar e salvar novos usuários no `localStorage`  
- Verificar existência de usuários  
- Autenticar login

### ✅ 3. `login.html`
> **Função**: Página de **entrada no sistema**.

![login.html](https://github.com/user-attachments/assets/ee51a6eb-b3be-4795-9f92-c63da16e0e43)

📌 **Responsável por:**
- Interface de login  
- Gatilho para a função `handleLogin()`  
- Estrutura de navegação entre login e cadastro

### ✅ 4. `cadastro.html`
> **Função**: Página de **registro de novos usuários**.

![cadastro.html](https://github.com/user-attachments/assets/b5066a18-682b-494d-8c06-ace8112762cd)

📌 **Responsável por:**
- Interface de cadastro  
- Gatilho para a função `handleCadastro()`  
- Integração com a classe `Usuario`
