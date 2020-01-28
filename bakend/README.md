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

# Creación de Modelos

> Intalarmos PostgresSQL
 - Creamos una BD llamada reactgraph
> Cremos un archivo con esta ruta backend/config/config.json
```
   D:\Proyectos\React\graphql-cms\bakend> code config/config.json  
```
 - Establecemos la configuración del servidor
```
    {
        /*
        * Indicamos en que puero se va a desplegar dado que lo configuramos así:
        * apolloServer.listen(5000)
        */
        "serverProt":500,
        "db":{
            "host":"localhost",

            /*
            * Aquí se indica el tipo de dialecto que va interpretar 
            * el ORM de sqlize
            */
            "dialect":"postgres",

            /*Base de datos que creamos en el motor de BD que vamos a utilizar*/
            "database":"reactgraph",
            
            /*credenciales de la BD*/
            "username":"reactgraph",
            "password":"12345678"
        },
        "security": {
            "secretKey":"some-secret-key",
            /* Indicamos cuanto va a durar los tokens*/
            "expiresIn":"7d"
        }
    } 
```
> Cremos un archivo con esta ruta backend/config/index.js
- La cual exportará los nodos de la cofiguración
```
   D:\Proyectos\React\graphql-cms\bakend> code config/index.js  
```
> Instalamos otras dependencias.
- Esto con el fin de poder trabajar con postgres sqlize es el ORM que traducirá las consultas a un lenguaje que entienda postgres, y pg, pg-hstore lo requiere sequelize para que pueda funcionar. 
```
   yarn add sequelize pg pg-hstore  
```
> Creamos una carpeta que contendra todos los modelos de la base de datos, cada modelo se establecera en su respectivo archivo.
```
   D:\Proyectos\React\graphql-cms\bakend> code src/modelds/User.js 
```
