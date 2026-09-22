import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight, Apple, Building2, CheckCircle2, Code2, Database,
  GraduationCap, HeartPulse, Hospital, Layers3, Play,
  ShieldCheck, Sparkles, Users, Workflow, Zap
} from "lucide-react";
import { BriefButton, SiteFooter, SiteHeader } from "./components";

const solutions = [
  { icon: Hospital, title: "PPMS", text: "Nền tảng hỗ trợ quản lý vận hành cơ sở y tế trong một luồng rõ ràng.", href: "/solutions" },
  { icon: HeartPulse, title: "TeleCare", text: "Duy trì kết nối giữa người bệnh và đội ngũ chăm sóc sau khi rời cơ sở y tế.", href: "/solutions" },
  { icon: Code2, title: "Product Engineering", text: "Phân tích, thiết kế và phát triển sản phẩm số theo nhu cầu thực tế.", href: "/solutions" },
  { icon: Database, title: "Data & Integration", text: "Chuẩn hóa và kết nối dữ liệu giữa các hệ thống, giảm thao tác lặp lại.", href: "/solutions" },
  { icon: Workflow, title: "Chuyển đổi số", text: "Thiết kế lộ trình cải tiến quy trình phù hợp với nguồn lực của tổ chức.", href: "/solutions" },
  { icon: GraduationCap, title: "MiHaTo Academy", text: "Đào tạo công nghệ, AI, automation và tư duy sản phẩm theo hướng thực hành.", href: "/academy" },
];

const projects = [
  { title: "Chuyển đổi số HIS — Nhi Đồng 315", tag: "Healthcare", image: "/media/mihato-healthcare-experience.png", meta: "Chuỗi 200+ phòng khám", text: "Hệ thống HIS đồng bộ cho mô hình chuỗi, hướng đến vận hành thống nhất và khả năng mở rộng." },
  { title: "ERP Tổng thể", tag: "Enterprise", image: "/media/healthcare-data-integration.png", meta: "Quản trị doanh nghiệp", text: "Chuẩn hóa quy trình, tập trung dữ liệu và tự động hóa các nghiệp vụ vận hành." },
  { title: "TeleCare", tag: "Digital Health", image: "/media/telecare-store.png", meta: "Mobile healthcare", text: "Ứng dụng hỗ trợ theo dõi kế hoạch chăm sóc và kết nối người bệnh với đội ngũ y tế." },
  { title: "MiHaTo Academy", tag: "Education", image: "/media/mihato-meeting-space.png", meta: "AI & Digital Skills", text: "Chương trình thực hành về AI, automation, Vibe Coding và chuyển đổi số." },
];

