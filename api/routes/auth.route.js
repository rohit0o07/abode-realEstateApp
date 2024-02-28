import express from "express";
import {google, signIn, signOut, signup} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/signup",signup);
router.post("/sign-in",signIn);
router.post('/google',google);
router.post('/sign-out',signOut);

export default router;