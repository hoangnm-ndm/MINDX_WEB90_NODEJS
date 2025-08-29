import Product from "./product.model.js";

export const getAllProductService = async () => {
	const products = await Product.find();
	return products;
};

export const getProductService = async (id) => {
	const product = await Product.findById(id);
	return product;
};

export const removeProductService = async (id) => {
	const product = await Product.findByIdAndDelete(id);
	return product;
};

export const createProductService = async (productData) => {
	const product = await Product.create(productData);
	return product;
};

export const updateProductService = async (id, productData) => {
	const product = await Product.findByIdAndUpdate(id, productData, {
		new: true,
	});
	return product;
};
