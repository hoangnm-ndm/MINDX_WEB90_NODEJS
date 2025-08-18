import { Router } from "express";
import orderRouter from "../modules/order/order.router.js";
import productRouter from "../modules/product/product.router.js";

const router = Router();

router.use("/products", productRouter);
router.use("/orders", orderRouter);

export default router;
