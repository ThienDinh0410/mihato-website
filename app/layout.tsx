import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiHaTo | Công nghệ cho hành trình chăm sóc sức khỏe",
  description: "MiHaTo phát triển sản phẩm và giải pháp công nghệ kết nối quy trình, dữ liệu và con người trong hành trình chăm sóc sức khỏe.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
