# Quan hệ trong mongodb

## Quan hệ 1-1 (one to one)

- Mỗi document trong collection này liên kết với một document duy nhất trong collection khác.
- Ví dụ: Mỗi người dùng có một hồ sơ cá nhân duy nhất.

-> Không nhất thiết cần phải tách ra 2 collection trừ khi có lý do đặc biệt (ví dụ: tính riêng tư, bảo mật, hoặc kích thước lớn của dữ liệu).

- Cách triển khai:
  - Nhúng (Embedding): Chèn toàn bộ document của một collection vào document của collection khác (được khuyến khích)
  - Tham chiếu (Referencing): Sử dụng ObjectId để tham chiếu đến document trong collection khác.

## Quan hệ 1-1 vài (one to few)

- Mỗi document chỉ có liên kết với hữu hạn document trong collection khác.
- Ví dụ như cửa hàng chỉ kinh doanh vài thương hiệu và không có nhu cầu mở rộng về đa dạng hoá thương hiệu trong tương lai.

-> Có thể nhúng (embedding).

## Quan hệ 1-nhiều (one to many)

- Mỗi document trong collection này có thể liên kết với nhiều document trong collection khác.
- Ví dụ: Một bài viết có thể có nhiều bình luận.

-> Khuyến nghị sử dụng tham chiếu (referencing) để tránh việc document trở nên quá lớn và khó quản lý.

## Quan hệ nhiều-nhiều (many to many)

- Mỗi document trong collection này có thể liên kết với nhiều document trong collection khác và ngược lại.
- Ví dụ: Một sinh viên có thể đăng ký nhiều khóa học, và một khóa học có thể có nhiều sinh viên đăng ký.

-> Sử dụng tham chiếu (referencing) để quản lý mối quan hệ phức tạp này và phân rã 1 quan hệ nhiều - nhiều thành 2 quan hệ 1 - nhiều.

## Quan hệ 1 - rất nhiều (one to very many)

- Mỗi document trong collection này có thể liên kết với một số lượng rất lớn document trong collection khác.
- Ví dụ: 1 sản phẩm có thể có hàng trăm linh kiện và đi qua hàng trăm bước sản xuất.

-> Sử dụng tham chiếu (referencing) để tránh việc document trở nên quá lớn và khó quản lý.
