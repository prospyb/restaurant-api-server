import express from "express";
import UserController from "../controllers/userController/user.controller.js";
import { tryCatch } from "../utils/tryCatchHandler.js";

// User router
const router = new express.Router();

// User Creation Route
router.post("/create", tryCatch(UserController.createUser));
router.post("/login", tryCatch(UserController.loginUser));
router.get("/", tryCatch(UserController.searchAllUser));
router.get("/search", tryCatch(UserController.searchOneUser));

//Exporting the User Router
export { router };