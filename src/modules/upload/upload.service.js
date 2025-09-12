import { v2 as cloudinary } from "cloudinary";
import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
} from "../../common/configs/environment.config.js";
import { MESSAGES } from "./upload.message.js";

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
});

export const uploadFileService = async (file) => {
	if (!file) {
		throw new Error(MESSAGES.NO_FILE_UPLOADED);
	}

	const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
	const fileName = file.originalname.split(".")[0];

	try {
		const result = await cloudinary.uploader.upload(dataUrl, {
			public_id: fileName,
			resource_type: "auto",
		});
		return {
			url: result.secure_url,
			public_id: result.public_id,
			file: {
				originalname: file.originalname,
				mimetype: file.mimetype,
				size: file.size,
			},
		};
	} catch (err) {
		throw new Error(`400: ${err.message}`);
	}
};

export const uploadFilesService = async (files) => {
	if (!files || files.length === 0) {
		throw new Error(MESSAGES.NO_FILE_UPLOADED);
	}

	const uploadPromises = files.map(async (file) => {
		const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
		const fileName = file.originalname.split(".")[0];

		try {
			const result = await cloudinary.uploader.upload(dataUrl, {
				public_id: fileName,
				resource_type: "auto",
			});
			return {
				url: result.secure_url,
				public_id: result.public_id,
				file: {
					originalname: file.originalname,
					mimetype: file.mimetype,
					size: file.size,
				},
			};
		} catch (err) {
			throw new Error(`400: ${err.message}`);
		}
	});

	return Promise.all(uploadPromises);
};
