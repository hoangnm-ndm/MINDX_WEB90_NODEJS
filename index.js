import http from "http";

const foods = [
	{
		id: 1,
		title: "Suon Xao chua ngot",
		price: 100,
	},
	{
		id: 2,
		title: "nuoc loc",
		price: 4,
	},
];

const callback = (request, response) => {
	console.log(typeof response);
	console.log({ response });
	response.write("hello");
	response.write("hello");
	response.write("hello");
	response.write("hello");
	response.end("Hello mindX");
	// response.end("Hello mindX");
};

// * Định tuyến = phân chia các công việc thành các tuyến đường riêng để xử lý tuỳ theo yêu cầu từ client.

// GET, POST, PUT, PATCH, DELETE
const app = http.createServer(callback);

app.listen(8080, () => {
	console.log("Server is running!");
});
