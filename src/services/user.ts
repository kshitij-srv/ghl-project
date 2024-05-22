import { UserModel } from "../databases/MongoDB/user/model";
import { IUser, IUserDocument } from "../databases/MongoDB/user/types";

class UserService {
  public async createUser(userData: IUser): Promise<IUserDocument> {
    const newUser = await UserModel.create({
      name: userData.name,
      age: userData.age,
      email: userData.email,
    });

    return newUser;
  }

  public async updateUser(updatedUser: IUser): Promise<IUserDocument | null> {
    const user = await UserModel.findByEmail(updatedUser.email);

    if (user) {
      const savedUser = await user.update(updatedUser);

      return savedUser;
    }

    throw new Error("User not found");
  }

  public async findUserByEmail(email: string): Promise<IUserDocument | null> {
    const user = await UserModel.findByEmail(email);

    return user;
  }
}

export default UserService;
