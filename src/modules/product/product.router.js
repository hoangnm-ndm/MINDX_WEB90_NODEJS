import { Router } from "express";
import { createProduct, getAllProduct, getProduct, removeProduct, updateProduct } from "./product.controller.js";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getProduct);
productRouter.delete("/:id", removeProduct);
productRouter.post("/", createProduct);
productRouter.patch("/:id", updateProduct);

export default productRouter;
