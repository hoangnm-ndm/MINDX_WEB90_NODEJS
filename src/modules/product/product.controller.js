import { createResponse } from "../../common/configs/response.config.js";

const url = "http://localhost:3000/products";
export const getAllProduct = async (req, res) => {
	try {
		const data = await fetch(url).then((res) => res.json());

		console.log(data);
		createResponse(res, 200, "Lay danh sach san pham thanh cong", data);
	} catch (error) {
		console.log(error);
	}
};

export const getProduct = async (req, res) => {
	try {
		const data = await fetch(`${url}/${req.params.id}`).then((rs) => rs.json());
		createResponse(res, 200, "Lay san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};

export const removeProduct = async (req, res) => {
	try {
		const data = await fetch(`${url}/${req.params.id}`, {
			method: "DELETE",
		}).then((res) => res.json());
		createResponse(res, 200, "Xoa san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = async (req, res) => {
	try {
		const body = req.body;
		const data = await fetch(`${url}`, {
			body: JSON.stringify(body),
			method: "POST",
		}).then((res) => res.json());
		createResponse(res, 200, "Them san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (req, res) => {
	try {
		const body = req.body;
		const { id } = req.params;
		const data = await fetch(`${url}/${id}`, {
			body: JSON.stringify(body),
			method: "PATCH",
		}).then((res) => res.json());
		createResponse(res, 200, "Cap nhat san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};
