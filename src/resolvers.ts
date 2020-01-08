import { User } from './models';

export default {
  Query: {
    users: (): any => User.find(),
    user: (_, { id }): any => User.findById(id),
  },

  Mutation: {
    createUser: (_, { name, email }): any => User.create({ name, email }),
  },
};
