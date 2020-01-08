import { GraphQLServer } from 'graphql-yoga';
import { resolve } from 'path';

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers: {},
});

server.start();
