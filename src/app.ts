import express from "express";
import router from "./routes/router";
import cors from "cors";

const app = express();

const cors_options = {
  origin: true,
  methods: ["GET"],
  credentials: true,
  maxAge: 3600,
  optionsSuccessStatus: 200,
};

export function setup(options?: { port?: number; host?: string }) {
  const port = options?.port || 8080;
  const host = options?.host || "0.0.0.0";
  app.use(cors(cors_options));
  app.use(express.json());
  app.use("/", router);
  app.listen(port, host, () => {
    console.log(`Server started on ${host}:${port}`);
  });
}
