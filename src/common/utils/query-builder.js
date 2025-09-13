import mongoose from "mongoose";
import { throwError } from "../configs/error.config.js";
import MES_COMMON from "../configs/messages.config.js";

const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export const queryBuilder = async (Model, queryParams, options = {}) => {
  const {
    page = 1,
    limit = 10,
    sort = "createdAt",
    order = "desc",
    search,
    searchFields = [],
    isDeleted,
    ...filters
  } = queryParams;

  const { populate = [] } = options;

  // Xây dựng điều kiện truy vấn
  const queryConditions = {};

  // Xử lý soft delete
  if (isDeleted === "false") {
    queryConditions.deletedAt = null;
  }
  if (isDeleted === "true") {
    queryConditions.deletedAt = { $ne: null };
  }

  // Áp dụng bộ lọc từ query parameters
  Object.entries(filters).forEach(([key, value]) => {
    if (value == null || value === "") return;

    // Boolean
    if (value === "true" || value === "false") {
      queryConditions[key] = value === "true";
      return;
    }

    // Number
    if (
      typeof value === "string" &&
      value.trim() !== "" &&
      !isNaN(Number(value))
    ) {
      queryConditions[key] = Number(value);
      return;
    }

    // ObjectId
    if (mongoose.Types.ObjectId.isValid(value)) {
      queryConditions[key] = value;
      return;
    }

    // String → Sử dụng RegExp trực tiếp
    if (typeof value === "string" && value.trim() !== "") {
      console.log(`Applying regex for filter ${key}:`, value);
      queryConditions[key] = new RegExp(escapeRegex(value), "i");
      return;
    }

    // Fallback
    queryConditions[key] = value;
  });

  // Áp dụng tìm kiếm nếu có
  if (search && searchFields.length > 0 && search.trim() !== "") {
    console.log("Applying regex for search:", search);
    const searchRegex = new RegExp(escapeRegex(search), "i");
    queryConditions.$or = searchFields.map((field) => ({
      [field]: searchRegex,
    }));

    // Loại bỏ các trường trong searchFields khỏi queryConditions để tránh xung đột
    searchFields.forEach((field) => {
      delete queryConditions[field];
    });
  }

  // Tạo truy vấn Mongoose với các điều kiện
  let query = Model.find(queryConditions);

  // Áp dụng population nếu có
  if (populate.length > 0) {
    populate.forEach((pop) => {
      query = query.populate({
        path: pop.path,
        select: pop.select || "name",
      });
    });
  }

  // Áp dụng sắp xếp
  const sortOrder = order === "desc" ? -1 : 1;
  query = query.sort({ [sort]: sortOrder });

  // Áp dụng phân trang
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;
  query = query.skip(skip).limit(limitNum);

  // Thực thi truy vấn
  const total = await Model.countDocuments(queryConditions);
  const data = await query.exec();

  return {
    data,
    meta: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    },
  };
};
