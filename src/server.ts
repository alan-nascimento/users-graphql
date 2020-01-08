import { GraphQLServer } from 'graphql-yoga';
import { connect } from 'mongoose';
import { resolve } from 'path';

import resolvers from './resolvers';

connect('mongodb://localhost:27017/users', { useNewUrlParser: true });

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schemas', 'Users.graphql'),
  resolvers,
});

server.start();
