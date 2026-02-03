import express from "express";
import taskController from "./task.controller";
import { verifyToken } from "../middleware/auth";
export const router = express.Router();

router.use(verifyToken);

router.post("/", taskController.create);
router.get("/", taskController.getAll);

router.get("/:taskId", taskController.getTask);
router.put("/:taskId", taskController.update);
router.delete("/:taskId", taskController.delete);

export default router;
