import Category from "./category.model.js";

export const getAllCategoryService = async () => {
	const products = await Category.find();
	return products;
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
