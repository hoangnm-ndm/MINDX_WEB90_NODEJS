import mongoose from "mongoose";

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
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
		},
	},
	{ timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
