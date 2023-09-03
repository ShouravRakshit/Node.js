import express from "express";
import { getUsers, saveUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/submit", saveUsers);

export default router;
