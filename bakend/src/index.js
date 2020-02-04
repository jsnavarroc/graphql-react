/* Dependencias */
import { ApolloServer, makeExecutableSchema } from 'apollo-server';

/* Models */
import models from './models/index';

/* Type Definitions & Resolvers */
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'


/* Schema */ 
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

/* Apollo Server */
const apolloServer = new ApolloServer ({
    schema,
    context:{
        models
    }
})


/* Running Apollo Server */
const alter = true
const force = true 
models.sequelize.sync({force:true}).then(() => {
    apolloServer.listen(5000).then(({url}) => console.log(`Running o ${url}`))
})
