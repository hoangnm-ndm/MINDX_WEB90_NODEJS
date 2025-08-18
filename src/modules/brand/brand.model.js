// Table brands {
//   id string
//   title string
//   logo string
//   slogan string
//   story string
// }

import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			unique: true,
			required: true,
		},
		logo: {
			type: String,
		},
		slogan: {
			type: String,
		},
		story: {
			type: String,
		},
	},
	{ versionKey: false, timestamps: true }
);

const Brand = mongoose.model("Brand", brandSchema);
