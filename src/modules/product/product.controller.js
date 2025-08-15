import { createResponse } from "../../common/configs/response.config.js";
import instance from "../../common/services/axios.js";

export const getAllProduct = async (req, res) => {
	try {
		const { data } = await instance.get("/products");
		createResponse(res, 200, "Lay danh sach san pham thanh cong", data);
	} catch (error) {
		console.log(error);
	}
};

export const getProduct = async (req, res) => {
	try {
		const { data } = await instance.get(`/products/${req.params.id}`);
		createResponse(res, 200, "Lay san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};

export const removeProduct = async (req, res) => {
	try {
		const { data } = await instance.delete(`/products/${req.params.id}`);
		createResponse(res, 200, "Xoa san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = async (req, res) => {
	try {
		const body = req.body;
		const data = await instance.post(`/products/`, body);
		createResponse(res, 200, "Them san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (req, res) => {
	try {
		const body = req.body;
		const { id } = req.params;
		console.log(id);
		const { data } = await instance.patch(`/products/${id}`, body);
		createResponse(res, 200, "Cap nhat san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};
