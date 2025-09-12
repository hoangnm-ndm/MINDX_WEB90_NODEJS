import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/common/configs/database.config.js";
import { HOST, PORT } from "./src/common/configs/environment.config.js";
import errorHandler from "./src/common/middlewares/error.middleware.js";
import notFoundHandler from "./src/common/middlewares/not-found.middleware.js";
import jsonValidator from "./src/common/middlewares/json-valid.middleware.js";
import cors from "cors";

const app = express();

app.use(express.json());

connectDB();

app.use(cors({}));

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
