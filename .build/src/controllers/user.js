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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../services/user"));
class UserController {
    constructor() {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (typeof (data === null || data === void 0 ? void 0 : data.name) !== "string" &&
                typeof (data === null || data === void 0 ? void 0 : data.age) !== "number" &&
                typeof (data === null || data === void 0 ? void 0 : data.email) !== "string") {
                res.status(400).send({
                    error: "Invalid user data",
                });
            }
            else {
                try {
                    const newUser = yield this.userService.createUser(data);
                    res.status(201).send(newUser);
                }
                catch (err) {
                    res.status(500).send({
                        error: err === null || err === void 0 ? void 0 : err.message,
                    });
                }
            }
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (!data) {
                res.status(400).send({
                    error: "No user data supplied",
                });
            }
            else {
                try {
                    const updatedUser = yield this.userService.updateUser(data);
                    res.status(200).send(updatedUser);
                }
                catch (err) {
                    res.status(500).send({
                        error: err === null || err === void 0 ? void 0 : err.message,
                    });
                }
            }
        });
        this.getUserByEmail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const email = req.params.email;
            if (!email) {
                res.status(400).send({
                    error: "No email supplied",
                });
            }
            else {
                try {
                    const user = yield this.userService.findUserByEmail(email);
                    if (user) {
                        res.status(200).send(user);
                    }
                    else {
                        res.status(204).send();
                    }
                }
                catch (err) {
                    res.status(500).send({
                        error: err === null || err === void 0 ? void 0 : err.message,
                    });
                }
            }
        });
        this.userService = new user_1.default();
    }
}
exports.default = UserController;
//# sourceMappingURL=user.js.map