import { Router } from "express";
import multer from "multer";
import { uploadFileController, uploadFilesController } from "./upload.controller.js";

const storage = multer.memoryStorage();
const upload = multer({
	storage: storage,
	limits: { fileSize: 10 * 1024 * 1024 }, // Giới hạn 10MB
});

const uploadRoutes = Router();

// POST http://localhost:8080/api/upload/file
uploadRoutes.post("/file", upload.single("file"), uploadFileController);

// POST http://localhost:8080/api/upload/files
uploadRoutes.post("/files", upload.array("files", 10), uploadFilesController);

export default uploadRoutes;
