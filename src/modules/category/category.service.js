import { queryBuilder } from "../../common/utils/query-builder.js";
import Category from "./category.model.js";

export const getAllCategoryService = async (query) => {
	// const categories = await Category.find();

	// Sử dụng query builder
	const { data: categories, meta } = await queryBuilder(Category, query, {});
	return categories;
};

export const getCategoryService = async (id) => {
	const product = await Category.findById(id);
	return product;
};

export const removeCategoryService = async (id) => {
	const product = await Category.findByIdAndDelete(id);
	return product;
};

export const createCategoryService = async (cateData) => {
	const product = await Category.create(cateData);
	return product;
};

export const updateCategoryService = async (id, cateData) => {
	const product = await Category.findByIdAndUpdate(id, cateData, {
		new: true,
	});
	return product;
};
