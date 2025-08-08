import express from "express";
import { customers, products, orders } from "./data.js";

const PORT = 8888;

const app = express();

app.get("/", (req, res) => {
	res.send("endpoint!");
});

app.get("/login", (req, res) => {
	res.send("login thanh cong!");
});

app.get("/customers", (req, res) => {
	console.log(req.query);
	res.send("Lay danh sach khach hang");
});

app.get("/customers/:id", (req, res) => {
	res.send("Lay thong tin khach hang co id la: ", req.params.id);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
