import { createResponse } from "../../common/configs/response.config.js";
import handleAsync from "../../common/utils/handle-async.js";
import MESSAGES from "./product.message.js";
import * as productService from "./product.service.js";

export const getAllProduct = handleAsync(async (req, res) => {
	const products = await productService.getAllProductService();
	if (!products || products.length === 0) {
		createResponse(res, 400, MESSAGES.GET_FAILURE);
	}
	createResponse(res, 200, MESSAGES.GET_SUCCESS, products);
});

export const getProduct = handleAsync(async (req, res) => {
	const product = await productService.getProductService(req.params.id);
	if (!product) {
		createResponse(res, 400, MESSAGES.NOT_FOUND);
	}
	createResponse(res, 200, MESSAGES.GET_SUCCESS, product);
});

export const removeProduct = handleAsync(async (req, res) => {
	const product = await productService.removeProductService(req.params.id);

	if (!product) {
		createResponse(res, 400, MESSAGES.DELETE_FAILURE);
	}
	createResponse(res, 200, MESSAGES.DELETE_SUCCESS, product);
});

export const createProduct = handleAsync(async (req, res) => {
	const product = await productService.createProductService(req.body);
	if (!product) {
		createResponse(res, 400, MESSAGES.CREATE_FAILURE);
	}
	createResponse(res, 200, MESSAGES.CREATE_SUCCESS, product);
});

export const updateProduct = handleAsync(async (req, res) => {
	const product = await productService.updateProductService(req.params.id, req.body);
	if (!product) {
		createResponse(res, 400, MESSAGES.UPDATE_FAILURE);
	}
	createResponse(res, 200, MESSAGES.UPDATE_SUCCESS, product);
});
