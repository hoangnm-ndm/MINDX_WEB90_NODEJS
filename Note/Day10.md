# Trong thực tế thì doanh nghiệp có dùng cloudinary không?

- Sử dụng những dịch vụ lưu trữ đám mây tương tự: cloudinary, S3 Storage AWS, Azure, ...
  - Đắt.
  - Setup sẵn, nhiều tính năng, công nghệ tích hợp. Chỉ việc dùng -> đơn giản.
- Tự cấu hình và lưu trữ trên VPS, Server vật lý.
  - Rẻ.
  - Tự chủ hoàn toàn về công nghệ
  - Phức tạp với người mới bắt đầu
  - Tốn kém nếu chỉ dùng thử và với gói cá nhân.

# Tại sao phải dùng nodejs cho việc upload file mà không phải dùng luôn bên phía client?

- Vì muốn nhiều quyền kiểm soát hơn với xử lý file
