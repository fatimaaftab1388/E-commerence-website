import express from "express";

import { postuser } from "../controller/user.js";
import {getuser} from "../controller/user.js";

const router = express.Router();

router.post("/", postuser);


router.get("/", getuser);
export default router;