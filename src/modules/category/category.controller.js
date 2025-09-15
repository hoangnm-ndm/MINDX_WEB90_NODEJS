import { createResponse } from "../../common/configs/response.config.js";
import handleAsync from "../../common/utils/handle-async.js";
import MESSAGES from "./category.message.js";
import * as categoryService from "./category.service.js";

export const getAllCategory = handleAsync(async (req, res) => {
	const { data: categories, meta } = await categoryService.getAllCategoryService(req.query);
	if (!categories || categories.length === 0) {
		createResponse(res, 400, MESSAGES.GET_FAILURE);
	}
	createResponse(res, 200, MESSAGES.GET_SUCCESS, categories, meta);
});

// export const getCategory = handleAsync(async (req, res) => {
// 	const category = await categoryService.getCategoryService(req.params.id);
// 	if (!category) {
// 		createResponse(res, 400, MESSAGES.NOT_FOUND);
// 	}
// 	createResponse(res, 200, MESSAGES.GET_SUCCESS, category);
// });

// export const removeCategory = handleAsync(async (req, res) => {
// 	const category = await categoryService.removeCategoryService(req.params.id);

// 	if (!category) {
// 		createResponse(res, 400, MESSAGES.DELETE_FAILURE);
// 	}
// 	createResponse(res, 200, MESSAGES.DELETE_SUCCESS, category);
// });

export const createCategory = handleAsync(async (req, res) => {
	const category = await categoryService.createCategoryService(req.body);
	if (!category) {
		createResponse(res, 400, MESSAGES.CREATE_FAILURE);
	}
	createResponse(res, 200, MESSAGES.CREATE_SUCCESS, category);
});

// export const updateCategory = handleAsync(async (req, res) => {
// 	const category = await categoryService.updateCategoryService(req.params.id, req.body);
// 	if (!category) {
// 		createResponse(res, 400, MESSAGES.UPDATE_FAILURE);
// 	}
// 	createResponse(res, 200, MESSAGES.UPDATE_SUCCESS, category);
// });
