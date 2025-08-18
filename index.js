import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/common/configs/database.config.js";
const PORT = 8080;

const app = express();

app.use(express.json());

connectDB();

app.use("/api", router);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
