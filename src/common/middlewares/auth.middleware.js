import { verifyToken } from "../utils/jwt.js";
import { createResponse } from "../configs/response.config";

export const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		createResponse(res, 401, "Unauthorized: No token provided");
	}

	const token = authHeader.split(" ")[1];
	try {
		// Giả sử bạn có hàm verifyToken để xác thực token
		const decoded = verifyToken(token, process.env.JWT_SECRET);
		req.user = decoded; // Gán thông tin người dùng vào req.user
		next();
	} catch (error) {
		createResponse(res, 401, "Unauthorized: Invalid token");
	}
};

export const restrictTo = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			createResponse(res, 403, "Forbidden: You do not have permission to perform this action");
		}
		next();
	};
};
