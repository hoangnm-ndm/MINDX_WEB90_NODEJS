import mongoose from "mongoose";
import { USER_ROLE } from "../../common/constants/enum";

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		phoneNumber: { type: String },
		address: { type: String },
		role: { type: String, enum: Object.values(USER_ROLE), default: "member" },
		isBlocked: { type: Boolean, default: false },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
