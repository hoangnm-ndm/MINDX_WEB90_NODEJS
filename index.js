import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/common/configs/database.config.js";
import {
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
	CLOUDINARY_NAME,
	HOST,
	PORT,
} from "./src/common/configs/environment.config.js";
import errorHandler from "./src/common/middlewares/error.middleware.js";
import notFoundHandler from "./src/common/middlewares/not-found.middleware.js";
import jsonValidator from "./src/common/middlewares/json-valid.middleware.js";
import cors from "cors";
import multer from "multer";

import { v2 as cloudinary } from "cloudinary";

const app = express();

app.use(express.json());

connectDB();

app.use(
	cors({
		// origin: "*",
		// methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
		// allowedHeaders: ["Content-Type", "Authorization"],
		// credentials: true,
	})
);

// * Cloudinary Configuration

cloudinary.config({
	cloud_name: CLOUDINARY_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({
	storage: storage,
	limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
});

app.post("/api/upload", upload.single("file"), (req, res) => {
	const file = req.file;

	if (!file) {
		console.log("Không nhận được tệp trong yêu cầu");
		return res.status(400).json({ error: "Không có tệp được tải lên." });
	}

	console.log("Tệp nhận được:", {
		originalname: file.originalname,
		mimetype: file.mimetype,
		size: file.size,
	});

	const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
	const fileName = file.originalname.split(".")[0];

	cloudinary.uploader.upload(
		dataUrl,
		{
			public_id: fileName,
			resource_type: "auto",
		},
		(err, result) => {
			if (err) {
				console.error("Lỗi Cloudinary:", err);
				return res.status(500).json({ error: "Lỗi khi tải lên Cloudinary", details: err.message });
			}
			if (result) {
				console.log("Tải lên Cloudinary thành công:", result.secure_url);
				res.json({
					message: "Tệp được tải lên thành công.",
					data: {
						originalname: file.originalname,
						mimetype: file.mimetype,
						size: file.size,
					},
					url: result.secure_url,
				});
			}
		}
	);
});

app.use("/api", router);

// Middleware xử lý JSON không hợp lệ
app.use(jsonValidator);

// Middleware xử lý route không tồn tại
app.use(notFoundHandler);

// Middleware xử lý lỗi chung
app.use(errorHandler);

const server = app.listen(PORT, () => {
	console.log(`Server is running on: http://${HOST}:${PORT}/api`);
});

// Middleware xử lý lỗi không xác định
process.on("unhandledRejection", (error, promise) => {
	console.error(`Error: ${error.message}`);
	server.close(() => process.exit(1));
});
