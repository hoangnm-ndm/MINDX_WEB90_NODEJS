import { customers } from "../../data.js";
import { createResponse } from "../common/configs/response.config.js";
import { v4 as uuidv4 } from "uuid";

export const createCustomer = (req, res) => {
	const { email, name, age } = req.body;
	if (!email || !name || !age || age <= 0 || typeof age !== "number") {
		return res.status(400).json({
			message: "Data them khach hang chua chinh xac!",
		});
	}

	const customer = { ...req.body, id: uuidv4() };
	customers.push(customer);
	console.log(customer);

	createResponse(res, 201, "Them khach hang thanh cong!", customer);
};

export const getAllCustomer = (req, res) => {
	createResponse(res, 200, "Lay danh sach khach hang thanh cong!", customers);
};

export const getCustomerById = (req, res) => {
	const customer = customers.find((item) => item.id == req.params.id);
	createResponse(res, 200, "Lay thong tin khach hang thanh cong", customer);
};

export const getOrderByCustomerId = (req, res) => {};

export const deleteCustomerById = (req, res) => {};
