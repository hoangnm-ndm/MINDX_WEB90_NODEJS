import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
		},
		products: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
		],
	},
	{ timestamps: true, versionKey: false }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
