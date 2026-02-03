import express from "express";
import userController from "./user.controller";
import { verifyToken } from "@/middleware/auth";
export const router = express.Router();

router.use(verifyToken);

router.get("/", userController.getAll);

router.get("/:userId", userController.getUser);
router.put("/:userId", userController.update);
router.delete("/:userId", userController.delete);

export default router;
