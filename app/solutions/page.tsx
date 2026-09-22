"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  HeartPulse,
  Hospital,
  Workflow,
} from "lucide-react";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

const items = [
  {
    title: "PPMS",
    image: "/media/mihato-exhibition-booth-hd.png",
    tag: "Vận hành cơ sở y tế",
    icon: Hospital,
    summary:
      "Nền tảng hỗ trợ quản lý quy trình phòng khám từ tiếp nhận đến vận hành hằng ngày.",
    body: "PPMS hướng đến một luồng làm việc thống nhất, nơi lịch, thông tin người bệnh, nhiệm vụ và trạng thái vận hành được kết nối rõ ràng.",
    points: [
      "Tiếp nhận và quản lý lịch",
      "Phối hợp công việc giữa các vai trò",
      "Dữ liệu vận hành có cấu trúc",
    ],
    details: [
      "Tiếp nhận thông tin người bệnh, nhu cầu khám và lịch hẹn trong một luồng rõ ràng; hỗ trợ kiểm tra trạng thái, điều phối lịch và giảm nhập liệu lặp lại.",
      "Phân tách trách nhiệm theo vai trò như tiếp nhận, bác sĩ, điều dưỡng và quản lý; mỗi người nhìn thấy đúng công việc và trạng thái cần xử lý.",
      "Chuẩn hóa dữ liệu lịch, người bệnh, tác vụ và trạng thái để dễ tra cứu, báo cáo và sẵn sàng tích hợp với các hệ thống khác."
    ],
  },
  {
    title: "Telecare",
    image: "/media/telecare-brand-mark.png",
    tag: "Chăm sóc tại nhà",
    icon: HeartPulse,
    summary:
      "Duy trì kết nối giữa người bệnh và đội ngũ chăm sóc sau khi rời cơ sở y tế.",
    body: "Telecare hỗ trợ người bệnh theo dõi kế hoạch sức khỏe, ghi nhận chỉ số và liên hệ đội ngũ phụ trách trong một hành trình liên tục.",
    points: [
      "Theo dõi chỉ số tại nhà",
      "Nhắc thuốc, đo chỉ số và tái khám",
      "Kết nối với đội ngũ chăm sóc",
    ],
    details: [
      "Người bệnh có thể ghi nhận chỉ số sức khỏe theo kế hoạch và giúp đội ngũ phụ trách theo dõi diễn biến từ xa.",
      "Tổ chức nhắc việc theo kế hoạch chăm sóc như dùng thuốc, đo chỉ số hoặc lịch tái khám để hành trình không bị gián đoạn.",
      "Tạo một điểm kết nối rõ ràng giữa người bệnh và đội ngũ chăm sóc cho trao đổi, hướng dẫn và theo dõi sau khám."
    ],
  },
  {
    title: "Healthcare Software",
    image: "/media/development-team.png",
    tag: "Giải pháp theo nhu cầu",
    icon: Code2,
    summary:
      "Thiết kế và phát triển phần mềm phù hợp với nghiệp vụ thực tế của tổ chức.",
    body: "Từ khảo sát đến triển khai, MiHaTo đồng hành để biến bài toán vận hành thành một giải pháp rõ ràng, dễ sử dụng và có thể mở rộng.",
    points: [
      "Phân tích nghiệp vụ",
      "Thiết kế trải nghiệm và kiến trúc",
      "Phát triển, kiểm thử và cải tiến",
    ],
    details: [
      "Làm rõ người dùng, quy trình, dữ liệu đầu vào/đầu ra và các business rule trước khi thiết kế giải pháp.",
      "Chuyển nghiệp vụ thành luồng trải nghiệm, mô hình dữ liệu và kiến trúc có khả năng phát triển theo giai đoạn.",
      "Triển khai theo phiên bản, kiểm thử với tình huống thực tế, thu phản hồi và cải tiến thay vì dừng ở bản bàn giao đầu tiên."
    ],
  },
  {
    title: "Data & Integration",
    image: "/media/healthcare-data-integration.png",
    tag: "Kết nối dữ liệu",
    icon: Database,
    summary: "Tạo dòng dữ liệu liền mạch giữa các hệ thống và điểm chạm.",
    body: "MiHaTo giúp tổ chức giảm nhập liệu lặp lại, chuẩn hóa cách trao đổi dữ liệu và xây dựng góc nhìn phục vụ quản trị.",
    points: [
      "API và tích hợp hệ thống",
      "Chuẩn hóa luồng dữ liệu",
      "Báo cáo hỗ trợ quyết định",
    ],
    details: [
      "Kết nối hệ thống qua API hoặc cơ chế tích hợp phù hợp để dữ liệu có thể luân chuyển giữa các điểm chạm.",
      "Thống nhất cấu trúc và quy tắc dữ liệu, giảm sai lệch khi nhiều hệ thống cùng trao đổi thông tin.",
      "Tổ chức dữ liệu thành các chỉ số và góc nhìn quản trị giúp đội ngũ theo dõi vận hành và ra quyết định rõ hơn."
    ],
  },
  {
    title: "Chuyển đổi số",
    image: "/media/healthcare-digital-transformation.png",
    tag: "Chuẩn hóa vận hành",
    icon: Workflow,
    summary:
      "Rà soát và cải tiến quy trình để công nghệ tạo ra thay đổi có thể sử dụng lâu dài.",
    body: "MiHaTo bắt đầu từ hiện trạng vận hành, xác định điểm nghẽn và thiết kế lộ trình phù hợp với nguồn lực của tổ chức.",
    points: [
      "Khảo sát quy trình hiện tại",
      "Đề xuất lộ trình triển khai",
      "Đo lường và cải tiến",
    ],
    details: [
      "Quan sát quy trình đang vận hành, xác định điểm nghẽn, thao tác lặp và các điểm có thể số hóa.",
      "Ưu tiên hạng mục theo giá trị và nguồn lực, chia lộ trình thành các giai đoạn có thể triển khai và kiểm chứng.",
      "Theo dõi kết quả sau triển khai, thu phản hồi từ người dùng và tiếp tục điều chỉnh quy trình lẫn sản phẩm."
    ],
  },
  {
    title: "MiHaTo Academy",
    image: "/media/mihato-meeting-space.png",
    imagePosition: "left center",
    tag: "Phát triển năng lực",
    icon: GraduationCap,
    summary:
      "Giúp cá nhân và tổ chức hiểu, sử dụng và làm chủ công nghệ trong công việc.",
    body: "Nội dung đào tạo gắn với tình huống thực tế để kiến thức có thể chuyển thành cách làm rõ ràng, có thể tiếp tục áp dụng.",
    points: [
      "Tư duy sản phẩm",
      "Quy trình và công cụ số",
      "Thực hành theo tình huống",
    ],
    details: [
      "Rèn cách xác định vấn đề, người dùng, giá trị và phạm vi trước khi lựa chọn công nghệ hoặc bắt đầu xây dựng.",
      "Tiếp cận workflow, dữ liệu, automation và công cụ số theo cách gắn với công việc thực tế.",
      "Học thông qua bài toán và sản phẩm mẫu để người học có thể áp dụng lại cách làm vào môi trường của mình."
    ],
  },
];
export default function Solutions() {
  const [active, setActive] = useState(0);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const item = items[active];
  const Icon = item.icon;
  return (
    <main className="new-site inner-page">
      <SiteHeader />
      <PageIntro
        eyebrow="GIẢI PHÁP"
        title="Một hệ sinh thái cho hành trình chăm sóc liền mạch."
        lead="Từ vận hành cơ sở y tế, chăm sóc tại nhà đến dữ liệu, chuyển đổi số và đào tạo — mỗi năng lực được kết nối quanh một mục tiêu chung: tạo ra giá trị sử dụng thực tế."
      />
      <section className="solutions-visual"><Image src="/media/healthcare-digital-transformation.png" alt="Hệ sinh thái giải pháp MiHaTo" fill sizes="100vw"/><div><p>CONNECTED DIGITAL ECOSYSTEM</p><h2>Từ dữ liệu đến trải nghiệm — mọi điểm chạm cần được kết nối.</h2></div></section><section className="solution-switcher">
        <nav aria-label="Danh sách giải pháp">
          {items.map((x, i) => (
            <button
              key={x.title}
              className={i === active ? "active" : ""}
              onClick={() => { setActive(i); setActivePoint(null); }}
            >
              <span>0{i + 1}</span>
              <strong>{x.title}</strong>
              <small>{x.tag}</small>
            </button>
          ))}
        </nav>
        <article key={item.title}>
          <div className="solution-visual">
            <Image
              src={item.image}
              alt={`Minh họa ${item.title}`}
              fill
              sizes="60vw"
              style={{
                objectPosition:
                  "imagePosition" in item ? item.imagePosition : "center",
              }}
            />
            <div />
            <Icon />
          </div>
          <div className="solution-content">
            <p>{item.tag}</p>
            <h2>{item.title}</h2>
            <strong>{item.summary}</strong>
            <p>{item.body}</p>
            <ul>
              {item.points.map((x, i) => (
                <li key={x}>
                  <button type="button" className="solution-point-button" onClick={() => setActivePoint(activePoint === i ? null : i)} aria-expanded={activePoint === i}>
                    <span>{x}</span><ArrowUpRight />
                  </button>
                  {activePoint === i && <div className="solution-point-detail"><b>{x}</b><p>{item.details[i]}</p></div>}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
