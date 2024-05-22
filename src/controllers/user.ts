import { Request, Response } from "express";
import UserService from "../services/user";
import { IUser } from "../databases/MongoDB/user/types";

class UserController {
  protected userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public createUser = async (req: Request, res: Response) => {
    const data: IUser = req.body;
    if (
      typeof data?.name !== "string" &&
      typeof data?.age !== "number" &&
      typeof data?.email !== "string"
    ) {
      res.status(400).send({
        error: "Invalid user data",
      });
    } else {
      try {
        const newUser = await this.userService.createUser(data);
        res.status(201).send(newUser);
      } catch (err) {
        res.status(500).send({
          error: (err as Error)?.message,
        });
      }
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    const data: IUser = req.body;
    if (!(data && data.email)) {
      res.status(400).send({
        error: "User email not specified",
      });
    } else {
      try {
        const updatedUser = await this.userService.updateUser(data);
        res.status(200).send(updatedUser);
      } catch (err) {
        res.status(500).send({
          error: (err as Error)?.message,
        });
      }
    }
  };

  public getUserByEmail = async (req: Request, res: Response) => {
    const email = req.params.email;

    if (!email) {
      res.status(400).send({
        error: "No email supplied",
      });
    } else {
      try {
        const user = await this.userService.findUserByEmail(email);
        if (user) {
          res.status(200).send(user);
        } else {
          res.status(204).send();
        }
      } catch (err) {
        res.status(500).send({
          error: (err as Error)?.message,
        });
      }
    }
  };
}

export default UserController;
