import { Router } from "express";
import orderRouter from "../modules/order/order.router.js";
import productRouter from "../modules/product/product.router.js";
import authRouter from "../modules/auth/auth.router.js";

const router = Router();

router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/auth", authRouter);

export default router;
