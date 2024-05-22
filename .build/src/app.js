"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const cors_options = {
    origin: true,
    methods: ["GET"],
    credentials: true,
    maxAge: 3600,
    optionsSuccessStatus: 200,
};
function setup(options) {
    const port = (options === null || options === void 0 ? void 0 : options.port) || 8080;
    const host = (options === null || options === void 0 ? void 0 : options.host) || "0.0.0.0";
    app.use((0, cors_1.default)(cors_options));
    app.use(express_1.default.json());
    app.use("/", router_1.default);
    app.listen(port, host, () => {
        console.log(`Server started on ${host}:${port}`);
    });
}
exports.setup = setup;
//# sourceMappingURL=app.js.map