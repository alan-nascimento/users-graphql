import { Document } from 'mongoose';

export default interface UserInterface extends Document {
  id: number;
  name: string;
  email: string;
}
