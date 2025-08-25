import dotenv from "dotenv";

dotenv.config({
	// configs option
});

export const { PORT, DB_URI, HOST } = process.env;
