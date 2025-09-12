import dotenv from "dotenv";

dotenv.config({
	// configs option
});

export const {
	DB_URI,
	PORT,
	LANGUAGE,
	HOST,
	JWT_SECRET,
	JWT_EXPIRES_IN,
	CLOUDINARY_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
} = process.env;
