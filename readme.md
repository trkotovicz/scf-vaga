# O Projeto

Este projeto possui um banco de dados fictício com apenas um registro. O objetivo é aprimorar o CRUD existente.

## Decisões

Dado que se trata de um CRUD simples, optei por mantê-lo dessa forma, sem a necessidade de instalar bibliotecas externas adicionais ou adicionar funcionalidades desnecessárias que possam aumentar a complexidade do código. Além disso, todas as validações foram implementadas manualmente.

Uma decisão tomada foi alterar a estrutura do projeto, adotando a arquitetura MSC (Model-Service-Controller) para separar de forma clara e organizada as responsabilidades dos casos de uso, das chamadas HTTP e do acesso ao banco de dados. Agora cada arquivo possui uma função específica, o que contribui para uma melhor organização e manutenção do código.

A intenção principal foi mostrar que é possível criar um código funcional de maneira simples, utilizando apenas JavaScript, sem a necessidade de recorrer a bibliotecas externas. Além disso, foi priorizada a legibilidade do código, de forma a facilitar a compreensão por qualquer pessoa que o analise.

## Possíveis Melhorias

- Adicionar Testes unitários e de Integração
- Adicionar Typescript

---

### Testes Propostos

**teste1.js**
GET em /user 
Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

 **teste2.js**
POST em /users, descubra a intenção dele e o corrija.

**teste3.js**
Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

**teste4.js**
Atualiza os dados de um usuário especifico.

**teste5.js**
Retorne quantas vezes determinado usuário foi lido no teste1.

**teste 6**
Defina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.
