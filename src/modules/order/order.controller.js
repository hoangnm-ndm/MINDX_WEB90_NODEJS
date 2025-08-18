import instance from "../../common/services/axios";

export const getOrderByCustomerId = async (req, res) => {
	try {
		const { customerId } = req.params;
		const { data } = await instance.get(`/orders/${customerId}`);
		createResponse(res, 200, "Lay san pham thanh cong!", data);
	} catch (error) {
		console.log(error);
	}
};
