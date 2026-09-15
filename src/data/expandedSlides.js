// Bộ Dữ Liệu Slide Trình Chiếu Mở Rộng: 8 Chương (~42 Slide Chi Tiết)
// Sử dụng 100% ẢNH TƯ LIỆU LỊCH SỬ THẬT LƯU TRỮ TRỰC TIẾP TRONG DỰ ÁN (public/images/)
// Đa dạng hóa background từng slide theo các sắc thái Đỏ - Vàng cách mạng đặc sắc

export const CHAPTER_THEMES = {
  1: {
    bgGradient: "from-[#2e090e] via-[#1c0508] to-[#0e0204]",
    glowColor: "rgba(220, 38, 38, 0.18)",
    accentBorder: "border-red-800/60",
    badgeBg: "bg-red-950/80 text-amber-300 border-red-700/60"
  },
  2: {
    bgGradient: "from-[#380d14] via-[#24060b] to-[#120305]",
    glowColor: "rgba(234, 179, 8, 0.16)",
    accentBorder: "border-amber-700/60",
    badgeBg: "bg-amber-950/80 text-amber-200 border-amber-600/60"
  },
  3: {
    bgGradient: "from-[#331109] via-[#200904] to-[#0f0402]",
    glowColor: "rgba(245, 158, 11, 0.18)",
    accentBorder: "border-orange-800/60",
    badgeBg: "bg-orange-950/80 text-amber-300 border-orange-700/60"
  },
  4: {
    bgGradient: "from-[#2b0714] via-[#1a040b] to-[#0d0205]",
    glowColor: "rgba(225, 29, 72, 0.18)",
    accentBorder: "border-rose-900/60",
    badgeBg: "bg-rose-950/80 text-rose-200 border-rose-700/60"
  },
  5: {
    bgGradient: "from-[#3b070d] via-[#250307] to-[#120103]",
    glowColor: "rgba(239, 68, 68, 0.20)",
    accentBorder: "border-red-600/60",
    badgeBg: "bg-red-900/80 text-amber-300 border-red-500/60"
  },
  6: {
    bgGradient: "from-[#301406] via-[#1e0a03] to-[#0e0401]",
    glowColor: "rgba(217, 119, 6, 0.20)",
    accentBorder: "border-amber-800/60",
    badgeBg: "bg-amber-900/80 text-amber-200 border-amber-600/60"
  },
  7: {
    bgGradient: "from-[#360918] via-[#22040e] to-[#110206]",
    glowColor: "rgba(244, 63, 94, 0.18)",
    accentBorder: "border-red-700/60",
    badgeBg: "bg-red-950/80 text-amber-300 border-red-600/60"
  },
  8: {
    bgGradient: "from-[#280c12] via-[#19060a] to-[#0a0204]",
    glowColor: "rgba(250, 204, 21, 0.18)",
    accentBorder: "border-amber-600/60",
    badgeBg: "bg-amber-950/80 text-amber-300 border-amber-500/60"
  }
};

export const LOCAL_IMAGES = {
  bacHoTuyenNgon: "images/bac_ho_tuyen_ngon.jpg",
  bacHoVietBac: "images/bac_ho_viet_bac.jpg",
  dienBienPhu: "images/dien_bien_phu.jpg",
  bacHoVoNguyenGiap: "images/bac_ho_vo_nguyen_giap.jpg",
  cachMangThangTam: "images/cach_mang_thang_tam.jpg",
  giaiPhong1975: "images/giai_phong_1975.jpg",
  bacHoTanTrao: "images/bac_ho_tan_trao_1945.jpg",
  bacHo1964: "images/bac_ho_1964.jpg",
  nguyenAiQuocTre: "images/nguyen_ai_quoc_tre.jpg",
  quocHoi1946: "images/quoc_hoi_khoa_1_1946.jpg",
  quanDoiNhanDan: "images/quan_doi_nhan_dan.jpg",
  hoChiMinh1946: "images/ho_chi_minh_1946.jpg"
};

