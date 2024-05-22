import { Model } from "mongoose";
import { IUserDocument } from "./types";

export async function findByEmail(
  this: Model<IUserDocument>,
  email: string,
): Promise<IUserDocument | null> {
  const record = await this.findOne({
    email,
  });
  return record;
}
