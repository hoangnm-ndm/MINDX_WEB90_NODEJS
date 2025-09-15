import Product from "./product.model.js";

export const getAllProductService = async (query) => {
	// * Cách 1: Populate với 1 field
	// const products = await Product.find().populate("category", "title").populate("brand", "title");

	// * Cách 2: Populate với nhiều field
	// const products = await Product.find().populate([
	// 	{ path: "category", select: "title" },
	// 	// { path: "brand", select: "title" },
	// ]);

	// * Xử lý phân trang

	const totalItems = await Product.countDocuments();
	const { page = 1, limit = 12 } = query;

	const totalPages = Math.ceil(totalItems / limit);
	// // Tính toán vị trí bắt đầu của trang hiện tại, trừ 1 vì mảng bắt đầu từ vị trí 0
	const skip = (page - 1) * limit;
	const products = await Product.find()
		.skip(skip)
		.limit(limit)
		.populate([
			{ path: "category", select: "title" },
			// { path: "brand", select: "title" },
		]);
	return {
		products,
		meta: {
			totalItems,
			totalPages,
			currentPage: Number(page),
			pageSize: Number(limit),
		},
	};
};

export const getProductService = async (id) => {
	const product = await Product.findById(id).populate("category", "title");
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
