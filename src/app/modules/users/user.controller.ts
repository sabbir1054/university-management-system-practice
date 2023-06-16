import { RequestHandler } from 'express';
import { UserService } from './user.service';
const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUserDB(user);

    res.status(200).json({
      success: true,
      message: 'User created Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createUser,
};
