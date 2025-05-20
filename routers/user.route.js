import express from "express";
import {
  getAllUsers,
  getUserById,
  saveUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/getusers", getAllUsers);
router.get("/getuser/:id", getUserById);
router.post("/save", saveUser);

export default router;
