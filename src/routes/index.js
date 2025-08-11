import { Router } from "express";
import {
	createCustomer,
	getAllCustomer,
	getCustomerById,
	getOrderByCustomerId,
	deleteCustomerById,
} from "../controller/customer.controller.js";
import { createOrder, getAllOrder, updateOrder } from "../controller/order.controller.js";
import { getAllProduct } from "../controller/product.controller.js";

const router = Router();

// * Customers route
router.post("/customers", createCustomer);
router.get("/customers", getAllCustomer);
router.get("/customers/:id", getCustomerById);
router.get("/customers/:customerId/orders", getOrderByCustomerId);
router.delete("/customers/:id", deleteCustomerById);

//* products
router.get("/products", getAllProduct);

//* orders
router.get("/orders", getAllOrder);
router.post("/orders", createOrder);
router.put("/orders/:orderId", updateOrder);

export default router;
