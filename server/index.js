import express from 'express';
import {typeDefs} from './data/schema';
import {ApolloServer} from 'apollo-server-express';
import resolvers from './data/resolvers';

const app = express();

const server = new ApolloServer({typeDefs, resolvers});

// default path: "/graphql". Reason depends on how applyMiddleware is used: https://www.apollographql.com/docs/apollo-server/api/apollo-server/#apolloserverapplymiddleware
server.applyMiddleware({app});


app.listen({port: 4000}, () => console.log(`El servidor está funcionando ${server.graphqlPath}`))