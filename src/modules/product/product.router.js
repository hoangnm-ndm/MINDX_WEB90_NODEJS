import { Router } from "express";
import { createProduct, getAllProduct, getProduct, removeProduct, updateProduct } from "./product.controller.js";
import validBodyRequest from "../../common/middlewares/valid-body.middlewares.js";
import { createProductSchema, updateProductSchema } from "./product.schema.js";
import { verifyToken } from "../../common/utils/jwt.js";
import { authMiddleware, restrictTo } from "../../common/middlewares/auth.middleware.js";
import { USER_ROLE } from "../../common/constants/enum.js";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getProduct);

// Protected routes
// productRouter.use(authMiddleware, restrictTo(USER_ROLE.ADMIN, USER_ROLE.MANAGER));
productRouter.delete("/:id", removeProduct);
productRouter.post("/", validBodyRequest(createProductSchema), createProduct);
productRouter.patch("/:id", validBodyRequest(updateProductSchema), updateProduct);

export default productRouter;
