import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./user.service";
import { AppError } from "../utils/erro";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { body } = req;

      const newUser = await createUser(body);

      return res.status(201).json(newUser);
    } catch (error: any) {
      console.error("ERRO CREATE USER:", error);

      if (error instanceof AppError) {
        return res.status(400).json({
          status: "error",
          message: error.message,
        });
      }

      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }

  async getAll(req: Request, res: Response) {
    const users = await getUsers();
    return res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const { userId } = req.params;
    const users = await getUser(userId);
    return res.json(users);
  }

  async update(req: Request, res: Response) {
    const { userId } = req.params;
    const body = req.body;
    const users = await updateUser(userId, body);
    return res.status(200).json(users);
  }

  async delete(req: Request, res: Response) {
    const { userId } = req.params;
    const users = await deleteUser(userId);
    return res.status(202).json(users);
  }
}

export default new UserController();
