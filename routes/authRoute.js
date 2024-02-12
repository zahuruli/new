import express from "express";
import {
  getAllUsersController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewears/authmiddleware.js";

//router object

const router = express.Router();

//Routing

//login || post
router.post("/login", loginController);

//get all user-list
router.get("/user-list", requireSignIn, getAllUsersController);

//Api Testing
router.get("/test", testController);

export default router;
