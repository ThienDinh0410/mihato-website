"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { ArrowUpRight, Download, Mail, Menu, X } from "lucide-react";
import { briefs } from "./briefs";
import { useEffect, useState } from "react";

export function BrandMark() {
  return (
    <Link href="/" className="brand" aria-label="MiHaTo — Trang chủ">
      <span className="brand-icon heartbeat-logo">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="19" />
          <path d="M4 21h8l3-8 6 17 4-12 3 5h8" />
        </svg>
      </span>
      <span>MiHaTo</span>
    </Link>
  );
}

const EN_TEXT: Record<string,string> = {
  "VỀ MIHATO":"ABOUT MIHATO", "GIẢI PHÁP":"SOLUTIONS", "DỰ ÁN & CASE STUDIES":"PROJECTS & CASE STUDIES", "MIHATO ACADEMY":"MIHATO ACADEMY", "ĐỘI NGŨ":"TEAM", "LIÊN HỆ":"CONTACT",
  "Công nghệ bắt đầu từ việc hiểu đúng vấn đề.":"Technology starts with understanding the right problem.",
  "Một hệ sinh thái cho hành trình chăm sóc liền mạch.":"An ecosystem for a connected care journey.",
  "Dự án là nơi năng lực của MiHaTo được nhìn thấy rõ nhất.":"Projects are where MiHaTo’s capabilities become tangible.",
  "Biến công nghệ thành năng lực của đội ngũ.":"Turn technology into your team’s capability.",
  "Con người đứng sau mỗi quyết định sản phẩm.":"The people behind every product decision.",
  "Một cuộc trao đổi rõ ràng có thể bắt đầu một dự án tốt.":"A clear conversation can start a great project.",
  "Tìm hiểu thêm":"Learn more", "Xem chi tiết về MiHaTo":"View MiHaTo brief", "Xem Executive Brief":"View Executive Brief", "Liên hệ MiHaTo":"Contact MiHaTo",
  "TẦM NHÌN":"VISION", "HIỆN DIỆN THƯƠNG HIỆU":"BRAND PRESENCE", "MIHATO HÔM NAY":"MIHATO TODAY", "KHÁM PHÁ TIẾP":"EXPLORE NEXT",
  "Tư duy sản phẩm":"Product Thinking", "Quy trình số":"Digital Workflow", "Xây dựng sản phẩm số":"Digital Product Building", "CHƯƠNG TRÌNH":"PROGRAM",
  "KẾT NỐI TRỰC TIẾP":"DIRECT CONTACT", "Trao đổi với MiHaTo":"Talk with MiHaTo", "Thông tin dự án":"Project information",
  "Họ và tên":"Full name", "Email công việc":"Work email", "Tổ chức":"Organization", "Bạn muốn trao đổi về":"What would you like to discuss?", "Nội dung":"Message", "Gửi thông tin":"Send information",
  "NĂNG LỰC TRIỂN KHAI":"DELIVERY CAPABILITY", "TỪ Ý TƯỞNG ĐẾN VẬN HÀNH":"FROM IDEA TO OPERATION", "TRAO ĐỔI DỰ ÁN":"DISCUSS A PROJECT",
  "Khảo sát & nghiệp vụ":"Discovery & Business Analysis", "Kiến trúc & sản phẩm":"Architecture & Product", "Triển khai & kiểm chứng":"Delivery & Validation", "Cải tiến & mở rộng":"Improve & Scale",
  "CÁCH MIHATO ĐÀO TẠO":"HOW MIHATO TRAINS", "Hiểu vấn đề":"Understand the problem", "Thực hành":"Practice", "Ứng dụng":"Apply",
  "Từ vận hành cơ sở y tế, chăm sóc tại nhà đến dữ liệu, chuyển đổi số và đào tạo — mỗi năng lực được kết nối quanh một mục tiêu chung: tạo ra giá trị sử dụng thực tế.":"From healthcare operations and home care to data, digital transformation and training — every capability connects around one goal: creating practical value.",
  "Vận hành cơ sở y tế":"Healthcare operations", "Chăm sóc tại nhà":"Home care", "Giải pháp theo nhu cầu":"Custom solutions", "Kết nối dữ liệu":"Data integration", "Chuẩn hóa vận hành":"Operational transformation", "Phát triển năng lực":"Capability development",
  "Nền tảng hỗ trợ quản lý quy trình phòng khám từ tiếp nhận đến vận hành hằng ngày.":"A platform supporting clinic workflows from intake to daily operations.",
  "Tiếp nhận và quản lý lịch":"Intake & scheduling", "Phối hợp công việc giữa các vai trò":"Role-based collaboration", "Dữ liệu vận hành có cấu trúc":"Structured operational data",
  "Theo dõi chỉ số tại nhà":"At-home health tracking", "Nhắc thuốc, đo chỉ số và tái khám":"Medication, measurement & follow-up reminders", "Kết nối với đội ngũ chăm sóc":"Care-team connection",
  "Phân tích nghiệp vụ":"Business analysis", "Thiết kế trải nghiệm và kiến trúc":"Experience & architecture design", "Phát triển, kiểm thử và cải tiến":"Build, validate & improve",
  "API và tích hợp hệ thống":"APIs & system integration", "Chuẩn hóa luồng dữ liệu":"Data-flow standardization", "Báo cáo hỗ trợ quyết định":"Decision-support reporting",
  "Khảo sát quy trình hiện tại":"Current-process discovery", "Đề xuất lộ trình triển khai":"Implementation roadmap", "Đo lường và cải tiến":"Measure & improve",
  "Quy trình và công cụ số":"Digital workflows & tools", "Thực hành theo tình huống":"Scenario-based practice",
  "Không chỉ giới thiệu tên sản phẩm. Trang này cho thấy bài toán, hướng tiếp cận, phạm vi và giá trị vận hành mà từng hệ thống hướng đến.":"More than product names: this page shows the problem, approach, scope and operational value each system is designed to address.",
  "Bạn đang có một hệ thống cần được làm rõ?":"Do you have a system that needs clarity?",
  "Công nghệ cho vận hành hiện đại — từ sản phẩm y tế đến chuyển đổi số doanh nghiệp.":"Technology for modern operations — from healthcare products to enterprise digital transformation."
};
const EN_MORE: Record<string,string> = {
  "MiHaTo phát triển sản phẩm và giải pháp công nghệ cho chăm sóc sức khỏe với tư duy dài hạn: hiểu vận hành, thiết kế phù hợp và liên tục cải tiến.": "MiHaTo develops healthcare technology products and solutions with a long-term mindset: understand operations, design appropriately, and continuously improve.",
  "Từ năng lực phát triển phần mềm đến định hướng xây dựng sản phẩm y tế.": "From software engineering capability to a healthcare product direction.",
  "MiHaTo kết hợp kinh nghiệm xây dựng phần mềm với hiểu biết về quy trình chăm sóc để phát triển các sản phẩm có thể vận hành trong thực tế.": "MiHaTo combines software engineering experience with an understanding of care workflows to build products that work in real operations.",
  "Trọng tâm không dừng ở việc hoàn thành một hệ thống. Mỗi giải pháp được định hướng để tiếp tục thích nghi với nhu cầu của cơ sở y tế, đội ngũ chăm sóc và người sử dụng.": "The goal is not simply to finish a system. Each solution is designed to keep adapting to the needs of healthcare organizations, care teams, and users.",
  "Xây dựng một thương hiệu công nghệ nhất quán, đáng tin cậy và gắn với chăm sóc sức khỏe.": "Build a consistent, trusted technology brand connected to healthcare.",
  "Hiểu trước khi xây": "Understand before building", "Bắt đầu bằng quy trình, con người và kết quả thực tế cần đạt được.": "Start with workflows, people, and the real outcomes that need to be achieved.",
  "Kết nối thay vì chắp vá": "Connect instead of patching", "Thiết kế dữ liệu và trải nghiệm xuyên suốt giữa các điểm chạm.": "Design data and experiences that flow consistently across touchpoints.",
  "Cải tiến cùng thực tế": "Improve with real-world use", "Sản phẩm được hoàn thiện qua sử dụng, phản hồi và đo lường.": "Products improve through usage, feedback, and measurement.",
  "Một hình ảnh nhất quán trên từng điểm chạm.": "A consistent identity across every touchpoint.",
  "Từ ứng dụng, website đến tài liệu và không gian giới thiệu, hệ thống nhận diện giúp MiHaTo được ghi nhớ rõ ràng và chuyên nghiệp.": "From apps and websites to documents and exhibition spaces, a consistent identity makes MiHaTo recognizable and professional.",
  "Ấn phẩm và không gian doanh nghiệp": "Corporate materials & spaces", "Điểm chạm số và truyền thông": "Digital & communication touchpoints",
  "Xem MiHaTo biến định hướng thành giải pháp.": "See how MiHaTo turns direction into solutions.", "Đến trang Giải pháp": "Explore Solutions",
  "Một hệ sinh thái cho hành trình chăm sóc liền mạch.": "An ecosystem for a connected care journey.",
  "Từ dữ liệu đến trải nghiệm — mọi điểm chạm cần được kết nối.": "From data to experience — every touchpoint should be connected.",
  "Vận hành cơ sở y tế": "Healthcare operations", "Nền tảng hỗ trợ quản lý quy trình phòng khám từ tiếp nhận đến vận hành hằng ngày.": "A platform supporting clinic workflows from intake to daily operations.",
  "PPMS hướng đến một luồng làm việc thống nhất, nơi lịch, thông tin người bệnh, nhiệm vụ và trạng thái vận hành được kết nối rõ ràng.": "PPMS is designed around a unified workflow where schedules, patient information, tasks, and operational statuses are clearly connected.",
  "Tiếp nhận thông tin người bệnh, nhu cầu khám và lịch hẹn trong một luồng rõ ràng; hỗ trợ kiểm tra trạng thái, điều phối lịch và giảm nhập liệu lặp lại.": "Capture patient information, care needs, and appointments in one clear flow; support status checks, scheduling coordination, and reduce duplicate data entry.",
  "Phân tách trách nhiệm theo vai trò như tiếp nhận, bác sĩ, điều dưỡng và quản lý; mỗi người nhìn thấy đúng công việc và trạng thái cần xử lý.": "Separate responsibilities by roles such as reception, doctors, nurses, and managers so each person sees the right tasks and statuses to handle.",
  "Chuẩn hóa dữ liệu lịch, người bệnh, tác vụ và trạng thái để dễ tra cứu, báo cáo và sẵn sàng tích hợp với các hệ thống khác.": "Standardize schedule, patient, task, and status data for easier lookup, reporting, and integration with other systems.",
  "Chăm sóc tại nhà": "Home care", "Duy trì kết nối giữa người bệnh và đội ngũ chăm sóc sau khi rời cơ sở y tế.": "Maintain the connection between patients and care teams after they leave the healthcare facility.",
  "Telecare hỗ trợ người bệnh theo dõi kế hoạch sức khỏe, ghi nhận chỉ số và liên hệ đội ngũ phụ trách trong một hành trình liên tục.": "TeleCare helps patients follow care plans, record health indicators, and stay connected with their care team throughout a continuous journey.",
  "Người bệnh có thể ghi nhận chỉ số sức khỏe theo kế hoạch và giúp đội ngũ phụ trách theo dõi diễn biến từ xa.": "Patients can record health indicators according to their care plan, helping care teams monitor progress remotely.",
  "Tổ chức nhắc việc theo kế hoạch chăm sóc như dùng thuốc, đo chỉ số hoặc lịch tái khám để hành trình không bị gián đoạn.": "Organize care-plan reminders for medication, measurements, and follow-up visits so the care journey stays on track.",
  "Tạo một điểm kết nối rõ ràng giữa người bệnh và đội ngũ chăm sóc cho trao đổi, hướng dẫn và theo dõi sau khám.": "Create a clear connection point between patients and care teams for communication, guidance, and post-visit follow-up.",
  "Giải pháp theo nhu cầu": "Custom solutions", "Thiết kế và phát triển phần mềm phù hợp với nghiệp vụ thực tế của tổ chức.": "Design and develop software around the organization's real operational needs.",
  "Từ khảo sát đến triển khai, MiHaTo đồng hành để biến bài toán vận hành thành một giải pháp rõ ràng, dễ sử dụng và có thể mở rộng.": "From discovery to delivery, MiHaTo turns operational challenges into clear, usable, and scalable solutions.",
  "Làm rõ người dùng, quy trình, dữ liệu đầu vào/đầu ra và các business rule trước khi thiết kế giải pháp.": "Clarify users, workflows, input/output data, and business rules before designing the solution.",
  "Chuyển nghiệp vụ thành luồng trải nghiệm, mô hình dữ liệu và kiến trúc có khả năng phát triển theo giai đoạn.": "Translate operations into experience flows, data models, and an architecture that can evolve in stages.",
  "Triển khai theo phiên bản, kiểm thử với tình huống thực tế, thu phản hồi và cải tiến thay vì dừng ở bản bàn giao đầu tiên.": "Deliver iteratively, validate with real scenarios, collect feedback, and improve beyond the first release.",
  "Kết nối dữ liệu": "Data integration", "Tạo dòng dữ liệu liền mạch giữa các hệ thống và điểm chạm.": "Create seamless data flows across systems and touchpoints.",
  "MiHaTo giúp tổ chức giảm nhập liệu lặp lại, chuẩn hóa cách trao đổi dữ liệu và xây dựng góc nhìn phục vụ quản trị.": "MiHaTo helps organizations reduce duplicate entry, standardize data exchange, and build management-ready views.",
  "Kết nối hệ thống qua API hoặc cơ chế tích hợp phù hợp để dữ liệu có thể luân chuyển giữa các điểm chạm.": "Connect systems through APIs or appropriate integration mechanisms so data can move across touchpoints.",
  "Thống nhất cấu trúc và quy tắc dữ liệu, giảm sai lệch khi nhiều hệ thống cùng trao đổi thông tin.": "Standardize data structures and rules to reduce inconsistencies when multiple systems exchange information.",
  "Tổ chức dữ liệu thành các chỉ số và góc nhìn quản trị giúp đội ngũ theo dõi vận hành và ra quyết định rõ hơn.": "Turn data into metrics and management views that support clearer operational monitoring and decisions.",
  "Chuyển đổi số": "Digital transformation", "Chuẩn hóa vận hành": "Operational transformation", "Rà soát và cải tiến quy trình để công nghệ tạo ra thay đổi có thể sử dụng lâu dài.": "Review and improve workflows so technology creates sustainable operational change.",
  "MiHaTo bắt đầu từ hiện trạng vận hành, xác định điểm nghẽn và thiết kế lộ trình phù hợp với nguồn lực của tổ chức.": "MiHaTo starts from current operations, identifies bottlenecks, and designs a roadmap that fits the organization's resources.",
  "Quan sát quy trình đang vận hành, xác định điểm nghẽn, thao tác lặp và các điểm có thể số hóa.": "Observe current workflows to identify bottlenecks, repetitive work, and opportunities for digitization.",
  "Ưu tiên hạng mục theo giá trị và nguồn lực, chia lộ trình thành các giai đoạn có thể triển khai và kiểm chứng.": "Prioritize initiatives by value and resources, then break the roadmap into deliverable and testable stages.",
  "Theo dõi kết quả sau triển khai, thu phản hồi từ người dùng và tiếp tục điều chỉnh quy trình lẫn sản phẩm.": "Track post-launch results, collect user feedback, and continue improving both workflows and products.",
  "Phát triển năng lực": "Capability development", "Giúp cá nhân và tổ chức hiểu, sử dụng và làm chủ công nghệ trong công việc.": "Help individuals and organizations understand, use, and master technology at work.",
  "Nội dung đào tạo gắn với tình huống thực tế để kiến thức có thể chuyển thành cách làm rõ ràng, có thể tiếp tục áp dụng.": "Training is grounded in real scenarios so knowledge becomes a clear, reusable way of working.",
  "Rèn cách xác định vấn đề, người dùng, giá trị và phạm vi trước khi lựa chọn công nghệ hoặc bắt đầu xây dựng.": "Practice defining the problem, users, value, and scope before choosing technology or starting to build.",
  "Tiếp cận workflow, dữ liệu, automation và công cụ số theo cách gắn với công việc thực tế.": "Learn workflows, data, automation, and digital tools through real work contexts.",
  "Học thông qua bài toán và sản phẩm mẫu để người học có thể áp dụng lại cách làm vào môi trường của mình.": "Learn through practical challenges and sample products so the approach can be reused in the learner's own environment.",
  "Dự án là nơi năng lực của MiHaTo được nhìn thấy rõ nhất.": "Projects are where MiHaTo's capabilities become most tangible.",
  "Case study không chỉ kể chúng tôi đã làm gì — mà cho thấy cách MiHaTo giải quyết vấn đề.": "A case study does more than show what we built — it shows how MiHaTo solves problems.",
  "Một dự án nghiêm túc cần nhiều hơn việc viết code.": "A serious project requires more than writing code.",
  "Khảo sát & nghiệp vụ": "Discovery & business analysis", "Kiến trúc & sản phẩm": "Architecture & product", "Triển khai & kiểm chứng": "Delivery & validation", "Cải tiến & mở rộng": "Improve & scale",
  "Làm rõ người dùng, quy trình, dữ liệu và điểm nghẽn trước khi chốt phạm vi.": "Clarify users, workflows, data, and bottlenecks before locking scope.",
  "Thiết kế trải nghiệm, mô hình dữ liệu, phân quyền và khả năng mở rộng.": "Design experience, data models, permissions, and scalability.",
  "Phát triển theo giai đoạn, kiểm thử, đào tạo và đưa hệ thống vào sử dụng.": "Build in stages, test, train users, and put the system into operation.",
  "Theo dõi phản hồi, đo lường và tiếp tục bổ sung module theo nhu cầu.": "Track feedback, measure outcomes, and extend modules as needs evolve.",
  "Biến công nghệ thành năng lực của đội ngũ.": "Turn technology into your team's capability.",
  "Chương trình đào tạo thực hành dành cho cá nhân, đội nhóm và doanh nghiệp muốn nâng cao tư duy sản phẩm, quy trình số và năng lực triển khai.": "Hands-on training for individuals, teams, and organizations seeking stronger product thinking, digital workflows, and delivery capability.",
  "Tư duy sản phẩm": "Product thinking", "Quy trình số": "Digital workflows", "Xây dựng sản phẩm số": "Build digital products", "Thiết kế và kiểm thử": "Design & validate", "Từ ý tưởng đến phiên bản đầu": "From idea to first release", "Cải tiến theo phản hồi": "Improve through feedback",
  "Con người đứng sau mỗi quyết định sản phẩm.": "The people behind every product decision.",
  "MiHaTo quy tụ tư duy chiến lược, công nghệ và sản phẩm để cùng giải quyết những bài toán có ý nghĩa cho chăm sóc sức khỏe.": "MiHaTo brings together strategy, technology, and product thinking to solve meaningful healthcare challenges.",
  "Một cuộc trao đổi rõ ràng có thể bắt đầu một dự án tốt.": "A clear conversation can start a great project.",
  "Chia sẻ bài toán, sản phẩm hoặc quy trình bạn đang muốn cải tiến. Bạn có thể gửi email trực tiếp đến thành viên phù hợp của MiHaTo hoặc để lại thông tin dự án.": "Share the problem, product, or workflow you want to improve. You can email the relevant MiHaTo team member directly or leave your project information.",
  "Nhấn vào email để mở ngay ứng dụng email trên thiết bị và tạo thư mới với người nhận đã được điền sẵn.": "Click an email address to open your email app with the recipient already filled in.",
  "BẮT ĐẦU MỘT CUỘC TRAO ĐỔI": "START A CONVERSATION", "Giúp chúng tôi hiểu nhanh nhu cầu của bạn.": "Help us quickly understand your needs.",
  "Mô tả ngắn bài toán, quy mô hoặc mục tiêu...": "Briefly describe the challenge, scale, or goal...", "Tên công ty / đơn vị": "Company / organization",
  "Công nghệ không chỉ để đẹp.": "Technology is not just about appearance.", "Công nghệ phải tạo ra giá trị sử dụng.": "Technology must create practical value.",
  "Khám phá giải pháp": "Explore solutions", "Xem dự án": "View projects", "Tìm hiểu TeleCare": "Explore TeleCare", "Xem tất cả dự án": "View all projects", "Xem năng lực triển khai": "View delivery capability",
  "Bạn có một bài toán cần": "Do you have a challenge that needs", "cần được làm rõ?": "clarity?", "được làm rõ?": "clarity?", "Liên hệ MiHaTo": "Contact MiHaTo",
  "DỰ ÁN & SẢN PHẨM": "PROJECTS & PRODUCTS", "GIẢI PHÁP & NĂNG LỰC": "SOLUTIONS & CAPABILITIES", "CÁCH MIHATO LÀM VIỆC": "HOW MIHATO WORKS",
  "Một hệ sinh thái được xây quanh bài toán thực tế.": "An ecosystem built around real-world problems.", "Những hệ thống được thiết kế để vận hành.": "Systems designed to operate in the real world.",
  "Rõ bài toán trước khi viết dòng code đầu tiên.": "Clarify the problem before writing the first line of code.", "Từ một cuộc trao đổi rõ ràng đến một kế hoạch có thể triển khai.": "From a clear conversation to an actionable plan.",
  "Công nghệ cho vận hành hiện đại — từ sản phẩm y tế đến chuyển đổi số doanh nghiệp.": "Technology for modern operations — from healthcare products to enterprise digital transformation."
};
const EN_COMPLETE: Record<string,string> = {
  "Kiến tạo":"Building", "giải pháp số":"digital solutions", "cho vận hành hiện đại.":"for modern operations.",
  "MiHaTo kết hợp tư duy sản phẩm, năng lực kỹ thuật và hiểu biết quy trình để xây dựng những hệ thống có thể vận hành, đo lường và tiếp tục mở rộng.":"MiHaTo combines product thinking, engineering capability, and workflow understanding to build systems that can operate, be measured, and keep scaling.",
  "phòng khám trong case HIS":"clinics in the HIS case", "từ khảo sát đến triển khai":"from discovery to delivery", "thiết kế theo vai trò vận hành":"designed around operational roles",
  "Công nghệ không chỉ để đẹp.":"Technology is not just about appearance.", "Công nghệ phải tạo ra giá trị sử dụng.":"Technology should create practical value.",
  "MiHaTo xây dựng nền tảng công nghệ giúp tổ chức chuẩn hóa quy trình, tập trung dữ liệu và tự động hóa vận hành — từ y tế đến các bài toán doanh nghiệp.":"MiHaTo builds technology platforms that help organizations standardize workflows, centralize data, and automate operations — from healthcare to broader business needs.",
  "PHẠM VI TRIỂN KHAI":"DELIVERY SCOPE", "Từ một cơ sở đến hệ thống có khả năng mở rộng.":"From one site to a system built to scale.",
  "Kiến trúc và quy trình được thiết kế để có thể phát triển theo từng giai đoạn, thay vì phải làm lại khi quy mô tăng lên.":"Architecture and workflows are designed to grow in stages instead of being rebuilt as the organization scales.",
  "Giải pháp bắt đầu từ cách đội ngũ đang vận hành mỗi ngày.":"Solutions start with how the team actually works every day.",
  "Những sản phẩm MiHaTo đang đưa vào thực tế.":"Products MiHaTo is bringing into real operations.",
  "Chuỗi 200+ phòng khám":"200+ clinic network", "Quản trị doanh nghiệp":"Enterprise operations", "Mobile healthcare":"Mobile healthcare",
  "Hệ thống HIS đồng bộ cho mô hình chuỗi, hướng đến vận hành thống nhất và khả năng mở rộng.":"A unified HIS for a clinic network, designed for consistent operations and scalability.",
  "Chuẩn hóa quy trình, tập trung dữ liệu và tự động hóa các nghiệp vụ vận hành.":"Standardize workflows, centralize data, and automate operational tasks.",
  "Ứng dụng hỗ trợ theo dõi kế hoạch chăm sóc và kết nối người bệnh với đội ngũ y tế.":"An app that supports care-plan tracking and connects patients with their healthcare team.",
  "Chương trình thực hành về AI, automation, Vibe Coding và chuyển đổi số.":"Hands-on programs covering AI, automation, Vibe Coding, and digital transformation.",
  "TELECARE · MOBILE CARE":"TELECARE · MOBILE CARE", "Chăm sóc tiếp tục sau khi rời cơ sở y tế.":"Care continues after leaving the healthcare facility.",
  "Theo dõi kế hoạch chăm sóc":"Follow the care plan", "Nhắc thuốc, đo chỉ số và tái khám":"Medication, measurement, and follow-up reminders", "Kết nối trực tiếp với đội ngũ y tế":"Direct connection with the care team",
  "Tải trên App Store":"Download on the App Store", "Tải trên Google Play":"Get it on Google Play", "Tìm hiểu TeleCare":"Explore TeleCare",
  "Hiểu việc cần làm trước, rồi mới chọn công nghệ.":"Understand the work first, then choose the technology.",
  "Khảo sát":"Discovery", "Hiểu hiện trạng, người dùng và điểm nghẽn.":"Understand the current state, users, and bottlenecks.", "Thiết kế":"Design", "Xác định phạm vi, luồng, dữ liệu và trải nghiệm.":"Define scope, workflows, data, and experience.", "Triển khai":"Delivery", "Phát triển, kiểm thử và đưa từng phần vào sử dụng.":"Build, test, and release in practical stages.", "Cải tiến":"Improve", "Đo lường, nhận phản hồi và tiếp tục tối ưu.":"Measure, gather feedback, and keep improving.",
  "BẮT ĐẦU MỘT CUỘC TRAO ĐỔI":"START A CONVERSATION", "Một cuộc trao đổi rõ ràng có thể bắt đầu một dự án tốt.":"A clear conversation can be the start of a strong project.",
  "Chia sẻ bài toán, sản phẩm hoặc quy trình bạn đang muốn cải tiến. Bạn có thể gửi email trực tiếp đến thành viên phù hợp của MiHaTo hoặc để lại thông tin dự án.":"Tell us about the problem, product, or workflow you want to improve. You can email the right MiHaTo team member directly or leave your project information.",
  "Từ một cuộc trao đổi rõ ràng đến một kế hoạch có thể triển khai.":"From a clear conversation to an actionable plan.", "Trao đổi với MiHaTo":"Talk with MiHaTo", "Nhấn vào email để mở ngay ứng dụng email trên thiết bị và tạo thư mới với người nhận đã được điền sẵn.":"Select an email to open a new message with the recipient already filled in.",
  "Giúp chúng tôi hiểu nhanh nhu cầu của bạn.":"Help us quickly understand what you need.", "Nguyễn Văn A":"Your name", "Tên công ty / đơn vị":"Company / organization", "Mô tả ngắn bài toán, quy mô hoặc mục tiêu...":"Briefly describe the problem, scale, or goal...", "Giải pháp y tế":"Healthcare solutions", "Chuyển đổi số & tích hợp":"Digital transformation & integration", "Hợp tác khác":"Other collaboration",
  "CÔNG TY CỔ PHẦN MIHATO":"MIHATO JOINT STOCK COMPANY", "MỤC ĐÍCH TÀI LIỆU":"DOCUMENT PURPOSE", "Nhận tài liệu qua email":"Receive this brief by email", "MiHaTo sẽ gửi bản PDF A4 của đúng chủ đề này.":"MiHaTo will send the A4 PDF for this topic.", "Gửi về email":"Send by email", "Gửi bản A4":"Send A4 brief", "Đang gửi...":"Sending...", "Đã gửi. Vui lòng kiểm tra email của bạn.":"Sent. Please check your email.", "Chưa thể gửi email. Vui lòng thử lại.":"Unable to send the email. Please try again.",
  "Một hình ảnh nhất quán trên từng điểm chạm.":"A consistent identity across every touchpoint.", "Ba góc nhìn, một định hướng sản phẩm thống nhất.":"Three perspectives, one shared product direction.", "Chuyển kiến thức thành quy trình có thể tiếp tục sử dụng.":"Turn knowledge into workflows the team can keep using.", "Làm trực tiếp trên tình huống gần với công việc.":"Work directly on scenarios close to the team's real work.", "Xác định mục tiêu và bối cảnh của đội ngũ.":"Define the team's goals and context.",
  "Không chỉ kể đã làm gì. Quan trọng hơn là hệ thống giải quyết việc gì và được dùng như thế nào.":"Not just what was built, but what the system solves and how it is used.", "Bạn đang có một hệ thống":"Do you have a system", "cần được làm rõ?":"that needs clarity?", "Có một chủ đề hoặc bài toán muốn trao đổi cùng MiHaTo?":"Have a topic or challenge you want to discuss with MiHaTo?",
  "Tài liệu hóa rõ để dễ bàn giao":"Clear documentation for handover", "Thiết kế theo vai trò sử dụng":"Designed around user roles", "Ưu tiên khả năng tích hợp và mở rộng":"Prioritize integration and scalability", "Cách MiHaTo đồng hành":"How MiHaTo works with partners", "MiHaTo đi từ khảo sát, làm rõ phạm vi, thiết kế trải nghiệm và kiến trúc đến phát triển, kiểm thử, bàn giao và cải tiến sau khi đưa vào sử dụng.":"MiHaTo works from discovery and scope definition through experience and architecture design, development, testing, handover, and post-launch improvement.",
  "Giảm thông tin rời rạc":"Reduce fragmented information", "Theo dõi trạng thái theo vai trò":"Track status by role", "Dễ mở rộng khi thêm cơ sở hoặc quy trình":"Easier to scale to new sites or workflows", "Phạm vi triển khai":"Implementation scope", "Phạm vi được xác định theo quy mô cơ sở, vai trò sử dụng, dữ liệu hiện có và các hệ thống cần kết nối; không áp một cấu hình giống nhau cho mọi đơn vị.":"Scope is defined by facility size, user roles, existing data, and systems that need to connect; one configuration is not forced on every organization.",
  "Theo dõi kế hoạch chăm sóc hằng ngày":"Follow the daily care plan", "Ghi nhận và đồng bộ chỉ số sức khỏe":"Record and sync health indicators", "Trao đổi với đội ngũ phụ trách":"Communicate with the assigned care team", "Quản lý lịch hẹn và nhắc việc":"Manage appointments and reminders", "Hai phía cùng sử dụng":"Built for both sides of care", "Người bệnh dùng ứng dụng để theo dõi kế hoạch và chỉ số; bác sĩ, điều dưỡng dùng công cụ dành cho nhân viên y tế để theo dõi, nhận cảnh báo và phối hợp chăm sóc.":"Patients use the app to follow plans and health indicators; doctors and nurses use clinician tools to monitor, receive alerts, and coordinate care.",
  "Phạm vi rõ trước khi phát triển":"Clear scope before development", "Kiểm thử theo tình huống sử dụng":"Test against real usage scenarios", "Tài liệu hóa để đội ngũ tiếp tục vận hành":"Document so the team can keep operating", "Bàn giao":"Handover", "Sản phẩm được bàn giao cùng tài liệu, hướng dẫn và các điểm cần theo dõi để đội ngũ có thể tiếp tục sử dụng, bảo trì và phát triển.":"The product is handed over with documentation, guidance, and operational notes so the team can continue using, maintaining, and evolving it.",
  "Giảm nhập liệu lặp lại":"Reduce duplicate data entry", "Thống nhất trạng thái giữa hệ thống":"Keep statuses consistent across systems", "Tăng khả năng truy vết và báo cáo":"Improve traceability and reporting", "Kiểm soát":"Controls", "Quyền truy cập, nguồn dữ liệu, trạng thái đồng bộ và lỗi tích hợp cần được xác định rõ để vận hành an toàn và dễ xử lý khi có sự cố.":"Access rights, data sources, synchronization status, and integration errors should be explicit for safer operations and easier incident handling.",
  "Giảm bước thủ công không cần thiết":"Reduce unnecessary manual steps", "Tập trung dữ liệu quan trọng":"Centralize important data", "Đo được thay đổi sau triển khai":"Measure change after implementation", "Cách bắt đầu":"Where to start", "Bắt đầu từ một quy trình có tác động rõ, kiểm chứng kết quả rồi mới mở rộng sang các luồng tiếp theo để giảm rủi ro và phù hợp nguồn lực.":"Start with one workflow with clear impact, validate the result, then expand to the next flows to reduce risk and fit available resources.",
  "Đội sản phẩm và vận hành":"Product and operations teams", "Nhân sự cần ứng dụng AI/automation":"Teams applying AI and automation", "Doanh nghiệp muốn chuẩn hóa năng lực số":"Organizations building digital capability", "Kết quả sau đào tạo":"Training outcomes", "Mục tiêu là người học tạo được đầu ra có thể tiếp tục sử dụng trong công việc: workflow, prototype, tài liệu, automation hoặc cách làm việc đã được chuẩn hóa.":"The goal is for learners to create outputs they can keep using at work: workflows, prototypes, documentation, automations, or standardized ways of working.",
  "Làm rõ bài toán và người dùng":"Clarify the problem and users", "Thiết kế theo dữ liệu và vai trò":"Design around data and roles", "Triển khai theo giai đoạn có thể kiểm chứng":"Deliver in verifiable stages", "Năng lực thể hiện qua dự án":"Capabilities demonstrated through projects", "Các case study được dùng để cho thấy cách MiHaTo xử lý bài toán vận hành, thiết kế luồng, kết nối dữ liệu, xây sản phẩm và tiếp tục cải tiến sau triển khai.":"Case studies show how MiHaTo addresses operational problems, designs workflows, connects data, builds products, and continues improving after launch.",
  "Gửi thông tin":"Send information", "BẮT ĐẦU":"START", "ĐỊNH HƯỚNG NỘI DUNG":"CONTENT DIRECTION", "Từ một điểm nghẽn nhỏ đến một hệ thống vận hành hoàn chỉnh.":"From a small bottleneck to a complete operational system.", "Đào tạo gắn với tình huống thật và sản phẩm thật.":"Training grounded in real scenarios and real products.", "Từ kiến thức sức khỏe đến câu chuyện kết nối hệ thống.":"From health knowledge to connected systems."
};
Object.assign(EN_TEXT, EN_MORE, EN_COMPLETE);
const originalText = new WeakMap<Node,string>();
function translateTree(root: ParentNode, lang:"vi"|"en") {
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let node:Node|null;
  while((node=walker.nextNode())) {
    const el=node.parentElement;
    if(!el || el.closest("script,style") || el.closest(".reference-header")) continue;
    const current=node.nodeValue||"";
    if(!originalText.has(node)) originalText.set(node,current);
    const source=originalText.get(node)||current;
    const trimmed=source.trim();
    if(!trimmed) continue;
    if(lang==="en" && EN_TEXT[trimmed]) node.nodeValue=source.replace(trimmed,EN_TEXT[trimmed]);
    if(lang==="vi") node.nodeValue=source;
  }
  root.querySelectorAll?.('input, textarea, select').forEach((el:any)=>{
    if(el.placeholder){ if(!el.dataset.viPlaceholder) el.dataset.viPlaceholder=el.placeholder; const src=el.dataset.viPlaceholder; el.placeholder=lang==='en'?(EN_TEXT[src]||src):src; }
    if(el.getAttribute('aria-label')){ if(!el.dataset.viAria) el.dataset.viAria=el.getAttribute('aria-label'); const src=el.dataset.viAria; el.setAttribute('aria-label',lang==='en'?(EN_TEXT[src]||src):src); }
  });
}
function applyLanguage(lang:"vi"|"en") {
  const root=document.body; if(!root) return ()=>{};
  let timer:number|undefined;
  let translating=false;
  const run=()=>{
    if(translating) return;
    translating=true;
    translateTree(root,lang);
    translating=false;
  };
  run();
  // Only react when React adds/removes UI. Watching characterData caused a
  // translation feedback loop in Chromium on the Solutions page.
  const observer=new MutationObserver((mutations)=>{
    if(!mutations.some(m=>m.type==='childList')) return;
    if(timer) window.clearTimeout(timer);
    timer=window.setTimeout(run,40);
  });
  observer.observe(root,{childList:true,subtree:true});
  return ()=>{ if(timer) window.clearTimeout(timer); observer.disconnect(); };
}
const navItems = [
  ["/", "Trang chủ", "Home"],
  ["/about", "Giới thiệu", "About"],
  ["/solutions", "Giải pháp", "Solutions"],
  ["/projects", "Dự án", "Projects"],
  ["/academy", "Đào tạo", "Academy"],
  ["/team", "Đội ngũ", "Team"],
  ["/contact", "Liên hệ", "Contact"],
] as const;
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"vi"|"en">("vi");
  const pathname = usePathname();
  useEffect(()=>{ const saved=localStorage.getItem("mihato-lang"); const initial=saved==="en"?"en":"vi"; setLang(initial); document.documentElement.lang=initial; document.documentElement.dataset.siteLang=initial; },[]);
  useEffect(()=>{ let cleanup=()=>{}; const id=setTimeout(()=>{ cleanup=applyLanguage(lang); },20); return()=>{clearTimeout(id); cleanup();}; },[lang,pathname]);
  useEffect(()=>{
    const els=Array.from(document.querySelectorAll("main > section, .v21-case, .v19-glow-card, .v19-project-grid article, .v19-process-grid article"));
    els.forEach(el=>el.classList.add("scroll-reveal"));
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target);}}),{threshold:.12,rootMargin:"0px 0px -7% 0px"});
    els.forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[pathname]);
  function changeLang(next:"vi"|"en"){ setLang(next); localStorage.setItem("mihato-lang",next); document.documentElement.lang=next; document.documentElement.dataset.siteLang=next; window.dispatchEvent(new CustomEvent("mihato-language",{detail:next})); }
  return (
    <header className="reference-header">
      <BrandMark />
      <nav className="reference-right">
        {navItems.map(([h, vi, en]) => (
          <Link key={h} href={h} className={pathname===h ? "active" : ""}>{lang==="vi"?vi:en}</Link>
        ))}
        <div className="language-switch" aria-label="Language"><button className={lang==="vi"?"active":""} onClick={()=>changeLang("vi")}>VI</button><span>/</span><button className={lang==="en"?"active":""} onClick={()=>changeLang("en")}>EN</button></div>
        <Link className="reference-contact" href="/contact">{lang==="vi"?"Tư vấn ngay":"Talk to us"}</Link>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Mở menu">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "mobile-reference open" : "mobile-reference"}>
        {navItems.map(([h,vi,en])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{lang==="vi"?vi:en}</Link>)}
        <div className="language-switch"><button onClick={()=>changeLang("vi")}>VI</button><span>/</span><button onClick={()=>changeLang("en")}>EN</button></div>
      </nav>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="v19-footer v21-footer">
      <div className="v19-footer-brand"><BrandMark /><p>Công nghệ cho vận hành hiện đại — từ sản phẩm y tế đến chuyển đổi số doanh nghiệp.</p><div className="v19-socials">
        <a href="https://www.linkedin.com/company/mihatotech/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn" className="social-linkedin"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM21 13.66c0-3.86-2.06-5.66-4.81-5.66a4.15 4.15 0 0 0-3.76 2.07V8.2H9.1V21h3.33v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21H21v-7.34Z"/></svg></a>
        <a href="https://www.facebook.com/profile.php?id=61594287710319" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook" className="social-facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V13h2.8v8h3.4Z"/></svg></a>
        <a href="https://zalo.me/1000900036476040856" target="_blank" rel="noreferrer" title="Zalo" aria-label="Zalo" className="social-zalo"><span className="zalo-mark">Zalo</span></a>
      </div></div>
      <div className="v21-footer-contact"><b>CÔNG TY CỔ PHẦN MIHATO</b><p>31 Nơ Trang Long, P. Gia Định, TP. Hồ Chí Minh</p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mike%40mihato.tech&su=Trao%20%C4%91%E1%BB%95i%20v%E1%BB%9Bi%20MiHaTo" target="_blank" rel="noreferrer">mike@mihato.tech</a></div>
      <div className="v19-footer-bottom"><span>© 2026 MiHaTo. All rights reserved.</span><span>Technology • Healthcare • Product</span></div>
    </footer>
  );
}
export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-orbit">
        <span />
        <span />
        <span />
      </div>
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-intro-lead">{lead}</div>
    </section>
  );
}


