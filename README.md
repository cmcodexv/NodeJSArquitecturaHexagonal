# EJEMPLO DE DOMAIN-DRIVEN DESING CON NODEJS Y TYPESCRIPT
Este proyecto es un ejemplo de arquitectura hexagonal con DDD usando NodeJS, TypeScript, PostgreSQL, Docker y Jest.

## Dependencias

- [Docker Compose](https://docs.docker.com/get-started/08_using_compose/)
- [Nodejs v16.17.1](https://nodejs.org/es/)


### Base Framework
- [Express](https://expressjs.com/)

### Pasos

- Ejecutar archivo "config.yml" con Docker Compose:
```sh
$ config.yml up -d
```
- Instalar node_modules:
```sh
$ npm i
```
- Ejecutar Servidor:
```sh
$ npm run dev
```
### Comandos Extras

- Transpilar TypeScript a JavaScript:
```sh
$ npx tsc
```
- Ejecutar archivo de pruebas:
```sh
$ npm run test
$ npm run test:watch
```


