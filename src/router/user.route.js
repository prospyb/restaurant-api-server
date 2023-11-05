import express from "express";
import UserController from "../controllers/userController/user.controller.js";
import { tryCatch } from "../utils/tryCatchHandler.js";
import passport from 'passport';
import {BadUserRequestError} from "../../src/error/errors.js";

// User router
const router = new express.Router();

// User Creation Route
router.post("/create", tryCatch(UserController.createUser));
router.post("/login", tryCatch(UserController.loginUser));
router.get("/", tryCatch(UserController.searchAllUser));
router.get("/search", tryCatch(UserController.searchOneUser));


// Google Authentication routes
router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
  );
  
  router.get(
    '/auth/google/callback',
    (req, res, next) => {
      passport.authenticate('google', { failureRedirect: '/login' }, (err, user) => {
        if (err) {
          if (err instanceof BadUserRequestError) {
            res.status(400).json({ message: err.message });
          } else {
            next(err);
          }
        } else {
          // Successful authentication, redirect home.
          res.redirect('/');
        }
      })(req, res, next);
    }
  );  

//Exporting the User Router
export { router };