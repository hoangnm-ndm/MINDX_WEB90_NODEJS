import handleAsync from "../../common/utils/handle-async";

export const getOrderByCustomerId = handleAsync(async (req, res) => {
	const { customerId } = req.params;
	const { data } = await instance.get(`/orders/${customerId}`);
	createResponse(res, 200, "Lay san pham thanh cong!", data);
});
