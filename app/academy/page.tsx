import Image from "next/image";
import { ArrowUpRight, Code2, Compass, Workflow } from "lucide-react";
import Link from "next/link";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

const programs = [
  {
    icon: Compass,
    title: "Tư duy sản phẩm",
    text: "Bắt đầu từ vấn đề, người sử dụng và kết quả cần đạt trước khi lựa chọn giải pháp.",
    topics: [
      "Phân tích nhu cầu",
      "Xây dựng hành trình người dùng",
      "Xác định phạm vi sản phẩm",
    ],
  },
  {
    icon: Workflow,
    title: "Quy trình số",
    text: "Nhìn lại quy trình và thiết kế cách vận hành rõ ràng, nhất quán hơn.",
    topics: [
      "Phân tích quy trình",
      "Thiết kế luồng công việc",
      "Đo lường hiệu quả",
    ],
  },
  {
    icon: Code2,
    title: "Xây dựng sản phẩm số",
    text: "Tiếp cận cách tạo một phiên bản sản phẩm có mục tiêu và có thể kiểm chứng.",
    topics: [
      "Từ ý tưởng đến phiên bản đầu",
      "Thiết kế và kiểm thử",
      "Cải tiến theo phản hồi",
    ],
  },
];
export default function Academy() {
  return (
    <main className="new-site inner-page">
      <SiteHeader />
      <PageIntro
        eyebrow="MIHATO ACADEMY"
        title="Biến công nghệ thành năng lực của đội ngũ."
        lead="Chương trình đào tạo thực hành dành cho cá nhân, đội nhóm và doanh nghiệp muốn nâng cao tư duy sản phẩm, quy trình số và năng lực triển khai."
      />
      <section className="academy-visual"><Image src="/media/mihato-meeting-space.png" alt="MiHaTo Academy" fill sizes="100vw"/><div><p>LEARN · BUILD · APPLY</p><h2>Đào tạo gắn với tình huống thật và sản phẩm thật.</h2></div></section><section className="academy-programs" id="chuong-trinh">
        {programs.map((x, i) => {
          const Icon = x.icon;
          return (
            <article key={x.title} tabIndex={0}>
              <div>
                <span>0{i + 1}</span>
                <Icon />
              </div>
              <p>CHƯƠNG TRÌNH</p>
              <h2>{x.title}</h2>
              <h3>{x.text}</h3>
              <ul>
                {x.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>
      <section className="academy-approach">
        <div>
          <p className="section-index">CÁCH MIHATO ĐÀO TẠO</p>
          <h2>
            Học từ tình huống thật.
            <br />
            Làm được ngay sau buổi học.
          </h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <strong>Hiểu vấn đề</strong>
            <p>Xác định mục tiêu và bối cảnh của đội ngũ.</p>
          </li>
          <li>
            <span>02</span>
            <strong>Thực hành</strong>
            <p>Làm trực tiếp trên tình huống gần với công việc.</p>
          </li>
          <li>
            <span>03</span>
            <strong>Ứng dụng</strong>
            <p>Chuyển kiến thức thành quy trình có thể tiếp tục sử dụng.</p>
          </li>
        </ol>
      </section>
      <section className="next-route">
        <p>BẮT ĐẦU</p>
        <h2>Trao đổi về chương trình phù hợp với đội ngũ của bạn.</h2>
        <Link href="/contact">
          Liên hệ MiHaTo <ArrowUpRight />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
