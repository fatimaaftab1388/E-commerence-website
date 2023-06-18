import express from "express";

import { postuser } from "../controller/user.js";


const router = express.Router();

router.post("/", postuser);


router.get("/", getProduct)