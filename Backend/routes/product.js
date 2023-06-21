
import express from "express";
import { getProduct , postProduct } from "../controller/product.js";
import {imageUpload} from "../multer_config/multer.js";

const router = express.Router();

router.post("/", imageUpload.single("image"),postProduct);


router.get("/", getProduct);

export default router;