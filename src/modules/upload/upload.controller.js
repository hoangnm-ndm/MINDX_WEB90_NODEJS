import { uploadFileService, uploadFilesService } from "./upload.service.js";
import { MESSAGES } from "./upload.message.js";
import handleAsync from "../../common/utils/handle-async.js";
import { createResponse } from "../../common/configs/response.config.js";

export const uploadFileController = handleAsync(async (req, res, next) => {
	const result = await uploadFileService(req.file);
	createResponse(res, 200, MESSAGES.UPLOAD_SUCCESS, result);
});

export const uploadFilesController = handleAsync(async (req, res, next) => {
	const result = await uploadFilesService(req.files);
	createResponse(res, 200, MESSAGES.UPLOAD_SUCCESS, result);
});
