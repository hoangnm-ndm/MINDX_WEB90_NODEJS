import { throwError } from "../../common/configs/error.config.js";
import { comparePassword, hashPassword } from "../../common/utils/password-handler.js";
import User from "../user/user.model.js";
import MESSAGES from "./auth.message";

export const autRegisterService = async (userData) => {
	/**
	 * * Bước 1: Kiểm tra email đã tồn tại chưa?
	 * * Bước 2: Mã hóa mật khẩu
	 * * Bước 3: Tạo user
	 * * Bước 4: Trả về response
	 */
	const { email, password } = userData;
	const existingUser = await User.findOne({ email });
	if (existingUser) {
		throwError(400, MESSAGES.EMAIL_ALREADY_EXISTS);
	}

	const passwordHash = hashPassword(password);
	const newUser = await User.create({ ...userData, password: passwordHash });
	newUser.password = undefined;
	return newUser;
};

export const authLoginService = async (userData) => {
	const { email, password } = userData;
	const existingUser = await User.findOne({ email });
	if (!existingUser) {
		throwError(400, MESSAGES.INVALID_CREDENTIALS);
	}
	console.log(existingUser);
	const isPasswordValid = comparePassword(password, existingUser.password);
	if (!isPasswordValid) {
		throwError(400, MESSAGES.INVALID_CREDENTIALS);
	}
	// Tạo JWT (JSON Web Token) --- IGNORE ---
	existingUser.password = undefined;
	return existingUser;
};
