import express from "express";
import { getAllUsers, createUser, getOneUser, deleteUser, updateUser } from "../controller/user.controller.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;