export function BriefButton({ slug, children = "Tìm hiểu thêm" }: { slug: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const b = briefs[slug];
  if (!b) return null;
  async function send(e: React.FormEvent) {
    e.preventDefault(); setStatus("Đang gửi...");
    const r = await fetch('/api/send-brief',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,slug})});
    const j = await r.json().catch(()=>({}));
    if(r.ok){setStatus('Đã gửi. Vui lòng kiểm tra email của bạn.');} else {setStatus(j.error || 'Chưa thể gửi email. Vui lòng thử lại.');}
  }
  return <>
    <button className="brief-link" onClick={()=>setOpen(true)}>{children} <ArrowUpRight size={16}/></button>
    {open && typeof document !== "undefined" && createPortal(<div className="brief-overlay" role="dialog" aria-modal="true" aria-label={b.title}>
      <button className="brief-close" onClick={()=>{setOpen(false);setEmailOpen(false)}} aria-label="Đóng"><X/></button>
      <div className="brief-stage">
        <article className="a4-sheet">
          <header><div className="a4-brand"><BrandMark/></div><span>EXECUTIVE BRIEF · MIHATO</span></header>
          <div className="a4-kicker">{b.label}</div><h1>{b.title}</h1><p className="a4-sub">{b.subtitle}</p>
          <div className="a4-purpose"><b>MỤC ĐÍCH TÀI LIỆU</b><p>{b.purpose}</p></div>
          <div className="a4-sections">{b.sections.map((s,i)=><section key={s.title}><span>0{i+1}</span><div><h2>{s.title}</h2><p>{s.body}</p>{s.bullets&&<ul>{s.bullets.map(x=><li key={x}>{x}</li>)}</ul>}</div></section>)}</div>
          <footer><b>MIHATO JSC</b><span>31 Nơ Trang Long, P. Gia Định, TP.HCM · mike@mihato.tech</span></footer>
        </article>
        <aside className="brief-actions"><p><b>Nhận tài liệu qua email</b><br/>MiHaTo sẽ gửi bản PDF A4 của đúng chủ đề này.</p><button onClick={()=>setEmailOpen(true)}><Mail/> Gửi về email</button>
        {emailOpen&&<form onSubmit={send}><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@company.com"/><button type="submit"><Download/> Gửi bản A4</button>{status&&<p className="brief-status">{status}</p>}</form>}</aside>
      </div>
    </div>, document.body)}
  </>;
}
