import express from "express";
import { createResponse } from "./src/common/configs/response.config.js";

const users = [
	{ id: 1, name: "Hoang", age: 33 },
	{ id: 2, name: "MindX", age: 10 },
	{ id: 3, name: "Khoa", age: 18 },
];

const app = express();

// * middleware -> học kỹ sau.
app.use(express.json());

// * res.json() hay res.send() đều kết thúc request
// * res.json() được tối ưu hơn cho định dạng JSON.
// * res.send() tự động biến đổi dữ liệu khi response

app.get("/users/:id", (req, res) => {
	console.log(req.params);
	const user = users.find((item) => item.id == req.params.id);
	return createResponse(res, 200, "Lấy user theo id thành công!", user);
});

// * /users?maxAge=20
app.get("/users", (req, res) => {
	console.log(req.query);
});

app.post("/auth/login", (req, res) => {
	console.log(req.body);
});

app.listen(8080, () => {
	console.log("Server is running!");
});

/**
 * * Có 3 cách để gửi dữ liệu từ client về server
 * * req.params (/:id)
 * * req.query (?query1=value1&query2=value2)
 * * req.body (cần sử dụng middleware express.json())
 *
 */
