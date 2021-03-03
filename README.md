####  Bootcamp - GoStack 11
# 🚀 Nível 04 - Iniciando back-end do app

## Sobre

- Esta API contém o back-end do Projeto GoBarber, continuação do projeto [Iniciando back-end do app](https://github.com/fabiosvf/bootcamp-gostack-11-nivel-02-iniciando-back-end-do-app).
- Neste módulo iremos aprender princípios da programação, arquitetura de software dentro do back-end que vai fazer a nossa aplicação ser escalável, utilizando alguns conceitos da metodologia DDD (Domain-Driven Development), assim como testes automatizados e a metodologia TDD (Test-Driven Development).

---

## Roteiro

- Nessa etapa, continuaremos o projeto iniciado anteriormente adicionando pontos cruciais de arquitetura, design patterns e testes automatizados.

### Arquitetura e DDD

### Conceitos DDD e TDD
- Até o momento, estamos separando a nossa aplicação por tipo de arquivo.
```
src
  config
  database
  erros
  middlewares
  models
  repositories
  routes
  services
```
- Isso é ruim, porque se a nossa aplicação crescer muito, em algumas pastas, como por exemplo `services`, haverá uma grande quantidade de arquivos soltos sem uma relação visível com a `model` equivalente. Isso ocorre porque um `service` possui apenas uma funcionalidade, e para cada `model` podem existir muitos `services`. Nessa estrutura, conforme esse volume aumenta, o código começa a ficar muito desorganizado.
- O objetivo agora é passarmos a organizar nosso código à partir de domínios ao invés do tipo de arquivo.
```
Domínio: Área de conhecimento de um Modulo/Arquivo específico
```
- Iremos utilizar alguns conceitos de uma metodologia conhecida como DDD `Domain-Driven Design`
  - Não serão aplicados todos os conceitos de DDD neste projeto, mas apenas os relevantes
  - Existem muitos conceitos que faz sentido apenas para sistemas com estruturas muito grandes
  - Uma outra informação importante, é que o DDD é utilizado apenas em projetos Back-End
- Seguem alguns links úteis como conteúdo complementar:
  - [DDD (Domain-Driven Design) // Dicionário do Programador - Código Fonte TV](https://www.youtube.com/watch?v=GE6asEjTFv8)
  - [Domain-Driven Design - Cnceitos básicos - Bruno Brito](https://www.brunobrito.net.br/domain-driven-design/)
- Além do DDD, implementaremos também a metodologia TDD `Test-Driven Design`
  - Essa metodologia é aplicável em todas as frentes, projetos Back-end, Web e Mobile
  - A ideia principal do `TDD` é justamente antecipar a implementação dos testes para só depois implementar as funcionalidades. Em um primeiro momento, para quem não conhece essa metodologia, a impressão é de que vai dar mais trabalho, mas isso garante um ganho absurdo no decorrer do desenvolvimento do projeto, quando houver a necessidade de realizar constantes alterações e muitas vezes por novos desenvolvedores integrados recentemente na equipe e que não conhece nada das regras de negócio.
- Segue um link útil como conteúdo complementar:
- [TDD (Test Driven Development) // Dicionário do Programador - Código Fonte TV](https://www.youtube.com/watch?v=bLdEypr2e-8)

---

## Tecnologias utilizadas

#### Dependências de Projeto
- [bcryptjs](https://yarnpkg.com/package/bcryptjs)
- [cors](https://yarnpkg.com/package/cors)
- [date-fns](https://yarnpkg.com/package/date-fns)
- [express](https://yarnpkg.com/package/express)
- [express-async-errors](https://yarnpkg.com/package/express-async-errors)
- [jsonwebtoken](https://yarnpkg.com/package/jsonwebtoken)
- [multer](https://yarnpkg.com/package/multer)
- [pg](https://yarnpkg.com/package/pg)
- [reflect-metadata](https://yarnpkg.com/package/reflect-metadata)
- [typeorm](https://yarnpkg.com/package/typeorm)
- [uuidv4](https://yarnpkg.com/package/uuidv4)

#### Dependências de Desenvolvimento
- [@types/bcryptjs](https://yarnpkg.com/package/@types/bcryptjs)
- [@types/express](https://yarnpkg.com/package/@types/express)
- [@types/jsonwebtoken](https://yarnpkg.com/package/@types/jsonwebtoken)
- [@types/multer](https://yarnpkg.com/package/@types/multer)
- [@typescript-eslint/eslint-plugin](https://yarnpkg.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://yarnpkg.com/package/@typescript-eslint/parser)
- [eslint](https://yarnpkg.com/package/eslint)
- [eslint-config-airbnb-base](https://yarnpkg.com/package/eslint-config-airbnb-base)
- [eslint-config-prettier](https://yarnpkg.com/package/eslint-config-prettier)
- [eslint-import-resolver-typescript](https://yarnpkg.com/package/eslint-import-resolver-typescript)
- [eslint-plugin-import](https://yarnpkg.com/package/eslint-plugin-import)
- [eslint-plugin-prettier](https://yarnpkg.com/package/eslint-plugin-prettier)
- [prettier](https://yarnpkg.com/package/prettier)
- [ts-node-dev](https://yarnpkg.com/package/ts-node-dev)
- [typescript](https://yarnpkg.com/package/typescript)

---

## Como executar
- Crie uma pasta para o projeto
- Acesse a pasta
- Faça o clone do projeto
```
$ git clone https://github.com/fabiosvf/bootcamp-gostack-11-nivel-04-arquitetura-e-testes-no-node-js.git .
```
- Atualize as bibliotecas
```
$ yarn
```
- Converta TypeScript em JavaScript
  - Este comando é utilizado apenas para gerar o pacote para publicação no ambiente de produção.
  - Durante o desevolvimento, para iniciar o serviço, utilize o próximo comando
```
$ yarn tsc
ou
$ yarn build
```
- Inicie o serviço
```
$ ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts
ou
$ yarn dev:server
```
