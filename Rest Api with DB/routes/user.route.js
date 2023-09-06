import express from "express";
import { getAllUsers } from "../controller/user.controller.js";
const router = express.Router();


router.get("/", getAllUsers);
// router.get("/:id", getOneUser);
// router.post("/", createUser);

export default router;