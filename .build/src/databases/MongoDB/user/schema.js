"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const statics_1 = require("./statics");
const methods_1 = require("./methods");
const UserSchema = new mongoose_1.Schema({
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
UserSchema.statics.findByEmail = statics_1.findByEmail;
UserSchema.methods.update = methods_1.update;
exports.default = UserSchema;
//# sourceMappingURL=schema.js.map