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
exports.update = void 0;
function update(updatedUser) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const savedUser = yield this.save();
        return savedUser;
    });
}
exports.update = update;
//# sourceMappingURL=methods.js.map