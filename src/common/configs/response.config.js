/**
 *
 * @param {*} res - Express Response Object
 * @param {*} code - HTTP Status Code
 * @param {*} message - Message
 * @param {*} data - Response Data
 * @param {*} meta - Additional Info (pagination, total records, ...)
 * @returns {Object} - Response Object
 */

export const createResponse = (res, code = 200, message, data, meta) => {
  return res.status(code).send({
    message: message || "Successfully!",
    data,
    meta, // các thông tin phụ như phân trang, tổng số bản ghi, ... sau này sẽ dùng.
  });
};
