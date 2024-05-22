import { IUser, IUserDocument } from "./types";

export async function update(
  this: IUserDocument,
  updatedUser: IUser,
): Promise<IUserDocument> {
  if (!updatedUser) {
    return this;
  }

  if (updatedUser.name && updatedUser.name !== this.name) {
    this.name = updatedUser.name;
  }

  if (updatedUser.age && updatedUser.age !== this.age) {
    this.age = updatedUser.age;
  }

  if (updatedUser.email && updatedUser.email !== this.email) {
    this.email = updatedUser.email;
  }

  const now = new Date();

  if (!this.updatedAt || this.updatedAt < now) {
    this.updatedAt = now;
  }

  const savedUser = await this.save();
  return savedUser;
}
