import { Schema } from "mongoose";
import { IUserDocument } from "./types";
import { findByEmail } from "./statics";
import { update } from "./methods";

const UserSchema = new Schema<IUserDocument>({
  name: String,
  age: Number,
  email: {
    type: String,
    unique: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.statics.findByEmail = findByEmail;
UserSchema.methods.update = update;

export default UserSchema;
