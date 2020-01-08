import { Schema, model } from 'mongoose';

import UserInterface from './User.interface';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<UserInterface>('User', UserSchema);
