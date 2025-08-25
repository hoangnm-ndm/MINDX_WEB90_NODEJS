import { Router } from "express";
import { createProduct, getAllProduct, getProduct, removeProduct, updateProduct } from "./product.controller.js";
import { createProductSchema, updateProductSchema } from "./product.schema.js";
import validBodyRequest from "../../common/middlewares/valid-body.middleware.js";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getProduct);
productRouter.delete("/:id", removeProduct);
productRouter.post("/", validBodyRequest(createProductSchema), createProduct);
productRouter.patch("/:id", validBodyRequest(updateProductSchema), updateProduct);

export default productRouter;
