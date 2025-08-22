import { Router } from "express";
import { getOrderByCustomerId } from "./order.controller.js";

const orderRouter = Router();

// orderRouter.get("/", getAllProduct);
// * GET api/orders/customer/:customerId
orderRouter.get("/customer/:customerId", getOrderByCustomerId);

// orderRouter.delete("/:id", removeProduct);
// orderRouter.post("/", createProduct);
// orderRouter.patch("/:id", updateProduct);

export default orderRouter;
