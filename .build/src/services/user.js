"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../databases/MongoDB/user/model");
class UserService {
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield model_1.UserModel.create({
                name: userData.name,
                age: userData.age,
                email: userData.email,
            });
            return newUser;
        });
    }
    updateUser(updatedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.UserModel.findByEmail(updatedUser.email);
            if (user) {
                const savedUser = yield user.update(updatedUser);
                return savedUser;
            }
            throw new Error("User not found");
        });
    }
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield model_1.UserModel.findByEmail(email);
            return user;
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.js.map