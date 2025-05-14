# [Front-End] Desafio Fase 1 - Brev.ly
Nesse projeto front-end será desenvolvido uma aplicação React que, em conjunto com a API, permite o gerenciamento de URL’s encurtadas.

## Funcionalidades e Regras

Assim como na API, temos as seguintes funcionalidades e regras:

- [x]  Deve ser possível criar um link
    - [ ]  Não deve ser possível criar um link com encurtamento mal formatado
    - [ ]  Não deve ser possível criar um link com encurtamento já existente
- [ ]  Deve ser possível deletar um link
- [ ]  Deve ser possível obter a URL original por meio do encurtamento
- [ ]  Deve ser possível listar todas as URL’s cadastradas
- [ ]  Deve ser possível incrementar a quantidade de acessos de um link
- [ ]  Deve ser possível baixar um CSV com o relatório dos links criados

Além disso, também temos algumas regras importantes específicas para o front-end:

- [x]  É obrigatória a criação de uma aplicação React no formato SPA utilizando o Vite como `bundler`;
- [ ]  Siga o mais fielmente possível o layout do Figma;
- [ ]  Trabalhe com elementos que tragam uma boa experiência ao usuário (`empty state`, ícones de carregamento, bloqueio de ações a depender do estado da aplicação);
- [x]  Foco na responsividade: essa aplicação deve ter um bom uso tanto em desktops quanto em celulares.

## Páginas

Essa aplicação possui 3 páginas:

- A página raiz (`/`) que exibe o formulário de cadastro e a listagem dos links cadastrados;
- A página de redirecionamento (`/:url-encurtada`) que busca o valor dinâmico da URL e faz a pesquisa na API por aquela URL encurtada;
- A página de recurso não encontrado (qualquer página que não seguir o padrão acima) que é exibida caso o usuário digite o endereço errado ou a url encurtada informada não exista.