## MÔ tả cấu trúc dự án:

- **bootstrap**
  Tài nguyên bootstrap framework

- **src**  
  html,js và css sẽ nằm trong này

- **assets**  
  Thư mục này chứa tất cả các tài nguyên hình ảnh được sử dụng trong dự án. Các hình ảnh được phân loại theo trang sử dụng, ví dụ như:

  - **homePage**: Chứa các ảnh cho trang chủ (ví dụ: `example.png`).
  - **subPage1**: Chứa các ảnh cho trang phụ 1 (ví dụ: `example.png`).
  - **public**: chứa tài nguyên chung của pj (chứa ảnh sp)

- **css**  
  Chứa các file CSS dùng để định dạng giao diện cho trang web. Các file CSS được phân chia theo chức năng của từng trang:

  - **homPage**: File `main.css` dùng cho trang chủ.
  - **subPage1**: File `style.css` dùng cho trang phụ 1.

- **script**  
  Thư mục này chứa các file JavaScript giúp thêm tính năng động và tương tác cho trang web:

  - **homPage**: File `main.js` xử lý các tương tác trên trang chủ.
  - **subPage1**: script của trang phụ, tạo thêm cho từng người.

- **Page**  
  - `main.html`: Trang chủ của dự án.
  - Tạo các thư mục theo vai trò của từng nhóm trang
    - `page1.html`: Trang phụ 1 của dự án. (có thể đổi tên theo chức năng như `login.html`,`introduce.html`,...)

## Hướng Dẫn Sử Dụng

1. **Khởi chạy trang chủ:** Mở file `main.html` trong trình duyệt để xem giao diện trang chủ.
2. **Xem trang phụ:** xử dụng các nút/object trong main.html để link với các trang phụ

## Ghi Chú (Quan trọng)

- Nếu cần thêm tài nguyên (ảnh, CSS, JS) cho các trang khác, có thể tạo thêm thư mục tương ứng bên trong các thư mục **assets**, **css**, và **script** (theo từng phần của mỗi người).
- Đặt tên file và thư mục được sử dụng thống nhất theo vai trò từng người
- Không chỉnh sửa hay động vào code người khác, chỉ thao tác trên code của bản thân
- nhớ pull trước khi push lên github (`git pull origin master`)
- nếu xảy ra conllíons thì nhắn tui trước khi sửa

---
