# Các bước làm service

1. Nghiên cứu khảo sát thị trường và chọn đề tài vừa sức, phù hợp nguyện vọng.
2. Vẽ, thiết kế sơ đồ quan hệ thực thể (ERD).
3. Khởi tạo source base cho dự án
   1. Cấu hình route,
   2. Biến môi trường,
   3. Cài các thư viện cần thiết,
   4. Cấu hình kết nối database,
   5. Prettier, ESLint.
   6. Cấu hình route cho các module.
   7. Viết trước các model đã chắc chắn.
4. Viết từng module:
   1. Viết các schema, model.
   2. Viết các service (nếu cần).
   3. Viết các controller.
   4. Viết các router.
   5. Viết các middleware (nếu cần)
