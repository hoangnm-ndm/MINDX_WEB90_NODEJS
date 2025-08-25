import { createResponse } from "../configs/response.config.js";

const validBodyRequest = (schema) => (req, res, next) => {
	try {
		const data = schema.parse(req.body);
		req.body = data;
		next();
	} catch (error) {
		console.log(error.message);
		if (error.errors && Array.isArray(error.errors)) {
			const allMessages = error.errors.map((err) => err.path + ": " + err.message).join("; ");
			next(createResponse(res, 400, allMessages));
		}
		return next(createResponse(res, 400, "Invalid request"));
	}
};

export default validBodyRequest;
