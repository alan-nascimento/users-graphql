import { User } from './models';
import users from './seeds/users';

export default {
  Query: {
    users: (): User[] => users,
    user: (): User => users[0],
  },

  Mutation: {
    createUser: (): User => users[0],
  },
};
