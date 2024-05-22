import mongoose from "mongoose";

class MongoDB {
  static instance: MongoDB;
  private database: mongoose.Connection | null;

  constructor() {
    this.database = null;
  }

  public connect(mongodbURI?: string) {
    const connectionURI = mongodbURI || process.env.MONGODB_URI;

    if (!connectionURI) {
      console.error("MongoDB connection URI not found");
      return;
    }

    if (this.database) {
      return;
    }

    mongoose.connect(connectionURI);

    this.database = mongoose.connection;

    const dbName = connectionURI.substring(connectionURI.lastIndexOf("/") + 1);

    this.database.once("open", () => {
      console.log(`Connected to database ${dbName}`);
    });

    this.database.on("error", () => {
      console.error(`Error connecting to database ${dbName}`);
    });
  }

  public disconnect() {
    if (!this.database) {
      return;
    }

    mongoose.disconnect();
  }
}

const MongoDBInstance = new MongoDB();

export default MongoDBInstance;
