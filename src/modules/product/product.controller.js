import { createResponse } from "../../common/configs/response.config.js";
import MES_PRODUCT from "./product.message.js";
import Product from "./product.model.js";

export const getAllProduct = async (req, res) => {
	try {
		const products = await Product.find();
		if (!products || products.length === 0) {
			createResponse(res, 400, MES_PRODUCT.GET_ERROR);
		}
		createResponse(res, 200, MES_PRODUCT.GET_SUCCESS, products);
	} catch (error) {
		console.log(error);
	}
};

export const getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			createResponse(res, 400, MES_PRODUCT.GET_ERROR);
		}
		createResponse(res, 200, MES_PRODUCT.GET_SUCCESS, product);
	} catch (error) {
		console.log(error);
	}
};

export const removeProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);

		if (!product) {
			createResponse(res, 400, MES_PRODUCT.DELETE_ERROR);
		}
		createResponse(res, 200, MES_PRODUCT.DELETE_SUCCESS, product);
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		if (!product) {
			createResponse(res, 400, "Them san pham that bai!");
		}
		createResponse(res, 200, "Them san pham thanh cong!", product);
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
			createResponse(res, 400, "Cap nhat that bai!");
		}
		createResponse(res, 200, "Cap nhat san pham thanh cong!", product);
	} catch (error) {
		console.log(error);
	}
};
