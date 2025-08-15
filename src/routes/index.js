import { Router } from "express";
import productRouter from "../modules/product/product.router.js";

const router = Router();

router.use("/products", productRouter);

export default router;
