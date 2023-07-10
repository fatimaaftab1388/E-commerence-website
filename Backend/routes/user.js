import express from "express";
import {getuser,login,postuser} from "../controller/user.js";

const router = express.Router();

import { authenticateToken } from "../middlewares/Authenticator.js";

router.post("/", authenticateToken,postuser);
router.post('/login',login)

router.get("/",authenticateToken, getuser);
export default router;