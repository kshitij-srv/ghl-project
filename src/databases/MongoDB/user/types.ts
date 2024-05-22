import { Document, Model } from "mongoose";

export interface IUser {
  name: string;
  age: number;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserDocument extends IUser, Document {
  update: (this: IUserDocument, updatedUser: IUser) => Promise<IUserDocument>;
}

export interface IUserModel extends Model<IUserDocument> {
  findByEmail: (
    this: Model<IUserDocument>,
    email: string,
  ) => Promise<IUserDocument | null>;
}
