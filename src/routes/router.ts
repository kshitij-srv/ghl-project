import express, { Request, Response } from "express";
import userRouter from "./user/router";

const router = express.Router();

router.get("/status", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
  });
});

router.use("/v1/user", userRouter);

export default router;
