# EJEMPLO DE DOMAIN-DRIVEN DESING CON NODEJS Y TYPESCRIPT
Este proyecto es un ejemplo de arquitectura hexagonal con DDD usando NodeJS, TypeScript, PostgreSQL, Docker y Jest.

## Dependencias

- [Docker Compose](https://docs.docker.com/get-started/08_using_compose/)
- [NPM v22.15.0](https://nodejs.org/es/)
- [Nodejs 11.3.0](https://docs.npmjs.com/)


### Base Framework
- [Express](https://expressjs.com/)

### Pasos

- Ejecutar archivo "config.yml" con Docker Compose:
```sh
 docker-compose -f config.yml up -d
```
- [Restaurar archivo "src/db/backup.sql" con Adminer](https://hub.docker.com/_/adminer/)
- Instalar node_modules:
```sh
 npm i
```
- Ejecutar Servidor:
```sh
 npm run dev
```
### Comandos Extras
- Ejecutar archivo de pruebas:
```sh
 npm run test
 npm run test:watch
```


