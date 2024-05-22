"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const db_1 = __importDefault(require("./src/databases/MongoDB/db"));
db_1.default === null || db_1.default === void 0 ? void 0 : db_1.default.connect();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;
const HOST = process.env.HOST ? process.env.HOST : undefined;
(0, app_1.setup)({
    port: PORT,
    host: HOST,
});
//# sourceMappingURL=server.js.map