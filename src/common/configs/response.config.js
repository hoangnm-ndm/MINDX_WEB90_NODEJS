/**
 *
 * @param {*} res - response object
 * @param {*} code - HTTP status code
 * @param {*} message - response message
 * @param {*} data - response data (usually an object or array)
 * @param {*} meta - additional metadata (like pagination info)
 * @returns {Object} - formatted response object
 */

export const createResponse = (res, code = 200, message, data, meta = null) => {
	return res.status(code).send({
		message: message || "Successfully!",
		data,
		meta,
	});
};
