"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDB {
    constructor() {
        this.database = null;
    }
    connect(mongodbURI) {
        const connectionURI = mongodbURI || process.env.MONGODB_URI;
        if (!connectionURI) {
            console.error("MongoDB connection URI not found");
            return;
        }
        if (this.database) {
            return;
        }
        mongoose_1.default.connect(connectionURI);
        this.database = mongoose_1.default.connection;
        const dbName = connectionURI.substring(connectionURI.lastIndexOf("/") + 1);
        this.database.once("open", () => {
            console.log(`Connected to database ${dbName}`);
        });
        this.database.on("error", () => {
            console.error(`Error connecting to database ${dbName}`);
        });
    }
    disconnect() {
        if (!this.database) {
            return;
        }
        mongoose_1.default.disconnect();
    }
}
const MongoDBInstance = new MongoDB();
exports.default = MongoDBInstance;
//# sourceMappingURL=db.js.map