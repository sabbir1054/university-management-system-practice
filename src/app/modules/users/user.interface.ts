import { Model } from 'mongoose';

export type UserModel = Model<IUser, Record<string, unknown>>;

export type IUser = {
  id: string;
  role: string;
  password: string;
};
