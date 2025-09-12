import dotenv from "dotenv";

dotenv.config({
	// configs option
});

// Thiết lập giá trị mặc định để server luôn lắng nghe khi thiếu biến môi trường
export const PORT = process.env.PORT || 8080;
export const HOST = process.env.HOST || "localhost";
export const DB_URI = process.env.DB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
