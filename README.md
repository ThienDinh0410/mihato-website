# MiHaTo Website

Website doanh nghiệp MiHaTo — giới thiệu công ty, giải pháp, dự án, đào tạo, đội ngũ và kênh liên hệ.

## Yêu cầu phát triển

- Node.js 22.13 trở lên
- pnpm (khuyến nghị) hoặc npm

## Chạy local

```bash
pnpm install
pnpm dev
```

Hoặc:

```bash
npm install
npm run dev
```

Sau đó mở địa chỉ Vite hiển thị trong Terminal, mặc định thường là `http://localhost:5173`.

## Kiểm tra trước khi đưa lên GitHub

```bash
pnpm install
pnpm build
```

Không commit `node_modules`, file `.env`, output build, cache hoặc state local. Các mục này đã được khai báo trong `.gitignore`.

## Cấu trúc chính

- `app/`: các trang, component và nội dung website
- `app/globals.css`: giao diện, responsive và animation
- `public/`: logo, hình ảnh và media
- `scripts/`: script chạy framework
- `vite.config.ts`: cấu hình Vinext/Vite

## Ngôn ngữ

Website hỗ trợ tiếng Việt và tiếng Anh. Khi chỉnh nội dung mới, cần kiểm tra cả hai chế độ VI/EN trước khi deploy.

## Nội dung công khai

Chỉ sử dụng số liệu, khách hàng, dự án và thông tin thành viên đã được MiHaTo cho phép công bố. Các nội dung chưa xác nhận nên được xem là nội dung dự thảo.

## Chia sẻ cho người review

GitHub dùng để lưu và quản lý source code. Nếu người review chỉ cần mở website bằng trình duyệt mà không cài Node.js hay editor, hãy deploy repository lên một dịch vụ hosting phù hợp và gửi URL của bản deploy.