export default function Home() {
  return (
    <main className="mihato-v19">
      <SiteHeader />

      <section className="v19-hero" id="top">
        <div className="v19-grid" />
        <div className="v19-orb v19-orb-a" /><div className="v19-orb v19-orb-b" />
        <div className="v19-hero-copy v19-reveal">
          <div className="v19-pill"><Sparkles size={14}/> Technology • Healthcare • Product</div>
          <h1>Kiến tạo <span>giải pháp số</span><br/>cho vận hành hiện đại.</h1>
          <p>MiHaTo kết hợp tư duy sản phẩm, năng lực kỹ thuật và hiểu biết quy trình để xây dựng những hệ thống có thể vận hành, đo lường và tiếp tục mở rộng.</p>
          <div className="v19-actions">
            <Link className="v19-primary" href="/solutions">Khám phá giải pháp <ArrowUpRight/></Link>
            <Link className="v19-secondary" href="/projects">Xem dự án</Link>
          </div>
          <div className="v19-stats">
            <div><strong>200+</strong><span>phòng khám trong case HIS</span></div>
            <div><strong>End-to-end</strong><span>từ khảo sát đến triển khai</span></div>
            <div><strong>Multi-role</strong><span>thiết kế theo vai trò vận hành</span></div>
          </div>
        </div>
        <div className="v19-hero-visual v19-reveal delay-1">
          <div className="v19-phone-card"><Image src="/media/mihato-app-phone.png" alt="Ứng dụng MiHaTo" fill sizes="45vw" priority /></div>
          <div className="v19-float-card fc-one"><HeartPulse/><div><b>Healthcare Products</b><span>Connected care experience</span></div></div>
          <div className="v19-float-card fc-two"><Zap/><div><b>AI-Powered</b><span>Engineering & automation</span></div></div>
        </div>
      </section>

      <section className="v19-intro" id="about">
        <div className="v19-section-head"><p>VỀ MIHATO</p><h2>Công nghệ không chỉ để đẹp.<br/>Công nghệ phải tạo ra giá trị sử dụng.</h2></div>
        <div className="v19-intro-copy"><p>MiHaTo xây dựng nền tảng công nghệ giúp tổ chức chuẩn hóa quy trình, tập trung dữ liệu và tự động hóa vận hành — từ y tế đến các bài toán doanh nghiệp.</p><BriefButton slug="about">Tìm hiểu thêm về MiHaTo</BriefButton></div>
      </section>

      <section className="v19-map-section">
        <div className="v19-map-copy"><p>PHẠM VI TRIỂN KHAI</p><h2>Từ một cơ sở đến hệ thống có khả năng mở rộng.</h2><p>Kiến trúc và quy trình được thiết kế để có thể phát triển theo từng giai đoạn, thay vì phải làm lại khi quy mô tăng lên.</p><BriefButton slug="projects">Xem năng lực triển khai</BriefButton></div>
        <div className="v19-map" aria-label="Minh họa mạng lưới triển khai">
          <div className="map-ring r1"/><div className="map-ring r2"/><div className="map-ring r3"/>
          <div className="map-core"><Building2/><b>MiHaTo</b><span>HCMC</span></div>
          <div className="map-node n1"><Hospital/><b>200+</b><span>Clinics</span></div>
          <div className="map-node n2"><Layers3/><b>Multi-tenant</b><span>Scale</span></div>
          <div className="map-node n3"><ShieldCheck/><b>Data</b><span>Connected</span></div>
          <div className="map-node n4"><Users/><b>Multi-role</b><span>Operation</span></div>
        </div>
      </section>

      <section className="v19-solutions" id="solutions">
        <div className="v19-section-head"><p>GIẢI PHÁP & NĂNG LỰC</p><h2>Giải pháp bắt đầu từ cách đội ngũ đang vận hành mỗi ngày.</h2></div>
        <div className="v19-card-grid">{solutions.map(({icon:Icon,title,text,href})=><article className="v19-glow-card" key={title}><div className="v19-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><BriefButton slug={title === "PPMS" ? "ppms" : title === "TeleCare" ? "telecare" : title === "Product Engineering" ? "engineering" : title === "Data & Integration" ? "data" : title === "Chuyển đổi số" ? "transformation" : "academy"} /></article>)}</div>
      </section>

      <section className="v19-projects" id="projects">
        <div className="v19-section-head row"><div><p>DỰ ÁN & SẢN PHẨM</p><h2>Những sản phẩm MiHaTo đang đưa vào thực tế.</h2></div><Link href="/projects">Xem tất cả dự án <ArrowUpRight/></Link></div>
        <div className="v19-project-grid">{projects.map((p)=><article key={p.title}><div className="v19-project-image"><Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 25vw"/><span>{p.tag}</span></div><div className="v19-project-body"><small>{p.meta}</small><h3>{p.title}</h3><p>{p.text}</p><BriefButton slug={p.title === "TeleCare" ? "telecare" : p.title === "MiHaTo Academy" ? "academy" : "projects"} /></div></article>)}</div>
      </section>

      <section className="v19-app">
        <div className="v19-app-visual"><Image src="/media/telecare-store.png" alt="TeleCare trên thiết bị di động" fill sizes="50vw"/></div>
        <div className="v19-app-copy"><p>TELECARE · MOBILE CARE</p><h2>Chăm sóc tiếp tục sau khi rời cơ sở y tế.</h2><div className="v19-checks"><span><CheckCircle2/> Theo dõi kế hoạch chăm sóc</span><span><CheckCircle2/> Nhắc thuốc, đo chỉ số và tái khám</span><span><CheckCircle2/> Kết nối trực tiếp với đội ngũ y tế</span></div><div className="v19-store-buttons telecare-store-buttons"><a href="https://apps.apple.com/vn/app/telecare-patient/id6771634117" target="_blank" rel="noreferrer"><Apple/><span><small>Tải trên</small>App Store</span></a><a href="https://play.google.com/store/apps/details?id=vn.mihato.plvtelecare.patient" target="_blank" rel="noreferrer"><Play/><span><small>Tải trên</small>Google Play</span></a></div><BriefButton slug="telecare">Tìm hiểu TeleCare</BriefButton></div>
      </section>

      <section className="v19-process">
        <div className="v19-section-head"><p>CÁCH MIHATO LÀM VIỆC</p><h2>Hiểu việc cần làm trước, rồi mới chọn công nghệ.</h2></div>
        <div className="v19-process-grid">{[["01","Khảo sát","Hiểu hiện trạng, người dùng và điểm nghẽn."],["02","Thiết kế","Xác định phạm vi, luồng, dữ liệu và trải nghiệm."],["03","Triển khai","Phát triển, kiểm thử và đưa từng phần vào sử dụng."],["04","Cải tiến","Đo lường, nhận phản hồi và tiếp tục tối ưu."]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="v19-cta"><div><p>BẮT ĐẦU MỘT CUỘC TRAO ĐỔI</p><h2>Bạn có một bài toán cần<br/>được làm rõ?</h2></div><Link href="/contact">Liên hệ MiHaTo <ArrowUpRight/></Link></section>
      <SiteFooter />
    </main>
  );
}
