// Table products {
//   id string
//   title string
//   price number
//   description string
//   deletedAt datetime
//   stock number
//   soldCount number
//   brand string [ref:> brands.id]
//   category string [ref:> categories.id]
// }

import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
		},
		price: {
			type: Number,
		},
		deletedAt: {
			type: Date,
			default: null,
		},
		stock: {
			type: Number,
		},
		soldCount: {
			type: Number,
		},
		brand: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Brand",
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category", // reference
		},
	},
	{ timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
