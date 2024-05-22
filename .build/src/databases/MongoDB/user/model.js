"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const schema_1 = __importDefault(require("./schema"));
exports.UserModel = (0, mongoose_1.model)("user", schema_1.default);
//# sourceMappingURL=model.js.map