import { queryBuilder } from "../../common/utils/query-builder.js";
import Product from "./product.model.js";

export const getAllProductService = async (query) => {
  // * Cách 1: Populate với 1 field
  // const products = await Product.find().populate("category", "title").populate("brand", "title");

  // * Cách 2: Populate với nhiều field
  // const products = await Product.find().populate([
  // 	{ path: "category", select: "title" },
  // 	// { path: "brand", select: "title" },
  // ]);

  // * Áp dụng truy vấn nâng cao
  const data = await queryBuilder(
    Product,
    {
      ...query,
      searchFields: ["title"],
    },
    {
      populate: [
        // { path: "brand", select: "title" },
        { path: "category", select: "title" },
      ],
    },
  );

  return data;
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
