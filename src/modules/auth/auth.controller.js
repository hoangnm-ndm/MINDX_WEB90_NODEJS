import { createResponse } from "../../common/configs/response.config";
import handleAsync from "../../common/utils/handle-async";
import MESSAGES from "./auth.message";
import { authLoginService, autRegisterService } from "./auth.service";

export const authRegister = handleAsync(async (req, res) => {
	const newUser = await autRegisterService(req.body);
	if (!newUser) {
		createResponse(res, 400, MESSAGES.REGISTER_FAILURE);
	}
	createResponse(res, 200, MESSAGES.REGISTER_SUCCESS, newUser);
});

export const authLogin = async (req, res) => {
	try {
		/**
		 * * Bước 1: Kiểm tra email có tồn tại không? -> Nếu tồn tại thì lấy ra user
		 * * Bước 2: So sánh mật khẩu
		 * * Bước 3: Tạo JWT (JSON Web Token)
		 * * Bước 4: Trả về response
		 */
		const existingUser = await authLoginService(req.body);
		if (!existingUser) {
			createResponse(res, 400, MESSAGES.LOGIN_FAILURE);
		}
		createResponse(res, 200, MESSAGES.LOGIN_SUCCESS, existingUser);
	} catch (error) {
		console.log(error);
	}
};
