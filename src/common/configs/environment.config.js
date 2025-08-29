import dotenv from "dotenv";

dotenv.config({
	// configs option
});

export const { PORT, DB_URI, HOST, JWT_SECRET } = process.env;
