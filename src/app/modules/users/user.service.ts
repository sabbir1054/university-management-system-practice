import config from '../../../config';
import ApiError from '../../../errors/ApiErrors';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generatedUserId } from './users.utils';

const createUserDB = async (user: IUser): Promise<IUser | null> => {
  //    auto generated id
  const id = await generatedUserId();

  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user !');
  }
  return createdUser;
};

export const UserService = {
  createUserDB,
};
