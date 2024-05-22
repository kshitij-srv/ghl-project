import express from "express";
import UserController from "../../controllers/user";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/", userController.createUser);
userRouter.get("/:email", userController.getUserByEmail);
userRouter.put("/", userController.updateUser);

export default userRouter;
