import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageIntro, SiteFooter, SiteHeader } from "../components";
const topics = [
  {
    title: "Sản phẩm y tế",
    text: "Cách sản phẩm được hình thành từ nhu cầu thực tế của cơ sở y tế và người sử dụng.",
  },
  {
    title: "Chuyển đổi số y tế",
    text: "Góc nhìn về quy trình, dữ liệu và những điều kiện cần để thay đổi có thể vận hành.",
  },
  {
    title: "Chăm sóc kết nối",
    text: "Những điểm chạm cần được nối liền trước, trong và sau quá trình chăm sóc.",
  },
  {
    title: "Hoạt động MiHaTo",
    text: "Cập nhật về sản phẩm, đào tạo, đội ngũ và các hoạt động đã được xác nhận.",
  },
];
export default function Insights() {
  return (
    <main className="new-site inner-page">
      <SiteHeader />
      <PageIntro
        eyebrow="TIN TỨC & GÓC NHÌN"
        title="Kiến thức được chia sẻ từ những vấn đề thực tế."
        lead="Nơi MiHaTo chia sẻ góc nhìn về sản phẩm, quy trình và công nghệ trong hành trình chăm sóc sức khỏe."
      />
      <section className="insight-feature">
        <div>
          <p className="section-index">ĐỊNH HƯỚNG NỘI DUNG</p>
          <h2>Từ kiến thức sức khỏe đến câu chuyện kết nối hệ thống.</h2>
          <p>
            Nội dung được chọn lọc để giúp người đọc hiểu vấn đề, cách tiếp cận
            và vai trò của công nghệ; các sự kiện hoặc hợp tác chỉ được đăng khi
            đã xác nhận.
          </p>
        </div>
        <figure>
          <Image
            src="/media/communications-healthcare.png"
            alt="Định hướng nội dung truyền thông về sức khỏe và hệ thống kết nối"
            fill
            sizes="55vw"
          />
        </figure>
      </section>
      <section className="insight-topics">
        {topics.map((x, i) => (
          <article key={x.title}>
            <span>0{i + 1}</span>
            <h2>{x.title}</h2>
            <p>{x.text}</p>
          </article>
        ))}
      </section>
      <section className="next-route">
        <p>KẾT NỐI</p>
        <h2>Có một chủ đề hoặc bài toán muốn trao đổi cùng MiHaTo?</h2>
        <Link href="/contact">
          Liên hệ MiHaTo <ArrowUpRight />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
