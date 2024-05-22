import { model } from "mongoose";
import { IUserDocument, IUserModel } from "./types";
import UserSchema from "./schema";

export const UserModel = model<IUserDocument, IUserModel>("user", UserSchema);
