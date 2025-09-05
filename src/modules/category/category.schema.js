import { z } from "zod";

// Chia thành 2 schemas: create and update
export const createCategorySchema = z
	.object({
		title: z.string().min(1, "Title is required"),
		description: z.string().optional(),
	})
	.strict();

// export const updateProductSchema = z
// 	.object({
// 		title: z.string().min(1, "Title is required").optional(),
// 		price: z.number().min(0, "Price must be a positive number").optional(),
// 		description: z.string().optional(),
// 	})
// 	.strict()
// 	.refine((data) => Object.keys(data).length > 0, {
// 		message: "At least one field must be provided for update",
// 	});
