import { z } from "zod";

// Chia thành 2 schemas: create and update
export const createProductSchema = z
	.object({
		title: z.string().min(1, "Title is required"),
		price: z.number().min(0, "Price must be a positive number"),
		description: z.string().optional(),
		category: z.string(),
	})
	.strict();

export const updateProductSchema = z
	.object({
		title: z.string().min(1, "Title is required").optional(),
		price: z.number().min(0, "Price must be a positive number").optional(),
		description: z.string().optional(),
	})
	.strict()
	.refine((data) => Object.keys(data).length > 0, {
		message: "At least one field must be provided for update",
	});
