
import express from "express";
import { getProduct , postProduct,deleteProduct,updateProduct } from "../controller/product.js";
import {imageUpload} from "../multer_config/multer.js";

const router = express.Router();

router.post("/", imageUpload.single("image"),postProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/", getProduct);

export default router;