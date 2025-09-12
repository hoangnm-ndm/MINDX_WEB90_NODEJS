import { Router } from "express";
import multer from "multer";
import { uploadFileController, uploadFilesController } from "./upload.controller.js";

const storage = multer.memoryStorage();
const upload = multer({
	storage: storage,
	limits: { fileSize: 10 * 1024 * 1024 }, // Giới hạn 10MB
});

const uploadRoutes = Router();
uploadRoutes.post("/file", upload.single("file"), uploadFileController);
uploadRoutes.post("/files", upload.array("files", 10), uploadFilesController); // Giới hạn 10 tệp

export default uploadRoutes;
