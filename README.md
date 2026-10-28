# Đỗ Văn Thuỳ 1975 🍃

Website giới thiệu + liên hệ cho hộ kinh doanh **Đỗ Văn Thuỳ 1975**, chuyên cung cấp lá chuối, hoa chuối, chuối xanh.
Web tĩnh (HTML + CSS + JS thuần), responsive, có animation — không cần backend.

## Cấu trúc thư mục

```
website-hoaqua/
├── index.html          # Toàn bộ nội dung trang
├── css/style.css       # Giao diện — màu sắc tập trung ở :root (CSS variables)
├── js/main.js          # Menu, hiệu ứng cuộn, lightbox ảnh giấy phép
├── images/
│   ├── products/       # Ảnh 3 sản phẩm: lá chuối, hoa chuối, chuối xanh
│   ├── hero/           # Ảnh banner + ảnh giới thiệu
│   └── license/        # Đặt ảnh giấy phép kinh doanh tại đây
└── README.md
```

## Cách chỉnh nội dung

### 1. Thông tin hộ kinh doanh & liên hệ
Mở `index.html`, tìm các dòng sau và thay bằng thông tin thật:
- Thông tin giấy phép đã điền sẵn: Số đăng ký `001075030629`, Nơi cấp `Phòng Kinh tế - Hạ tầng và Đô thị`, Ngày cấp `21/05/2026` (chỉnh trong `index.html` nếu cần).
- Số điện thoại liên hệ: `0834 385 046` (đổi ở mọi liên kết `tel:0834385046`).

### 2. Đổi ảnh sản phẩm / thêm sản phẩm mới
- Ảnh sản phẩm nằm ở `images/products/`. Thay ảnh mới vào đúng tên file (`la-chuoi.jpg`, `hoa-chuoi.jpg`, `chuoi-xanh.jpg`), hoặc đổi đường dẫn `src` trong `index.html`.
- Ảnh hiện tại là ảnh minh hoạ tải từ mạng — bạn nên thay bằng ảnh thật của cửa hàng (lưu ý sản phẩm thứ 3 phải là **chuối xanh**, không phải chuối chín).
- Nút **Gọi** ở mỗi sản phẩm bấm vào sẽ gọi điện thoại trực tiếp tới hotline.

### 3. Ảnh giấy phép kinh doanh
- Ảnh đã đặt tại `images/license/giay-phep.png` và đã hiển thị trong `index.html` — bấm vào để phóng to.
- Muốn thay ảnh khác: ghi đè file `giay-phep.png` (hoặc đổi `src` trong `index.html` cho khớp tên file).

### 4. Đổi màu sắc toàn site
Mở `css/style.css`, sửa các giá trị trong khối `:root` (đầu file). Toàn bộ màu chủ đạo, nền, chữ, bo góc, đổ bóng đều nằm ở đó.

## Chạy thử ở máy
Mở thẳng file `index.html` bằng trình duyệt (double-click) là xem được, không cần cài gì.

## Deploy lên GitHub Pages
1. Tạo repository trên GitHub và đẩy thư mục này lên.
2. Vào **Settings → Pages → Source: Deploy from a branch → chọn nhánh `main`, thư mục `/ (root)` → Save**.
3. Vài phút sau website sẽ có tại `https://<tên-tài-khoản>.github.io/<tên-repo>/`.
