import { createResponse } from "../../common/configs/response.config.js";
import MESSAGES from "./product.message.js";
import Product from "./product.model.js";

export const getAllProduct = async (req, res) => {
	try {
		const products = await Product.find();
		if (!products || products.length === 0) {
			createResponse(res, 400, MESSAGES.GET_FAILURE);
		}
		createResponse(res, 200, MESSAGES.GET_SUCCESS, products);
	} catch (error) {
		console.log(error);
	}
};

export const getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			createResponse(res, 400, MESSAGES.NOT_FOUND);
		}
		createResponse(res, 200, MESSAGES.GET_SUCCESS, product);
	} catch (error) {
		console.log(error);
	}
};

export const removeProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);

		if (!product) {
			createResponse(res, 400, MESSAGES.DELETE_FAILURE);
		}
		createResponse(res, 200, MESSAGES.DELETE_SUCCESS, product);
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		if (!product) {
			createResponse(res, 400, MESSAGES.CREATE_FAILURE);
		}
		createResponse(res, 200, MESSAGES.CREATE_SUCCESS, product);
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!product) {
			createResponse(res, 400, MESSAGES.UPDATE_FAILURE);
		}
		createResponse(res, 200, MESSAGES.UPDATE_SUCCESS, product);
	} catch (error) {
		console.log(error);
	}
};