export const EXPANDED_SLIDE_CHAPTERS = [
  {
    chapterId: 1,
    title: "Chương I: Tổng Quan & Bối Cảnh Lịch Sử",
    slides: [
      {
        id: "1.1",
        subtitle: "Bối Cảnh Lịch Sử Nước Ta Đầu Thế Kỷ XX",
        bullets: [
          "Thực dân Pháp đặt ách cai trị thuộc địa nửa phong kiến từ năm 1858.",
          "Các phong trào yêu nước theo khuynh hướng phong kiến (Cần Vương) đều thất bại.",
          "Các phong trào theo khuynh hướng tư sản (Đông Du, Duy Tân, VN Quốc dân Đảng) rơi vào bế tắc.",
          "Dân tộc Việt Nam chìm trong đêm tối, khủng hoảng sâu sắc về đường lối cứu nước."
        ],
        image: LOCAL_IMAGES.cachMangThangTam,
        imageCaption: "Khí thế quật khởi của nhân dân ta đập tan xiềng xích nô lệ thực dân.",
        quote: "Nước mất, nhà tan, nhân dân lầm than trong kiếp nô lệ lầm than."
      },
      {
        id: "1.2",
        subtitle: "Hành Trình Tìm Đường Cứu Nước Của Nguyễn Tất Thành",
        bullets: [
          "Ngày 5/6/1911: Người rời Cảng Nhà Rồng ra đi tìm đường cứu nước.",
          "Khác các tiền bối sang Nhật, Trung Quốc; Người sang tận phương Tây tìm hiểu cội nguồn.",
          "Bắt gặp Chủ nghĩa Mác - Lênin qua Sơ thảo Luận đề Lênin (7/1920).",
          "Khảo sát thực tiễn Cách mạng Mỹ (1776), Pháp (1789) và Cách mạng Tháng Mười Nga (1917)."
        ],
        image: LOCAL_IMAGES.nguyenAiQuocTre,
        imageCaption: "Đồng chí Nguyễn Ái Quốc thời trẻ hoạt động cách mạng tại Pháp.",
        quote: "Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!"
      },
      {
        id: "1.3",
        subtitle: "Sự Cần Thiết Phải Sáng Tạo Lý Luận",
        bullets: [
          "Chủ nghĩa Mác - Lênin ra đời ở phương Tây tư bản chủ nghĩa phát triển.",
          "Phương Tây: Mâu thuẫn giai cấp (Vô sản vs Tư sản) là mâu thuẫn trung tâm.",
          "Phương Đông thuộc địa: Mâu thuẫn giữa Toàn thể Dân tộc với Thực dân xâm lược.",
          "Không thể áp dụng giáo điều máy móc, phải vận dụng sáng tạo vào hoàn cảnh Việt Nam."
        ],
        image: LOCAL_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ làm việc đơn sơ tại chiến khu cách mạng Việt Bắc.",
        quote: "Học tập Mác - Lênin là nắm lấy tinh thần và phương pháp, tuyệt đối không giáo điều."
      },
      {
        id: "1.4",
        subtitle: "Cương Lĩnh Chính Trị Đầu Tiên (1930)",
        bullets: [
          "Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam (2/1930).",
          "Thông qua Chánh cương vắn tắt và Sách lược vắn tắt do Nguyễn Ái Quốc soạn thảo.",
          "Đường lối: Làm tư sản dân quyền cách mạng và thổ địa cách mạng để tiến sang xã hội cộng sản.",
          "Khẳng định độc lập dân tộc là mục tiêu hàng đầu, quyết định của cách mạng."
        ],
        image: LOCAL_IMAGES.bacHoTanTrao,
        imageCaption: "Bác Hồ tại căn cứ Tân Trào chỉ đạo tổng khởi nghĩa giành độc lập.",
        quote: "Đánh đổ đế quốc chủ nghĩa Pháp và phong kiến, làm cho nước Nam hoàn toàn độc lập."
      },
      {
        id: "1.5",
        subtitle: "Tổng Kết Chương I: Tầm Vóc Lịch Sử",
        bullets: [
          "Hồ Chí Minh đã chấm dứt hoàn toàn cuộc khủng hoảng đường lối cứu nước kéo dài hàng thập kỷ.",
          "Hòa quyện chủ nghĩa yêu nước nồng nàn với thế giới quan khoa học Mác - Lênin.",
          "Đặt nền móng lý luận vững chắc cho thắng lợi của Cách mạng Tháng Tám 1945.",
          "Mở ra kỷ nguyên độc lập tự do và kỷ nguyên làm chủ của nhân dân Việt Nam."
        ],
        image: LOCAL_IMAGES.bacHoTuyenNgon,
        imageCaption: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình lịch sử.",
        quote: "Độc lập dân tộc là ngọn cờ dẫn dắt mọi thắng lợi vẻ vang của dân tộc."
      }
    ]
  },
  {
    chapterId: 2,
    title: "Chương II: Nâng Tầm Quyền Dân Tộc Thành Quyền Con Người",
    slides: [
      {
        id: "2.1",
        subtitle: "Khái Niệm Nhân Quyền Trong Lịch Sử Phương Tây",
        bullets: [
          "Tuyên ngôn Độc lập Mỹ (1776): Khẳng định quyền sống, quyền tự do và mưu cầu hạnh phúc.",
          "Tuyên ngôn Nhân quyền & Dân quyền Pháp (1789): Mọi người sinh ra tự do và bình đẳng.",
          "Hạn chế lớn: Chỉ đóng khung trong phạm vi giai cấp tư sản và cá nhân người da trắng.",
          "Nghịch lý: Các nước tư bản phương Tây lại đem quân đi xâm lược và tước đoạt nhân quyền thuộc địa!"
        ],
        image: LOCAL_IMAGES.bacHoTuyenNgon,
        imageCaption: "Chủ tịch Hồ Chí Minh trích dẫn Tuyên ngôn Mỹ & Pháp năm 1945.",
        quote: "Tạo hóa cho họ những quyền không ai có thể xâm phạm được."
      },
      {
        id: "2.2",
        subtitle: "Bước Phát Triển Triết Học & Pháp Lý Của Hồ Chí Minh",
        bullets: [
          "Từ quyền của CÁ NHÂN con người ➔ Suy rộng thành QUYỀN CỦA CÁC DÂN TỘC.",
          "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng.",
          "Dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.",
          "Đây là cống hiến lịch sử vô giá cho triết học chính trị và pháp lý nhân loại thế kỷ XX."
        ],
        image: LOCAL_IMAGES.cachMangThangTam,
        imageCaption: "Biển người tại Hà Nội giành quyền độc lập, tự do cho Tổ quốc.",
        quote: "Suy rộng ra, câu ấy có nghĩa là: Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng."
      },
      {
        id: "2.3",
        subtitle: "Độc Lập Dân Tộc Là Tiền Đề Cho Quyền Con Người",
        bullets: [
          "Khi quốc gia bị mất độc lập, quyền con người của từng cá nhân đều bị chà đạp.",
          "Không có độc lập dân tộc thì không bao giờ có nhân quyền thực sự.",
          "Quyền dân tộc tự quyết là điều kiện tiên quyết bảo đảm mọi quyền sống của người dân.",
          "Cuộc đấu tranh giải phóng dân tộc chính là cuộc đấu tranh bảo vệ quyền con người cao nhất."
        ],
        image: LOCAL_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ chỉ đạo sự nghiệp giải phóng đất nước tại Việt Bắc.",
        quote: "Nước mất thì nhà tan, dân mang kiếp ngựa trâu thì lấy đâu ra quyền con người!"
      },
      {
        id: "2.4",
        subtitle: "Giá Trị Quốc Tế Cho Phong Trào Thuộc Địa",
        bullets: [
          "Trao vào tay các dân tộc Á - Phi - Mỹ La Tinh vũ khí tư tưởng đấu tranh sắc bén.",
          "Khẳng định các dân tộc thuộc địa bình đẳng hoàn toàn với các nước đế quốc phương Tây.",
          "Tuyên ngôn Độc lập 1945 được coi là Tuyên ngôn giải phóng thuộc địa của thế giới.",
          "Được Liên Hợp Quốc và bạn bè quốc tế trân trọng ghi nhận."
        ],
        image: LOCAL_IMAGES.dienBienPhu,
        imageCaption: "Lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm De Castries.",
        quote: "Tuyên ngôn 1945 là bản Tuyên ngôn Nhân quyền của các dân tộc bị áp bức toàn cầu."
      },
      {
        id: "2.5",
        subtitle: "Nghệ Thuật Ngoại Giao Sắc Bén Của Hồ Chí Minh",
        bullets: [
          "Dẫn lại chính tuyên ngôn của Mỹ và Pháp để buộc đối phương không thể bác bỏ.",
          "Dùng chính vũ khí lý luận của tư sản phương Tây để phản bác hành vi xâm lược ('gậy ông đập lưng ông').",
          "Minh chứng hùng hồn cho tinh thần thượng tôn pháp lý quốc tế của nước Việt Nam mới.",
          "Khẳng định sự thật lịch sử: Việt Nam đã giành lại đất nước từ tay phát xít Nhật."
        ],
        image: LOCAL_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ tuyên bố độc lập trước quốc dân và toàn thế giới.",
        quote: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập."
      },
      {
        id: "2.6",
        subtitle: "Tổng Kết Chương II: Quyền Dân Tộc Thiêng Liêng",
        bullets: [
          "Độc lập dân tộc là quyền thiêng liêng, tự nhiên, bất khả xâm phạm.",
          "Hồ Chí Minh đã đưa tư tưởng quyền con người lên đỉnh cao thời đại.",
          "Gắn chặt quyền tự quyết dân tộc với quyền tự do của mỗi con người.",
          "Kim chỉ nam vững bền cho bảo vệ chủ quyền toàn vẹn lãnh thổ hiện nay."
        ],
        image: LOCAL_IMAGES.giaiPhong1975,
        imageCaption: "Chiến thắng vĩ đại mùa Xuân 1975 hoàn thành trọn vẹn nền độc lập.",
        quote: "Không có gì quý hơn độc lập, tự do!"
      }
    ]
  },
  {
    chapterId: 3,
    title: "Chương III: Độc Lập Dân Tộc Gắn Liền Tự Do, Hạnh Phúc",
    slides: [
      {
        id: "3.1",
        subtitle: "Bác Bỏ Độc Lập Hình Thức & Giả Hiệu",
        bullets: [
          "Kiên quyết phản đối thứ 'độc lập tự trị' hay 'độc lập bù nhìn' do thực dân giật dây.",
          "Độc lập không thể chỉ là danh xưng trên văn bản hay những lời hứa rỗng tuếch.",
          "Độc lập phải mang lại sự giải phóng thực tế và quyền làm chủ cho quần chúng lao động.",
          "Bác Hồ chỉ rõ: Nền độc lập phải là độc lập hoàn toàn, triệt để và thực chất."
        ],
        image: LOCAL_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ làm việc giản dị bên bàn đá chông chênh.",
        quote: "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
      },
      {
        id: "3.2",
        subtitle: "Ba Nhiệm Vụ Cấp Bách Sau Cách Mạng Tháng Tám",
        bullets: [
          "1. Diệt giặc đói: Khẩn trương nhường cơm sẻ áo, tăng gia sản xuất cứu đói.",
          "2. Diệt giặc dốt: Mở rộng Bình dân học vụ, giúp hàng triệu đồng bào biết chữ.",
          "3. Diệt giặc ngoại xâm: Xây dựng lực lượng vũ trang bảo vệ nền cộng hòa non trẻ.",
          "Gắn kết chặt chẽ vận mệnh độc lập với từng bữa cơm, manh áo của nhân dân."
        ],
        image: LOCAL_IMAGES.quocHoi1946,
        imageCaption: "Chủ tịch Hồ Chí Minh và đại biểu Quốc hội khóa I năm 1946.",
        quote: "Chúng ta phải làm cho dân có ăn, có mặc, có chỗ ở, có học hành."
      },
      {
        id: "3.3",
        subtitle: "Triết Lý Cán Bộ Là 'Công Bộc Của Dân'",
        bullets: [
          "Cán bộ, đảng viên từ trên xuống dưới đều là 'đầy tớ trung thành của nhân dân'.",
          "Việc gì có lợi cho dân, ta phải hết sức làm.",
          "Việc gì có hại cho dân, ta phải hết sức tránh.",
          "Xây dựng chính quyền liêm chính, tuyệt đối không được quan liêu, hách dịch."
        ],
        image: LOCAL_IMAGES.hoChiMinh1946,
        imageCaption: "Chân dung Chủ tịch Hồ Chí Minh năm 1946.",
        quote: "Ủy ban nhân dân làng, huyện, tỉnh là người gánh việc chung cho dân, chứ không phải để đè đầu cưỡi cổ dân."
      },
      {
        id: "3.4",
        subtitle: "Độc Lập Hồ Chí Minh Khác Gì Độc Lập Tư Sản?",
        bullets: [
          "Cách mạng tư sản: Thay thế vua quan phong kiến bằng giới tài phiệt tư sản.",
          "Giai cấp công nhân, nông dân trong chế độ tư sản vẫn chịu cảnh bóc lột sức lao động.",
          "Độc lập theo Hồ Chí Minh: Quyền lực nhà nước thuộc về toàn thể nhân dân lao động.",
          "Thống nhất hữu cơ giữa lợi ích của giai cấp cần lao và lợi ích của cả dân tộc."
        ],
        image: LOCAL_IMAGES.bacHoVoNguyenGiap,
        imageCaption: "Bác Hồ và Đại tướng Võ Nguyên Giáp tại căn cứ kháng chiến.",
        quote: "Cách mệnh đến nơi là làm sao trao toàn bộ quyền lực về tay quảng đại quần chúng nhân dân."
      },
      {
        id: "3.5",
        subtitle: "Thước Đo Giá Trị Thực Tiễn Của Độc Lập",
        bullets: [
          "Chất lượng cuộc sống vật chất và tinh thần của mọi gia đình Việt Nam.",
          "Mức độ dân chủ, công bằng xã hội và sự tiến bộ về giáo dục, y tế.",
          "Quyền bình đẳng của phụ nữ, đồng bào thiểu số và các tầng lớp lao động.",
          "Khát vọng vươn lên xây dựng đất nước đàng hoàng hơn, to đẹp hơn."
        ],
        image: LOCAL_IMAGES.giaiPhong1975,
        imageCaption: "Nhân dân chào đón đoàn quân chiến thắng trong niềm hân hoan độc lập.",
        quote: "Dân chỉ biết giá trị của tự do, độc lập khi dân được ăn no, mặc ấm và học hành."
      },
      {
        id: "3.6",
        subtitle: "Tổng Kết Chương III: Nhân Văn Hồ Chí Minh",
        bullets: [
          "Độc lập là tiền đề, tự do hạnh phúc của nhân dân là mục tiêu thiêng liêng tối thượng.",
          "Hồ Chí Minh đã đưa chủ nghĩa nhân văn cách mạng vào từng quyết sách quốc gia.",
          "Tạo nên chất keo gắn kết bền chặt lòng dân với sự nghiệp cách mạng vẻ vang.",
          "Cơ sở lý luận nền tảng cho Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam."
        ],
        image: LOCAL_IMAGES.bacHo1964,
        imageCaption: "Chủ tịch Hồ Chí Minh luôn giữ trọn tình yêu thương bao la cho nhân dân.",
        quote: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do."
      }
    ]
  },
  {
    chapterId: 4,
    title: "Chương IV: Khẳng Định Con Đường Cách Mạng Vô Sản",
    slides: [
      {
        id: "4.1",
        subtitle: "Khắc Phục Bế Tắc Của Các Bậc Tiền Bối",
        bullets: [
          "Phan Bội Châu: Chủ trương dựa vào Nhật Bản ➔ Bác Hồ nhận định: 'Đuổi hổ cửa trước, rước hùm cửa sau'.",
          "Phan Châu Trinh: Kêu gọi Pháp thực hiện cải cách ➔ Bác Hồ chỉ rõ: 'Xin giặc rủ lòng thương'.",
          "Hoàng Hoa Thám: Khởi nghĩa nông dân Yên Thế ➔ Mang tính tự phát, thiếu hệ tư tưởng dẫn đường.",
          "Nguyễn Ái Quốc rút ra bài học: Không thể giải phóng dân tộc theo hệ tư tưởng cũ."
        ],
        image: LOCAL_IMAGES.nguyenAiQuocTre,
        imageCaption: "Đồng chí Nguyễn Ái Quốc tại Pháp tìm con đường cứu nước mới.",
        quote: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản."
      },
      {
        id: "4.2",
        subtitle: "Đánh Giá Tính Chất Các Cuộc Cách Mạng",
        bullets: [
          "Cách mạng Mỹ (1776) & Pháp (1789): Đều là cách mạng tư bản 'chưa đến nơi'.",
          "Trong nước thì tước đoạt thành quả của công nông, ngoài nước thì áp bức thuộc địa.",
          "Cách mạng Tháng Mười Nga (1917): Là cuộc cách mạng triệt để nhất, 'cách mệnh đến nơi'.",
          "Mở ra thời đại mới giải phóng cả giai cấp lao động lẫn các dân tộc bị đô hộ."
        ],
        image: LOCAL_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ nghiên cứu bài học lịch sử của Cách mạng Tháng Mười Nga.",
        quote: "Trong thế giới bây giờ chỉ có cách mệnh Nga là đã thành công, và thành công đến nơi."
      },
      {
        id: "4.3",
        subtitle: "Vai Trò Lãnh Đạo Tiên Phong Của Đảng",
        bullets: [
          "Cách mạng giải phóng dân tộc muốn thắng lợi phải có Đảng cách mạng dẫn đường.",
          "Đảng phải lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng và kim chỉ nam hành động.",
          "Đảng là đội ngũ tiên phong, quy tụ những chiến sĩ kiên trung nhất của dân tộc.",
          "Đảng đại biểu cho lợi ích của giai cấp công nhân, nhân dân lao động và toàn thể dân tộc."
        ],
        image: LOCAL_IMAGES.bacHoTanTrao,
        imageCaption: "Đảng và Bác Hồ lãnh đạo tổng khởi nghĩa toàn quốc.",
        quote: "Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
      },
      {
        id: "4.4",
        subtitle: "Lực Lượng Nòng Cốt: Khối Liên Minh Công - Nông",
        bullets: [
          "Công nhân và nông dân là lực lượng đông đảo nhất, chịu áp bức nặng nề nhất.",
          "Liên minh công - nông là 'gốc rễ' vững chãi của cách mạng giải phóng dân tộc.",
          "Tiểu tư sản, tư sản dân tộc, trí thức và địa chủ yêu nước là 'bầu bạn' quan trọng.",
          "Quy tụ sức mạnh toàn dân trong Mặt trận Dân tộc Thống nhất."
        ],
        image: LOCAL_IMAGES.dienBienPhu,
        imageCaption: "Khối liên minh công - nông - binh đồng lòng tại chiến hào Điện Biên.",
        quote: "Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, địa chủ nhỏ là bầu bạn cách mệnh."
      },
      {
        id: "4.5",
        subtitle: "Kết Hợp Sức Mạnh Dân Tộc Với Sức Mạnh Thời Đại",
        bullets: [
          "Cách mạng Việt Nam hòa nhịp cùng dòng chảy của cách mạng vô sản thế giới.",
          "Gắn bó khăng khít với phong trào công nhân quốc tế và phong trào hòa bình.",
          "Tranh thủ tối đa sự ủng hộ, giúp đỡ chí tình của các lực lượng tiến bộ.",
          "Luôn kiên định nguyên tắc tự lực, tự cường, không trông chờ thụ động."
        ],
        image: LOCAL_IMAGES.quanDoiNhanDan,
        imageCaption: "Quân đội Nhân dân Việt Nam chiến đấu vì độc lập và thời đại.",
        quote: "Sự kết hợp giữa sức mạnh dân tộc và sức mạnh thời đại tạo nên sức mạnh vô địch."
      },
      {
        id: "4.6",
        subtitle: "Tổng Kết Chương IV: Lựa Chọn Lịch Sử Tất Yếu",
        bullets: [
          "Đưa cách mạng Việt Nam vào quỹ đạo phát triển tiến bộ của lịch sử nhân loại.",
          "Chấm dứt hơn 80 năm nô lệ tăm tối, lập nên nước Việt Nam Dân chủ Cộng hòa.",
          "Khẳng định thiên tài tư tưởng của Nguyễn Ái Quốc - Hồ Chí Minh.",
          "Ngọn cờ lý luận bất diệt soi đường cho cách mạng hôm nay và mai sau."
        ],
        image: LOCAL_IMAGES.bacHoTuyenNgon,
        imageCaption: "Chủ tịch Hồ Chí Minh khai sinh nước Việt Nam mới năm 1945.",
        quote: "Con đường cách mạng vô sản là con đường giải phóng duy nhất đúng đắn."
      }
    ]
  },
  {
    chapterId: 5,
    title: "Chương V: Giải Quyết Mối Quan Hệ Dân Tộc & Giai Cấp",
    slides: [
      {
        id: "5.1",
        subtitle: "Khác Biệt Thực Tiễn Châu Âu & Việt Nam Thuộc Địa",
        bullets: [
          "Châu Âu: Xã hội phân hóa giai cấp sâu sắc, đối kháng vô sản vs tư sản là chủ yếu.",
          "C.Mác & Ph.Ăngghen đặt trọng tâm vào đấu tranh giai cấp để xóa bỏ người bóc lột người.",
          "Việt Nam thuộc địa: Mâu thuẫn bao trùm là giữa toàn thể Dân tộc với Thực dân xâm lược.",
          "Mọi giai cấp trong nước (công, nông, trí, tư sản dân tộc) đều chung kiếp mất nước."
        ],
        image: LOCAL_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ khảo sát thực tiễn xã hội thuộc địa Việt Nam.",
        quote: "Cuộc đấu tranh ở thuộc địa trước hết là cuộc đấu tranh sinh tử để giải phóng dân tộc."
      },
      {
        id: "5.2",
        subtitle: "Đặt Giải Phóng Dân Tộc Lên Hàng Đầu, Trên Hết",
        bullets: [
          "Hội nghị Trung ương 8 (5/1941) tại Pác Bó dưới sự chủ trì của Nguyễn Ái Quốc.",
          "Đột phá chiến lược: Tạm gác khẩu hiệu cách mạng thổ địa, tập trung đánh đổ Pháp - Nhật.",
          "Thành lập Mặt trận Việt Minh để quy tụ toàn thể những người có lòng yêu nước.",
          "Lợi ích giai cấp bộ phận phải phục tùng nhiệm vụ giải phóng dân tộc tối thượng."
        ],
        image: LOCAL_IMAGES.bacHoTanTrao,
        imageCaption: "Nguyễn Ái Quốc chủ trì chuyển hướng chiến lược cách mạng lịch sử.",
        quote: "Quyền lợi của bộ phận, của giai cấp phải phục tùng sự sinh tử, tồn vong của quốc gia, của dân tộc."
      },
      {
        id: "5.3",
        subtitle: "Luận Điểm 'Sinh Tử Tồn Vong' Của Dân Tộc",
        bullets: [
          "Nếu không đánh đổ được đế quốc, không giành được độc lập thì giai cấp cũng chịu kiếp trâu ngựa.",
          "Quyền lợi của giai cấp công nhân và nông dân chỉ có thể được bảo đảm khi nước nhà độc lập.",
          "Giải phóng dân tộc là tiền đề sống còn để tiến hành giải phóng giai cấp.",
          "Độc lập cho Tổ quốc là ngọn đuốc mở đường cho ấm no xã hội chủ nghĩa."
        ],
        image: LOCAL_IMAGES.cachMangThangTam,
        imageCaption: "Quần chúng nhân dân nhất tề đứng lên cứu quốc theo lời kêu gọi Việt Minh.",
        quote: "Không giải quyết được vấn đề dân tộc thì quyền lợi bộ phận, giai cấp vạn năm cũng không đòi lại được."
      },
      {
        id: "5.4",
        subtitle: "Chiến Lược Đại Đoàn Kết Toàn Dân Tộc",
        bullets: [
          "Không phân biệt tôn giáo, đẳng cấp, dân tộc thiểu số hay đa số.",
          "Kêu gọi các nhân sĩ, trí thức, địa chủ yêu nước và tư sản dân tộc tham gia kháng chiến.",
          "Xóa bỏ những định kiến giai cấp giáo điều hẹp hòi gây chia rẽ lực lượng cách mạng.",
          "Đúc kết sức mạnh vĩ đại của tinh thần dân tộc chân chính Việt Nam."
        ],
        image: LOCAL_IMAGES.quocHoi1946,
        imageCaption: "Khối đại đoàn kết toàn dân thể hiện qua Quốc hội khóa I năm 1946.",
        quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."
      },
      {
        id: "5.5",
        subtitle: "Đóng Góp Lý Luận Sáng Tạo Xuất Sắc",
        bullets: [
          "Làm phong phú thêm kho tàng lý luận Mác - Lênin về chiến lược cách mạng thuộc địa.",
          "Khẳng định chủ nghĩa dân tộc chân chính là một động lực vĩ đại của các nước phương Đông.",
          "Kết hợp hài hòa giữa ngọn cờ Dân tộc và ngọn cờ Giai cấp một cách nhuần nhuyễn.",
          "Thực tiễn Cách mạng Tháng Tám và hai cuộc kháng chiến đã chứng minh chân lý rực rỡ."
        ],
        image: LOCAL_IMAGES.dienBienPhu,
        imageCaption: "Sức mạnh đại đoàn kết dân tộc tạo nên Điện Biên Phủ lừng lẫy năm châu.",
        quote: "Chủ nghĩa yêu nước chân chính là động lực to lớn của dân tộc ta."
      },
      {
        id: "5.6",
        subtitle: "Tổng Kết Chương V: Lợi Ích Quốc Gia Là Tối Cao",
        bullets: [
          "Đặt lợi ích quốc gia - dân tộc lên trên hết là bài học xương máu của cách mạng.",
          "Giữ vững và không ngừng củng cố khối đại đoàn kết toàn dân tộc.",
          "Soi sáng sự nghiệp Đổi mới: Động viên mọi nguồn lực người Việt Nam trong và ngoài nước.",
          "Bảo vệ vững chắc nền độc lập, chủ quyền và toàn vẹn lãnh thổ quốc gia."
        ],
        image: LOCAL_IMAGES.giaiPhong1975,
        imageCaption: "Toàn dân tộc chung khúc khải hoàn ngày non sông thu về một mối.",
        quote: "Lợi ích của quốc gia dân tộc là thiêng liêng và tối thượng."
      }
    ]
  },
  {
    chapterId: 6,
    title: "Chương VI: Tính Chủ Động Của Cách Mạng Thuộc Địa",
    slides: [
      {
        id: "6.1",
        subtitle: "Bác Bỏ Tư Tưởng Thụ Động Của Quốc Tế III",
        bullets: [
          "Quốc tế Cộng sản thời kỳ đầu có quan điểm: Cách mạng thuộc địa phụ thuộc vào chính quốc.",
          "Họ coi thuộc địa chỉ là 'hậu phương' thụ động chờ giai cấp vô sản phương Tây giải phóng.",
          "Hồ Chí Minh kiên quyết đứng lên phê phán và bác bỏ luận điểm sai lầm đó.",
          "Khẳng định nhân dân thuộc địa hoàn toàn có đủ tiềm năng và ý chí tự đứng lên giải phóng."
        ],
        image: LOCAL_IMAGES.nguyenAiQuocTre,
        imageCaption: "Nguyễn Ái Quốc phát biểu kiên cường tại các diễn đàn quốc tế.",
        quote: "Cách mạng thuộc địa không phụ thuộc một cách thụ động vào cách mạng ở chính quốc."
      },
      {
        id: "6.2",
        subtitle: "Luận Điểm 'Con Đỉa Hai Vòi' Bất Hủ",
        bullets: [
          "Trong 'Bản án chế độ thực dân Pháp' (1925), Người ví CNTB như một con đỉa hai vòi.",
          "Một vòi bám vào giai cấp vô sản chính quốc, một vòi bám hút máu nhân dân thuộc địa.",
          "Nọc độc và nguồn sống khổng lồ của chủ nghĩa thực dân nằm ở các xứ thuộc địa.",
          "Muốn tiêu diệt con đỉa, phải chặt đứt cả hai vòi, và thuộc địa là nơi mắt xích yếu nhất!"
        ],
        image: LOCAL_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ đúc kết thực tiễn bóc lột của thực dân trong các tác phẩm lý luận.",
        quote: "Nọc độc và sức sống của con đỉa tư bản thực dân nằm chính ở các thuộc địa."
      },
      {
        id: "6.3",
        subtitle: "Khả Năng Thắng Lợi Trước Của Cách Mạng Thuộc Địa",
        bullets: [
          "Thuộc địa có thể nổ ra cách mạng vũ trang và giành thắng lợi trước chính quốc.",
          "Sau khi giành độc lập, thuộc địa sẽ tác động mạnh mẽ giúp đỡ cách mạng ở chính quốc.",
          "Chủ động đánh vào yết hầu kinh tế và nguyên liệu của chủ nghĩa đế quốc.",
          "Khơi dậy khí phách quật khởi của hàng trăm triệu người cùng khổ khắp năm châu."
        ],
        image: LOCAL_IMAGES.cachMangThangTam,
        imageCaption: "Cách mạng Tháng Tám giành thắng lợi rực rỡ năm 1945.",
        quote: "Cách mạng giải phóng dân tộc ở thuộc địa có thể nổ ra và giành thắng lợi trước cách mạng chính quốc!"
      },
      {
        id: "6.4",
        subtitle: "Phương Châm 'Đem Sức Ta Mà Tự Giải Phóng Cho Ta'",
        bullets: [
          "Tuyệt đối không có tư tưởng ỉ lại, trông chờ vào sự can thiệp từ bên ngoài.",
          "Nội lực dân tộc là nhân tố quyết định nhất; ngoại lực hỗ trợ là quan trọng.",
          "Tự lực cánh sinh, gian khổ phấn đấu là truyền thống quật cường của dân tộc ta.",
          "Dám đánh, quyết đánh và biết cách đánh thắng mọi kẻ thù xâm lược."
        ],
        image: LOCAL_IMAGES.bacHoVoNguyenGiap,
        imageCaption: "Bác Hồ và Đại tướng Võ Nguyên Giáp chỉ đạo tác chiến tự lực cánh sinh.",
        quote: "Đem sức ta mà tự giải phóng cho ta!"
      },
      {
        id: "6.5",
        subtitle: "Thực Tiễn Lịch Sử Kiểm Chứng Hùng Hồn",
        bullets: [
          "Cách mạng Tháng Tám năm 1945 nổ ra và thắng lợi trọn vẹn tại Việt Nam.",
          "Lúc bấy giờ, phong trào cách mạng vô sản tại chính quốc Pháp vẫn chưa thành công.",
          "Chiến thắng Điện Biên Phủ năm 1954 làm rung chuyển và sụp đổ chủ nghĩa thực dân kiểu cũ.",
          "Minh chứng hùng hồn cho thiên tài dự báo lý luận xuất chúng của Bác Hồ."
        ],
        image: LOCAL_IMAGES.dienBienPhu,
        imageCaption: "Tướng giặc De Castries cúi đầu đầu hàng tại chiến dịch Điện Biên Phủ.",
        quote: "Thực tiễn Cách mạng Việt Nam đã chứng minh chân lý sáng ngời của Hồ Chí Minh."
      },
      {
        id: "6.6",
        subtitle: "Tổng Kết Chương VI: Bản Lĩnh Tự Lực Tự Cường",
        bullets: [
          "Đập tan mặc cảm tự ti, nâng cao lòng tự tôn và ý chí độc lập của dân tộc.",
          "Bài học vô giá về tinh thần chủ động sáng tạo trong thời đại mới.",
          "Tự chủ kinh tế, làm chủ công nghệ, xây dựng nền quốc phòng vững mạnh.",
          "Xây dựng đất nước hùng cường bằng chính trí tuệ và bàn tay người Việt Nam."
        ],
        image: LOCAL_IMAGES.giaiPhong1975,
        imageCaption: "Bản lĩnh độc lập tự chủ mang lại thắng lợi thống nhất giang sơn.",
        quote: "Tự lực tự cường là bí quyết vĩ đại nhất để giữ vững nền độc lập."
      }
    ]
  },
  {
    chapterId: 7,
    title: "Chương VII: Độc Lập Dân Tộc Gắn Liền Chủ Nghĩa Xã Hội",
    slides: [
      {
        id: "7.1",
        subtitle: "Cốt Lõi Đỉnh Cao Trong Tư Tưởng Hồ Chí Minh",
        bullets: [
          "Độc lập dân tộc gắn liền với Chủ nghĩa Xã hội là sợi chỉ đỏ xuyên suốt con đường cách mạng.",
          "Nếu độc lập mà đi theo con đường TBCN thì nhân dân lao động vẫn tiếp tục bị bóc lột.",
          "Chỉ có CNXH mới giải quyết triệt để vấn đề người bóc lột người và bất công xã hội.",
          "Bảo đảm cho đất nước độc lập vĩnh viễn và nhân dân hạnh phúc thực sự."
        ],
        image: LOCAL_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ khẳng định mục tiêu độc lập dân tộc tiến lên CNXH.",
        quote: "Độc lập dân tộc là tiền đề, chủ nghĩa xã hội là bảo đảm vững bền."
      },
      {
        id: "7.2",
        subtitle: "Độc Lập Dân Tộc Là Tiền Đề Tiên Quyết",
        bullets: [
          "Chỉ khi có độc lập dân tộc mới có chính quyền của dân để bắt tay xây dựng CNXH.",
          "Độc lập dân tộc giải phóng sức lao động và tài nguyên đất nước khỏi ách ngoại bang.",
          "Không giành được độc lập thì mọi lý thuyết xây dựng CNXH đều trở nên vô nghĩa.",
          "Độc lập là bậc thang đầu tiên vững chắc để dân tộc bước lên nấc thang CNXH."
        ],
        image: LOCAL_IMAGES.cachMangThangTam,
        imageCaption: "Giành chính quyền độc lập mở đường tiến vào kỷ nguyên xã hội chủ nghĩa.",
        quote: "Không có độc lập thì không thể nói tới việc xây dựng chủ nghĩa xã hội."
      },
      {
        id: "7.3",
        subtitle: "Chủ Nghĩa Xã Hội Là Bảo Đảm Vững Bền",
        bullets: [
          "CNXH tạo dựng tiềm lực kinh tế, quốc phòng, văn hóa xã hội hùng mạnh vượt bậc.",
          "Xây dựng khối liên minh công - nông - trí thức ngày càng bền vững.",
          "Đem lại cuộc sống ấm no, công bằng, nâng cao dân trí và phẩm hạnh con người.",
          "Làm cho toàn dân đồng lòng quyết tử giữ gìn từng tấc đất thiêng liêng của Tổ quốc."
        ],
        image: LOCAL_IMAGES.dienBienPhu,
        imageCaption: "Hậu phương miền Bắc XHCN chi viện sức người sức của đánh thắng giặc thù.",
        quote: "Chỉ có chủ nghĩa xã hội mới mang lại thành trì kiên cố bảo vệ nền độc lập."
      },
      {
        id: "7.4",
        subtitle: "Bản Chất Mộc Mạc Của CNXH Theo Hồ Chí Minh",
        bullets: [
          "Không phải là những giáo điều hàn lâm xa lạ với đời sống thực tế.",
          "Chủ nghĩa xã hội là làm cho dân giàu, nước mạnh, công bằng và văn minh.",
          "Là cơm no áo ấm, trẻ em được cắp sách tới trường, người già được phụng dưỡng.",
          "Là giải phóng con người khỏi nghèo nàn, lạc hậu, phát triển tự do toàn diện."
        ],
        image: LOCAL_IMAGES.bacHo1964,
        imageCaption: "Bác Hồ luôn dành trọn tâm can chăm lo đời sống ấm no cho nhân dân.",
        quote: "Chủ nghĩa xã hội trước hết là làm cho nhân dân thoát nghèo, được ăn no mặc ấm và sống cuộc đời hạnh phúc."
      },
      {
        id: "7.5",
        subtitle: "Đặc Điểm Quá Độ Lên CNXH Tại Việt Nam",
        bullets: [
          "Xuất phát điểm là một nước thuộc địa nông nghiệp lạc hậu, chịu tàn phá nặng nề của chiến tranh.",
          "Quá độ tiến thẳng lên CNXH bỏ qua chế độ tư bản chủ nghĩa.",
          "Đây là sự nghiệp sáng tạo vĩ đại nhưng cũng đầy thử thách cam go.",
          "Đòi hỏi đổi mới không ngừng tư duy kinh tế và phương thức quản lý xã hội."
        ],
        image: LOCAL_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ chỉ ra quy luật xây dựng chủ nghĩa xã hội đặc thù Việt Nam.",
        quote: "Xây dựng chủ nghĩa xã hội là một cuộc cách mạng lâu dài, gian khổ nhưng nhất định thắng lợi."
      },
      {
        id: "7.6",
        subtitle: "Tổng Kết Chương VII: Ngọn Cờ Sống Còn Của Dân Tộc",
        bullets: [
          "Độc lập dân tộc gắn liền với CNXH là quy luật phát triển tất yếu của lịch sử Việt Nam.",
          "Giúp dân tộc ta vượt qua mọi biến động thăng trầm của lịch sử thế giới.",
          "Soi đường cho công cuộc Đổi mới, phát triển kinh tế thị trường định hướng XHCN.",
          "Khát vọng hiện thực hóa mục tiêu dân giàu, nước mạnh, dân chủ, văn minh."
        ],
        image: LOCAL_IMAGES.giaiPhong1975,
        imageCaption: "Giang sơn gấm vóc liền một dải tiến bước vững chắc trên con đường XHCN.",
        quote: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là con đường phát triển duy nhất đúng đắn."
      }
    ]
  },
  {
    chapterId: 8,
    title: "Chương VIII: Giá Trị Thời Đại & Bài Học Hiện Nay",
    slides: [
      {
        id: "8.1",
        subtitle: "Tầm Ảnh Hưởng Tới Nhân Loại Tiến Bộ",
        bullets: [
          "Ngọn hải đăng dẫn đường cho các dân tộc bị áp bức toàn cầu đứng lên tự giải phóng.",
          "Góp phần làm sụp đổ hoàn toàn hệ thống thuộc địa của chủ nghĩa thực dân trên thế giới.",
          "UNESCO ra Nghị quyết tôn vinh Hồ Chí Minh là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất.",
          "Biểu tượng sáng ngời cho tinh thần hòa bình, hữu nghị và hợp tác giữa các quốc gia."
        ],
        image: LOCAL_IMAGES.bacHoTuyenNgon,
        imageCaption: "Chủ tịch Hồ Chí Minh – Danh nhân văn hóa kiệt xuất của nhân loại.",
        quote: "Hồ Chí Minh là biểu tượng bất diệt của khát vọng độc lập, tự do cho các dân tộc."
      },
      {
        id: "8.2",
        subtitle: "Bài Học Cho Công Cuộc Đổi Mới & Hội Nhập",
        bullets: [
          "Giữ vững độc lập tự chủ trong hoạch định đường lối đối nội và đối ngoại.",
          "Kết hợp chặt chẽ nội lực và ngoại lực, trong đó nội lực luôn đóng vai trò quyết định.",
          "Chủ động, tích cực hội nhập quốc tế toàn diện, sâu rộng: 'Hòa nhập nhưng không hòa tan'.",
          "Bảo đảm cao nhất lợi ích quốc gia - dân tộc trên cơ sở luật pháp quốc tế."
        ],
        image: LOCAL_IMAGES.hoChiMinh1946,
        imageCaption: "Bản lĩnh ngoại giao kiệt xuất Hồ Chí Minh soi sáng đường lối đối ngoại hôm nay.",
        quote: "Dĩ bất biến, ứng vạn biến trong công cuộc bảo vệ và phát triển đất nước."
      },
      {
        id: "8.3",
        subtitle: "Bảo Vệ Vững Chắc Chủ Quyền Biển Đảo & Lãnh Thổ",
        bullets: [
          "Xây dựng nền quốc phòng toàn dân và an ninh nhân dân vững mạnh toàn diện.",
          "Kiên quyết, kiên trì giữ gìn từng tấc đất biên cương, biển đảo thiêng liêng của Tổ quốc.",
          "Kết hợp sức mạnh quốc phòng với đấu tranh chính trị, pháp lý và ngoại giao hòa bình.",
          "Giữ vững môi trường hòa bình, ổn định bền vững để kiến thiết và phát triển non sông."
        ],
        image: LOCAL_IMAGES.dienBienPhu,
        imageCaption: "Quân đội Nhân dân Việt Nam anh hùng bảo vệ vững chắc biên cương Tổ quốc.",
        quote: "Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước."
      },
      {
        id: "8.4",
        subtitle: "Xây Dựng Đảng & Nhà Nước Trong Sạch, Vững Mạnh",
        bullets: [
          "Xây dựng, chỉnh đốn Đảng trong sạch, xứng đáng là người lãnh đạo, người đày tớ của dân.",
          "Quyết liệt đẩy lùi tham nhũng, lãng phí, tiêu cực và suy thoái tư tưởng chính trị.",
          "Thực hành dân chủ rộng rãi, phát huy cao độ quyền làm chủ thực chất của nhân dân.",
          "Củng cố mối quan hệ máu thịt gắn bó keo sơn giữa Đảng và nhân dân."
        ],
        image: LOCAL_IMAGES.bacHo1964,
        imageCaption: "Bác Hồ luôn căn dặn giữ gìn Đảng trong sạch, phục vụ nhân dân.",
        quote: "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên phải thật sự thấm nhuần đạo đức cách mạng."
      },
      {
        id: "8.5",
        subtitle: "Khát Vọng Kỷ Nguyên Vươn Mình Của Dân Tộc",
        bullets: [
          "Tư tưởng Hồ Chí Minh về độc lập dân tộc là tài sản tinh thần vô giá trường tồn cùng non sông.",
          "Truyền cảm hứng mạnh mẽ cho thế hệ trẻ học tập, rèn đức luyện tài cống hiến cho đất nước.",
          "Hiện thực hóa Di chúc thiêng liêng: Xây dựng đất nước ta đàng hoàng hơn, to đẹp hơn.",
          "Tự tin bước vào kỷ nguyên mới – Kỷ nguyên vươn mình của dân tộc Việt Nam."
        ],
        image: LOCAL_IMAGES.giaiPhong1975,
        imageCaption: "Việt Nam hòa bình, độc lập, phồn vinh vững bước trên con đường tương lai.",
        quote: "Toàn Đảng, toàn dân ta quyết tâm xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh."
      }
    ]
  }
];
