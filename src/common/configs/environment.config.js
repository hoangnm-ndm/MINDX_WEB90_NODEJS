import dotenv from "dotenv";

dotenv.config({
	// configs option
});

export const { PORT, DB_URI, HOST, JWT_SECRET, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
	process.env;
