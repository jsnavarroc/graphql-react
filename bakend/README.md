# Primeros pasos (Configurando servidor)
## Con node, apolo y graphQL

> Instalar dependencias: 
```
 yarn init --yes
```
```
 yarn add  @babel/core @babel/node @babel/preset-env nodemon 
```
```
 yarn add  apollo-server graphql
```
>  Configuramos Babel 
 - Para esto simplemente creamos un archivo .babelrc y configuramos

>  Creamos el archivo de prueba src/index.js
 - En este punto lo que se hace es definir unos tipos y cremos una query
>  Modificamos el archivo de package.json

 - Establecemos un scripts que nos permita levantar la aplicacion. 

```
"start": "nodemon src/index.js --ext js --exec babel-node"
>> yarn start
```
