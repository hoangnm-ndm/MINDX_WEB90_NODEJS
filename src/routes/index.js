import { Router } from "express";
import orderRouter from "../modules/order/order.router.js";
import productRouter from "../modules/product/product.router.js";
import authRouter from "../modules/auth/auth.router.js";
import categoryRouter from "../modules/category/category.router.js";
import uploadRoutes from "../modules/upload/upload.router.js";

const router = Router();

router.use("/upload", uploadRoutes);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/orders", orderRouter);
router.use("/auth", authRouter);

export default router;
