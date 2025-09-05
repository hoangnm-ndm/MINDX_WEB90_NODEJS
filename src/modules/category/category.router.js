import { Router } from "express";
import validBodyRequest from "../../common/middlewares/valid-body.middlewares.js";
import { createCategorySchema } from "./category.schema.js";
import { verifyToken } from "../../common/utils/jwt.js";
import { authMiddleware, restrictTo } from "../../common/middlewares/auth.middleware.js";
import { USER_ROLE } from "../../common/constants/enum.js";
import { createCategory, getAllCategory } from "./category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategory);
// categoryRouter.get("/:id", getProduct);

// Protected routes
// categoryRouter.use(authMiddleware, restrictTo(USER_ROLE.ADMIN, USER_ROLE.MANAGER));
// categoryRouter.delete("/:id", removeProduct);
categoryRouter.post("/", validBodyRequest(createCategorySchema), createCategory);
// categoryRouter.patch("/:id", validBodyRequest(updateProductSchema), updateProduct);

export default categoryRouter;
