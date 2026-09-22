import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BriefButton, PageIntro, SiteFooter, SiteHeader } from "../components";

export default function About() {
  return (
    <main className="new-site inner-page">
      <SiteHeader />
      <PageIntro
        eyebrow="VỀ MIHATO"
        title="Công nghệ bắt đầu từ việc hiểu đúng vấn đề."
        lead="MiHaTo phát triển sản phẩm và giải pháp công nghệ cho chăm sóc sức khỏe với tư duy dài hạn: hiểu vận hành, thiết kế phù hợp và liên tục cải tiến."
      />
      <section className="editorial-split">
        <div>
          <p className="section-index">MIHATO HÔM NAY</p>
          <h2>
            Từ năng lực phát triển phần mềm đến định hướng xây dựng sản phẩm y
            tế.
          </h2>
        </div>
        <div>
          <p>
            MiHaTo kết hợp kinh nghiệm xây dựng phần mềm với hiểu biết về quy
            trình chăm sóc để phát triển các sản phẩm có thể vận hành trong thực
            tế.
          </p>
          <p>
            Trọng tâm không dừng ở việc hoàn thành một hệ thống. Mỗi giải pháp
            được định hướng để tiếp tục thích nghi với nhu cầu của cơ sở y tế,
            đội ngũ chăm sóc và người sử dụng.
          </p>
          <BriefButton slug="about">Xem chi tiết về MiHaTo</BriefButton>
        </div>
      </section>
      <section className="image-statement">
        <Image
          src="/media/mihato-exhibition-booth-hd.png"
          alt="Không gian giới thiệu giải pháp MiHaTo"
          fill
          sizes="100vw"
        />
        <div>
          <p>TẦM NHÌN</p>
          <h2>
            Xây dựng một thương hiệu công nghệ nhất quán, đáng tin cậy và gắn
            với chăm sóc sức khỏe.
          </h2>
        </div>
      </section>
      <section className="principles">
        <article>
          <span>01</span>
          <h3>Hiểu trước khi xây</h3>
          <p>
            Bắt đầu bằng quy trình, con người và kết quả thực tế cần đạt được.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Kết nối thay vì chắp vá</h3>
          <p>Thiết kế dữ liệu và trải nghiệm xuyên suốt giữa các điểm chạm.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Cải tiến cùng thực tế</h3>
          <p>Sản phẩm được hoàn thiện qua sử dụng, phản hồi và đo lường.</p>
        </article>
      </section>
      <section className="brand-story">
        <div>
          <p className="section-index">HIỆN DIỆN THƯƠNG HIỆU</p>
          <h2>Một hình ảnh nhất quán trên từng điểm chạm.</h2>
          <p>
            Từ ứng dụng, website đến tài liệu và không gian giới thiệu, hệ thống
            nhận diện giúp MiHaTo được ghi nhớ rõ ràng và chuyên nghiệp.
          </p>
        </div>
        <div className="brand-story-grid">
          <figure>
            <Image
              src="/media/brand-presence.png"
              alt="Nhận diện MiHaTo trên ấn phẩm và bảng hiệu"
              fill
              sizes="50vw"
            />
            <figcaption>Ấn phẩm và không gian doanh nghiệp</figcaption>
          </figure>
          <figure>
            <Image
              src="/media/digital-touchpoints.png"
              alt="Các điểm chạm số của MiHaTo"
              fill
              sizes="50vw"
            />
            <figcaption>Điểm chạm số và truyền thông</figcaption>
          </figure>
        </div>
      </section>
      <section className="next-route">
        <p>KHÁM PHÁ TIẾP</p>
        <h2>Xem MiHaTo biến định hướng thành giải pháp.</h2>
        <Link href="/solutions">
          Đến trang Giải pháp <ArrowUpRight />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
