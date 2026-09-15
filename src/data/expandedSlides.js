// Bộ Dữ Liệu Slide Trình Chiếu Mở Rộng: 8 Chương (~42 Slide Chi Tiết)
// Hỗ trợ ĐA DẠNG LAYOUT (6 kiểu bố cục khác nhau) và ĐA DẠNG HIỆU ỨNG CHỮ
// 100% Ảnh tỷ lệ nguyên bản (object-contain), KHÔNG CẮT XÉN ẢNH, KHÔNG TEXT DƯ THỪA

export const CHAPTER_THEMES = {
  1: {
    bgGradient: "from-[#2e080f] via-[#1a0409] to-[#0c0204]",
    glowColor: "rgba(220, 38, 38, 0.25)",
    accentBorder: "border-red-600/60",
    badgeBg: "bg-red-950/90 text-amber-300 border-red-500/70"
  },
  2: {
    bgGradient: "from-[#390d16] via-[#23060d] to-[#100205]",
    glowColor: "rgba(234, 179, 8, 0.22)",
    accentBorder: "border-amber-500/60",
    badgeBg: "bg-amber-950/90 text-amber-200 border-amber-400/70"
  },
  3: {
    bgGradient: "from-[#341108] via-[#200904] to-[#0e0402]",
    glowColor: "rgba(245, 158, 11, 0.25)",
    accentBorder: "border-orange-600/60",
    badgeBg: "bg-orange-950/90 text-amber-300 border-orange-500/70"
  },
  4: {
    bgGradient: "from-[#2f0616] via-[#1c030d] to-[#0d0106]",
    glowColor: "rgba(225, 29, 72, 0.24)",
    accentBorder: "border-rose-700/60",
    badgeBg: "bg-rose-950/90 text-rose-200 border-rose-500/70"
  },
  5: {
    bgGradient: "from-[#3c060e] via-[#240307] to-[#120103]",
    glowColor: "rgba(239, 68, 68, 0.26)",
    accentBorder: "border-red-500/70",
    badgeBg: "bg-red-900/90 text-amber-300 border-red-400/70"
  },
  6: {
    bgGradient: "from-[#311306] via-[#1f0a03] to-[#0e0301]",
    glowColor: "rgba(217, 119, 6, 0.25)",
    accentBorder: "border-amber-600/60",
    badgeBg: "bg-amber-900/90 text-amber-200 border-amber-400/70"
  },
  7: {
    bgGradient: "from-[#380819] via-[#23040f] to-[#110207]",
    glowColor: "rgba(244, 63, 94, 0.24)",
    accentBorder: "border-red-600/60",
    badgeBg: "bg-red-950/90 text-amber-300 border-red-500/70"
  },
  8: {
    bgGradient: "from-[#2c0c14] via-[#1a050b] to-[#0a0204]",
    glowColor: "rgba(250, 204, 21, 0.24)",
    accentBorder: "border-amber-500/60",
    badgeBg: "bg-amber-950/90 text-amber-300 border-amber-400/70"
  }
};

export const COLOR_IMAGES = {
  bacHoPortraitColor: "images/bac_ho_portrait_color.jpg",
  bacHoUncleHoColor: "images/bac_ho_uncle_ho_color.jpg",
  bacHoBerlinColor: "images/ho_chi_minh_color_berlin.jpg",
  bacHoTranDiaTenLua: "images/bac_ho_tran_dia_ten_lua.jpg",
  bacHo1950s: "images/bac_ho_1950s.jpg",
  bacHo1964: "images/bac_ho_1964.jpg",
  bacHoDaiDoan308: "images/bac_ho_dai_doan_308.jpg",
  bacHoThieuNhi: "images/bac_ho_thieu_nhi.jpg",
  bacHoVoNguyenGiap: "images/bac_ho_vo_nguyen_giap.jpg",
  bacHoTuyenNgon: "images/bac_ho_tuyen_ngon.jpg",
  dienBienPhu: "images/dien_bien_phu.jpg",
  giaiPhong1975: "images/giai_phong_1975.jpg",
  cachMangThangTam: "images/cach_mang_thang_tam.jpg",
  coDoSaoVang: "images/co_do_sao_vang.svg",
  quanDoiNhanDan: "images/quan_doi_nhan_dan.jpg",
  quocHoi1946: "images/quoc_hoi_khoa_1_1946.jpg",
  bacHoTanTrao: "images/bac_ho_tan_trao_1945.jpg",
  bacHoVietBac: "images/bac_ho_viet_bac.jpg"
};

// 6 kiểu Layout luân phiên:
// 1. 'left-text-right-img': Chữ Trái - Ảnh Phải
// 2. 'left-img-right-text': Ảnh Trái - Chữ Phải
// 3. 'bento-grid': Bento Grid nghệ thuật
// 4. 'top-banner-bottom-split': Tiêu đề & Trích dẫn lớn phía Trên, 2 cột Nội dung & Ảnh phía Dưới
// 5. 'spotlight-center': Ảnh Bác Hồ trang trọng ở giữa, các khối nội dung bao quanh
// 6. 'grid-cards-dual': Ảnh màu trên cao, các thẻ luận điểm dạng lưới 2x2 phía dưới

export const EXPANDED_SLIDE_CHAPTERS = [
  {
    chapterId: 1,
    title: "Chương I: Tổng Quan & Bối Cảnh Lịch Sử",
    slides: [
      {
        id: "1.1",
        layoutType: "left-text-right-img",
        animType: "slide-up",
        subtitle: "Bối Cảnh Lịch Sử Nước Ta Đầu Thế Kỷ XX",
        bullets: [
          "Thực dân Pháp áp đặt ách thống trị thuộc địa nửa phong kiến từ năm 1858.",
          "Các phong trào yêu nước theo khuynh hướng phong kiến (Cần Vương) đều thất bại.",
          "Các phong trào theo khuynh hướng tư sản (Đông Du, Duy Tân, VN Quốc dân Đảng) bế tắc.",
          "Dân tộc Việt Nam chìm trong khủng hoảng sâu sắc về đường lối cứu nước."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Nước mất, nhà tan, nhân dân lầm than trong kiếp nô lệ."
      },
      {
        id: "1.2",
        layoutType: "left-img-right-text",
        animType: "slide-right",
        subtitle: "Hành Trình Tìm Đường Cứu Nước Của Bác Hồ",
        bullets: [
          "Ngày 5/6/1911: Người rời Cảng Nhà Rồng bôn ba tìm đường cứu nước.",
          "Khác các tiền bối sang Nhật, Trung Quốc; Người sang tận phương Tây tìm hiểu cội nguồn.",
          "Bắt gặp Chủ nghĩa Mác - Lênin qua Sơ thảo Luận đề Lênin (tháng 7/1920).",
          "Khảo sát thực tiễn Cách mạng Mỹ (1776), Pháp (1789) và Cách mạng Tháng Mười Nga (1917)."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.bacHoVietBac,
        quote: "Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!"
      },
      {
        id: "1.3",
        layoutType: "bento-grid",
        animType: "scale-pop",
        subtitle: "Sự Cần Thiết Phải Vận Dụng Sáng Tạo",
        bullets: [
          "Chủ nghĩa Mác - Lênin ra đời từ thực tiễn phương Tây tư bản công nghiệp.",
          "Phương Tây: Mâu thuẫn giai cấp (Vô sản vs Tư sản) là mâu thuẫn trung tâm.",
          "Phương Đông thuộc địa: Mâu thuẫn giữa Toàn thể Dân tộc với Thực dân xâm lược.",
          "Không thể áp dụng giáo điều máy móc, phải vận dụng sáng tạo vào Việt Nam."
        ],
        primaryImage: COLOR_IMAGES.bacHo1950s,
        secondaryImage: COLOR_IMAGES.bacHoTanTrao,
        quote: "Học tập Mác - Lênin là nắm lấy tinh thần và phương pháp, không giáo điều."
      },
      {
        id: "1.4",
        layoutType: "top-banner-bottom-split",
        animType: "flip-3d",
        subtitle: "Cương Lĩnh Chính Trị Đầu Tiên (1930)",
        bullets: [
          "Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam (tháng 2/1930).",
          "Thông qua Chánh cương vắn tắt và Sách lược vắn tắt do Nguyễn Ái Quốc soạn thảo.",
          "Đường lối: Làm tư sản dân quyền cách mạng và thổ địa cách mạng tiến lên XHCN.",
          "Khẳng định độc lập dân tộc là mục tiêu hàng đầu, quyết định của cách mạng."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Đánh đổ đế quốc chủ nghĩa Pháp và phong kiến, làm cho nước Nam hoàn toàn độc lập."
      },
      {
        id: "1.5",
        layoutType: "grid-cards-dual",
        animType: "diagonal-in",
        subtitle: "Tổng Kết Chương I: Tầm Vóc Lịch Sử",
        bullets: [
          "Chấm dứt hoàn toàn cuộc khủng hoảng đường lối cứu nước kéo dài hàng thập kỷ.",
          "Hòa quyện chủ nghĩa yêu nước nồng nàn với thế giới quan khoa học Mác - Lênin.",
          "Đặt nền móng lý luận vững chắc cho thắng lợi của Cách mạng Tháng Tám 1945.",
          "Mở ra kỷ nguyên độc lập tự do và kỷ nguyên làm chủ của nhân dân Việt Nam."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.cachMangThangTam,
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
        layoutType: "left-img-right-text",
        animType: "slide-right",
        subtitle: "Khái Niệm Nhân Quyền Trong Lịch Sử Phương Tây",
        bullets: [
          "Tuyên ngôn Độc lập Mỹ (1776): Khẳng định quyền sống, quyền tự do và mưu cầu hạnh phúc.",
          "Tuyên ngôn Nhân quyền & Dân quyền Pháp (1789): Mọi người sinh ra tự do và bình đẳng.",
          "Hạn chế: Chỉ đóng khung trong phạm vi giai cấp tư sản và người da trắng.",
          "Nghịch lý: Các nước tư bản phương Tây lại đem quân xâm lược và tước đoạt nhân quyền thuộc địa!"
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.bacHoTuyenNgon,
        quote: "Tạo hóa cho họ những quyền không ai có thể xâm phạm được."
      },
      {
        id: "2.2",
        layoutType: "bento-grid",
        animType: "scale-pop",
        subtitle: "Bước Phát Triển Triết Học & Pháp Lý Của Bác Hồ",
        bullets: [
          "Từ quyền của CÁ NHÂN con người ➔ Suy rộng thành QUYỀN CỦA CÁC DÂN TỘC.",
          "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng.",
          "Dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.",
          "Cống hiến vô giá cho triết học chính trị và pháp lý nhân loại thế kỷ XX."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Suy rộng ra, câu ấy có nghĩa là: Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng."
      },
      {
        id: "2.3",
        layoutType: "top-banner-bottom-split",
        animType: "flip-3d",
        subtitle: "Độc Lập Dân Tộc Là Tiền Đề Cho Quyền Con Người",
        bullets: [
          "Khi quốc gia mất độc lập, quyền con người của từng cá nhân đều bị chà đạp.",
          "Không có độc lập dân tộc thì không bao giờ có nhân quyền thực sự.",
          "Quyền dân tộc tự quyết là điều kiện tiên quyết bảo đảm mọi quyền sống của người dân.",
          "Đấu tranh giải phóng dân tộc chính là cuộc đấu tranh bảo vệ nhân quyền cao nhất."
        ],
        primaryImage: COLOR_IMAGES.bacHo1964,
        secondaryImage: COLOR_IMAGES.dienBienPhu,
        quote: "Nước mất thì nhà tan, dân mang kiếp nô lệ thì lấy đâu ra quyền con người!"
      },
      {
        id: "2.4",
        layoutType: "spotlight-center",
        animType: "slide-up",
        subtitle: "Giá Trị Quốc Tế Cho Phong Trào Thuộc Địa",
        bullets: [
          "Trao vào tay các dân tộc Á - Phi - Mỹ La Tinh vũ khí tư tưởng đấu tranh sắc bén.",
          "Khẳng định các dân tộc thuộc địa bình đẳng hoàn toàn với các nước đế quốc phương Tây.",
          "Tuyên ngôn Độc lập 1945 được coi là Tuyên ngôn giải phóng thuộc địa của thế giới.",
          "Được Liên Hợp Quốc và bạn bè quốc tế trân trọng ghi nhận và tôn vinh."
        ],
        primaryImage: COLOR_IMAGES.bacHoBerlinColor,
        secondaryImage: COLOR_IMAGES.giaiPhong1975,
        quote: "Tuyên ngôn 1945 là bản Tuyên ngôn Nhân quyền của các dân tộc bị áp bức toàn cầu."
      },
      {
        id: "2.5",
        layoutType: "left-text-right-img",
        animType: "diagonal-in",
        subtitle: "Nghệ Thuật Ngoại Giao Sắc Bén Của Hồ Chí Minh",
        bullets: [
          "Dẫn lại chính tuyên ngôn của Mỹ và Pháp để buộc đối phương không thể bác bỏ.",
          "Dùng chính vũ khí lý luận của tư sản phương Tây để phản bác hành vi xâm lược ('gậy ông đập lưng ông').",
          "Minh chứng hùng hồn cho tinh thần thượng tôn pháp lý quốc tế của nước Việt Nam mới.",
          "Khẳng định sự thật lịch sử: Việt Nam đã giành lại đất nước từ tay phát xít Nhật."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.quocHoi1946,
        quote: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập."
      },
      {
        id: "2.6",
        layoutType: "grid-cards-dual",
        animType: "scale-pop",
        subtitle: "Tổng Kết Chương II: Quyền Dân Tộc Thiêng Liêng",
        bullets: [
          "Độc lập dân tộc là quyền thiêng liêng, tự nhiên, bất khả xâm phạm.",
          "Hồ Chí Minh đã đưa tư tưởng quyền con người lên đỉnh cao thời đại.",
          "Gắn chặt quyền tự quyết dân tộc với quyền tự do của mỗi con người.",
          "Kim chỉ nam vững bền cho bảo vệ chủ quyền toàn vẹn lãnh thổ hiện nay."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
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
        layoutType: "bento-grid",
        animType: "slide-right",
        subtitle: "Bác Bỏ Độc Lập Hình Thức & Giả Hiệu",
        bullets: [
          "Kiên quyết phản đối thứ 'độc lập tự trị' hay 'độc lập bù nhìn' do thực dân giật dây.",
          "Độc lập không thể chỉ là danh xưng trên văn bản hay những lời hứa rỗng tuếch.",
          "Độc lập phải mang lại sự giải phóng thực tế và quyền làm chủ cho quần chúng lao động.",
          "Bác Hồ chỉ rõ: Nền độc lập phải là độc lập hoàn toàn, triệt để và thực chất."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.bacHoVietBac,
        quote: "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
      },
      {
        id: "3.2",
        layoutType: "left-img-right-text",
        animType: "flip-3d",
        subtitle: "Ba Nhiệm Vụ Cấp Bách Sau Cách Mạng Tháng Tám",
        bullets: [
          "1. Diệt giặc đói: Khẩn trương nhường cơm sẻ áo, tăng gia sản xuất cứu đói.",
          "2. Diệt giặc dốt: Mở rộng Bình dân học vụ, giúp hàng triệu đồng bào biết chữ.",
          "3. Diệt giặc ngoại xâm: Xây dựng lực lượng vũ trang bảo vệ nền cộng hòa non trẻ.",
          "Gắn kết chặt chẽ vận mệnh độc lập với từng bữa cơm, manh áo của nhân dân."
        ],
        primaryImage: COLOR_IMAGES.bacHoThieuNhi,
        secondaryImage: COLOR_IMAGES.quocHoi1946,
        quote: "Chúng ta phải làm cho dân có ăn, có mặc, có chỗ ở, có học hành."
      },
      {
        id: "3.3",
        layoutType: "top-banner-bottom-split",
        animType: "slide-up",
        subtitle: "Triết Lý Cán Bộ Là 'Công Bộc Của Dân'",
        bullets: [
          "Cán bộ, đảng viên từ trên xuống dưới đều là 'đầy tớ trung thành của nhân dân'.",
          "Việc gì có lợi cho dân, ta phải hết sức làm.",
          "Việc gì có hại cho dân, ta phải hết sức tránh.",
          "Xây dựng chính quyền liêm chính, tuyệt đối không được quan liêu, hách dịch."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.bacHoDaiDoan308,
        quote: "Ủy ban nhân dân là người gánh việc chung cho dân, chứ không phải để đè đầu cưỡi cổ dân."
      },
      {
        id: "3.4",
        layoutType: "spotlight-center",
        animType: "scale-pop",
        subtitle: "Độc Lập Hồ Chí Minh Khác Gì Độc Lập Tư Sản?",
        bullets: [
          "Cách mạng tư sản: Thay thế vua quan phong kiến bằng giới tài phiệt tư sản.",
          "Giai cấp công nhân, nông dân trong chế độ tư sản vẫn chịu cảnh bóc lột sức lao động.",
          "Độc lập theo Hồ Chí Minh: Quyền lực nhà nước thuộc về toàn thể nhân dân lao động.",
          "Thống nhất hữu cơ giữa lợi ích của giai cấp cần lao và lợi ích của cả dân tộc."
        ],
        primaryImage: COLOR_IMAGES.bacHoVoNguyenGiap,
        secondaryImage: COLOR_IMAGES.quanDoiNhanDan,
        quote: "Cách mệnh đến nơi là làm sao trao toàn bộ quyền lực về tay quảng đại quần chúng nhân dân."
      },
      {
        id: "3.5",
        layoutType: "left-text-right-img",
        animType: "slide-right",
        subtitle: "Thước Đo Giá Trị Thực Tiễn Của Độc Lập",
        bullets: [
          "Chất lượng cuộc sống vật chất và tinh thần của mọi gia đình Việt Nam.",
          "Mức độ dân chủ, công bằng xã hội và sự tiến bộ về giáo dục, y tế.",
          "Quyền bình đẳng của phụ nữ, đồng bào thiểu số và các tầng lớp lao động.",
          "Khát vọng vươn lên xây dựng đất nước đàng hoàng hơn, to đẹp hơn."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.giaiPhong1975,
        quote: "Dân chỉ biết giá trị của tự do, độc lập khi dân được ăn no, mặc ấm và học hành."
      },
      {
        id: "3.6",
        layoutType: "grid-cards-dual",
        animType: "diagonal-in",
        subtitle: "Tổng Kết Chương III: Nhân Văn Hồ Chí Minh",
        bullets: [
          "Độc lập là tiền đề, tự do hạnh phúc của nhân dân là mục tiêu thiêng liêng tối thượng.",
          "Hồ Chí Minh đã đưa chủ nghĩa nhân văn cách mạng vào từng quyết sách quốc gia.",
          "Tạo nên chất keo gắn kết bền chặt lòng dân với sự nghiệp cách mạng vẻ vang.",
          "Cơ sở lý luận nền tảng cho Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam."
        ],
        primaryImage: COLOR_IMAGES.bacHo1964,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
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
        layoutType: "top-banner-bottom-split",
        animType: "flip-3d",
        subtitle: "Khắc Phục Bế Tắc Của Các Bậc Tiền Bối",
        bullets: [
          "Phan Bội Châu: Chủ trương dựa vào Nhật Bản ➔ Bác Hồ nhận định: 'Đuổi hổ cửa trước, rước hùm cửa sau'.",
          "Phan Châu Trinh: Kêu gọi Pháp thực hiện cải cách ➔ Bác Hồ chỉ rõ: 'Xin giặc rủ lòng thương'.",
          "Hoàng Hoa Thám: Khởi nghĩa nông dân Yên Thế ➔ Mang tính tự phát, thiếu hệ tư tưởng dẫn đường.",
          "Nguyễn Ái Quốc rút ra bài học: Không thể giải phóng dân tộc theo hệ tư tưởng cũ."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.bacHoVietBac,
        quote: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản."
      },
      {
        id: "4.2",
        layoutType: "bento-grid",
        animType: "slide-up",
        subtitle: "Đánh Giá Tính Chất Các Cuộc Cách Mạng",
        bullets: [
          "Cách mạng Mỹ (1776) & Pháp (1789): Đều là cách mạng tư bản 'chưa đến nơi'.",
          "Trong nước thì tước đoạt thành quả của công nông, ngoài nước thì áp bức thuộc địa.",
          "Cách mạng Tháng Mười Nga (1917): Là cuộc cách mạng triệt để nhất, 'cách mệnh đến nơi'.",
          "Mở ra thời đại mới giải phóng cả giai cấp lao động lẫn các dân tộc bị đô hộ."
        ],
        primaryImage: COLOR_IMAGES.bacHo1950s,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Trong thế giới bây giờ chỉ có cách mệnh Nga là đã thành công, và thành công đến nơi."
      },
      {
        id: "4.3",
        layoutType: "left-img-right-text",
        animType: "scale-pop",
        subtitle: "Vai Trò Lãnh Đạo Tiên Phong Của Đảng",
        bullets: [
          "Cách mạng giải phóng dân tộc muốn thắng lợi phải có Đảng cách mạng dẫn đường.",
          "Đảng phải lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng và kim chỉ nam hành động.",
          "Đảng là đội ngũ tiên phong, quy tụ những chiến sĩ kiên trung nhất của dân tộc.",
          "Đảng đại biểu cho lợi ích của giai cấp công nhân, nhân dân lao động và toàn thể dân tộc."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.quocHoi1946,
        quote: "Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
      },
      {
        id: "4.4",
        layoutType: "spotlight-center",
        animType: "diagonal-in",
        subtitle: "Lực Lượng Nòng Cốt: Khối Liên Minh Công - Nông",
        bullets: [
          "Công nhân và nông dân là lực lượng đông đảo nhất, chịu áp bức nặng nề nhất.",
          "Liên minh công - nông là 'gốc rễ' vững chãi của cách mạng giải phóng dân tộc.",
          "Tiểu tư sản, tư sản dân tộc, trí thức và địa chủ yêu nước là 'bầu bạn' quan trọng.",
          "Quy tụ sức mạnh toàn dân trong Mặt trận Dân tộc Thống nhất."
        ],
        primaryImage: COLOR_IMAGES.bacHoDaiDoan308,
        secondaryImage: COLOR_IMAGES.dienBienPhu,
        quote: "Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, địa chủ nhỏ là bầu bạn cách mệnh."
      },
      {
        id: "4.5",
        layoutType: "grid-cards-dual",
        animType: "slide-right",
        subtitle: "Kết Hợp Sức Mạnh Dân Tộc Với Sức Mạnh Thời Đại",
        bullets: [
          "Cách mạng Việt Nam hòa nhịp cùng dòng chảy của cách mạng vô sản thế giới.",
          "Gắn bó khăng khít với phong trào công nhân quốc tế và phong trào hòa bình.",
          "Tranh thủ tối đa sự ủng hộ, giúp đỡ chí tình của các lực lượng tiến bộ.",
          "Luôn kiên định nguyên tắc tự lực, tự cường, không trông chờ thụ động."
        ],
        primaryImage: COLOR_IMAGES.bacHoBerlinColor,
        secondaryImage: COLOR_IMAGES.quanDoiNhanDan,
        quote: "Sự kết hợp giữa sức mạnh dân tộc và sức mạnh thời đại tạo nên sức mạnh vô địch."
      },
      {
        id: "4.6",
        layoutType: "left-text-right-img",
        animType: "scale-pop",
        subtitle: "Tổng Kết Chương IV: Lựa Chọn Lịch Sử Tất Yếu",
        bullets: [
          "Đưa cách mạng Việt Nam vào quỹ đạo phát triển tiến bộ của lịch sử nhân loại.",
          "Chấm dứt hơn 80 năm nô lệ tăm tối, lập nên nước Việt Nam Dân chủ Cộng hòa.",
          "Khẳng định thiên tài tư tưởng của Nguyễn Ái Quốc - Hồ Chí Minh.",
          "Ngọn cờ lý luận bất diệt soi đường cho cách mạng hôm nay và mai sau."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.giaiPhong1975,
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
        layoutType: "left-img-right-text",
        animType: "slide-up",
        subtitle: "Khác Biệt Thực Tiễn Châu Âu & Việt Nam Thuộc Địa",
        bullets: [
          "Châu Âu: Xã hội phân hóa giai cấp sâu sắc, đối kháng vô sản vs tư sản là chủ yếu.",
          "C.Mác & Ph.Ăngghen đặt trọng tâm vào đấu tranh giai cấp để xóa bỏ người bóc lột người.",
          "Việt Nam thuộc địa: Mâu thuẫn bao trùm là giữa toàn thể Dân tộc với Thực dân xâm lược.",
          "Mọi giai cấp trong nước (công, nông, trí, tư sản dân tộc) đều chung kiếp mất nước."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.bacHoVietBac,
        quote: "Cuộc đấu tranh ở thuộc địa trước hết là cuộc đấu tranh sinh tử để giải phóng dân tộc."
      },
      {
        id: "5.2",
        layoutType: "top-banner-bottom-split",
        animType: "flip-3d",
        subtitle: "Đặt Giải Phóng Dân Tộc Lên Hàng Đầu, Trên Hết",
        bullets: [
          "Hội nghị Trung ương 8 (5/1941) tại Pác Bó dưới sự chủ trì của Nguyễn Ái Quốc.",
          "Đột phá chiến lược: Tạm gác khẩu hiệu cách mạng thổ địa, tập trung đánh đổ Pháp - Nhật.",
          "Thành lập Mặt trận Việt Minh để quy tụ toàn thể những người có lòng yêu nước.",
          "Lợi ích giai cấp bộ phận phải phục tùng nhiệm vụ giải phóng dân tộc tối thượng."
        ],
        primaryImage: COLOR_IMAGES.bacHoTanTrao,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Quyền lợi của bộ phận, của giai cấp phải phục tùng sự sinh tử, tồn vong của quốc gia, của dân tộc."
      },
      {
        id: "5.3",
        layoutType: "bento-grid",
        animType: "scale-pop",
        subtitle: "Luận Điểm 'Sinh Tử Tồn Vong' Của Dân Tộc",
        bullets: [
          "Nếu không đánh đổ được đế quốc, không giành được độc lập thì giai cấp cũng chịu kiếp trâu ngựa.",
          "Quyền lợi của giai cấp công nhân và nông dân chỉ có thể được bảo đảm khi nước nhà độc lập.",
          "Giải phóng dân tộc là tiền đề sống còn để tiến hành giải phóng giai cấp.",
          "Độc lập cho Tổ quốc là ngọn đuốc mở đường cho ấm no xã hội chủ nghĩa."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.cachMangThangTam,
        quote: "Không giải quyết được vấn đề dân tộc thì quyền lợi bộ phận, giai cấp vạn năm cũng không đòi lại được."
      },
      {
        id: "5.4",
        layoutType: "spotlight-center",
        animType: "diagonal-in",
        subtitle: "Chiến Lược Đại Đoàn Kết Toàn Dân Tộc",
        bullets: [
          "Không phân biệt tôn giáo, đẳng cấp, dân tộc thiểu số hay đa số.",
          "Kêu gọi các nhân sĩ, trí thức, địa chủ yêu nước và tư sản dân tộc tham gia kháng chiến.",
          "Xóa bỏ những định kiến giai cấp giáo điều hẹp hòi gây chia rẽ lực lượng cách mạng.",
          "Đúc kết sức mạnh vĩ đại của tinh thần dân tộc chân chính Việt Nam."
        ],
        primaryImage: COLOR_IMAGES.bacHoDaiDoan308,
        secondaryImage: COLOR_IMAGES.quocHoi1946,
        quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."
      },
      {
        id: "5.5",
        layoutType: "grid-cards-dual",
        animType: "slide-right",
        subtitle: "Đóng Góp Lý Luận Sáng Tạo Xuất Sắc",
        bullets: [
          "Làm phong phú thêm kho tàng lý luận Mác - Lênin về chiến lược cách mạng thuộc địa.",
          "Khẳng định chủ nghĩa dân tộc chân chính là một động lực vĩ đại của các nước phương Đông.",
          "Kết hợp hài hòa giữa ngọn cờ Dân tộc và ngọn cờ Giai cấp một cách nhuần nhuyễn.",
          "Thực tiễn Cách mạng Tháng Tám và hai cuộc kháng chiến đã chứng minh chân lý rực rỡ."
        ],
        primaryImage: COLOR_IMAGES.bacHoTranDiaTenLua,
        secondaryImage: COLOR_IMAGES.dienBienPhu,
        quote: "Chủ nghĩa yêu nước chân chính là động lực to lớn của dân tộc ta."
      },
      {
        id: "5.6",
        layoutType: "left-text-right-img",
        animType: "flip-3d",
        subtitle: "Tổng Kết Chương V: Lợi Ích Quốc Gia Là Tối Cao",
        bullets: [
          "Đặt lợi ích quốc gia - dân tộc lên trên hết là bài học xương máu của cách mạng.",
          "Giữ vững và không ngừng củng cố khối đại đoàn kết toàn dân tộc.",
          "Soi sáng sự nghiệp Đổi mới: Động viên mọi nguồn lực người Việt Nam trong và ngoài nước.",
          "Bảo vệ vững chắc nền độc lập, chủ quyền và toàn vẹn lãnh thổ quốc gia."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.giaiPhong1975,
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
        layoutType: "bento-grid",
        animType: "scale-pop",
        subtitle: "Bác Bỏ Tư Tưởng Thụ Động Của Quốc Tế III",
        bullets: [
          "Quốc tế Cộng sản thời kỳ đầu có quan điểm: Cách mạng thuộc địa phụ thuộc vào chính quốc.",
          "Họ coi thuộc địa chỉ là 'hậu phương' thụ động chờ giai cấp vô sản phương Tây giải phóng.",
          "Hồ Chí Minh kiên quyết đứng lên phê phán và bác bỏ luận điểm sai lầm đó.",
          "Khẳng định nhân dân thuộc địa hoàn toàn có đủ tiềm năng và ý chí tự đứng lên giải phóng."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.bacHoVietBac,
        quote: "Cách mạng thuộc địa không phụ thuộc một cách thụ động vào cách mạng ở chính quốc."
      },
      {
        id: "6.2",
        layoutType: "left-img-right-text",
        animType: "slide-right",
        subtitle: "Luận Điểm 'Con Đỉa Hai Vòi' Bất Hủ",
        bullets: [
          "Trong 'Bản án chế độ thực dân Pháp' (1925), Người ví CNTB như một con đỉa hai vòi.",
          "Một vòi bám vào giai cấp vô sản chính quốc, một vòi bám hút máu nhân dân thuộc địa.",
          "Nọc độc và nguồn sống khổng lồ của chủ nghĩa thực dân nằm ở các xứ thuộc địa.",
          "Muốn tiêu diệt con đỉa, phải chặt đứt cả hai vòi, và thuộc địa là nơi mắt xích yếu nhất!"
        ],
        primaryImage: COLOR_IMAGES.bacHo1950s,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Nọc độc và sức sống của con đỉa tư bản thực dân nằm chính ở các thuộc địa."
      },
      {
        id: "6.3",
        layoutType: "top-banner-bottom-split",
        animType: "diagonal-in",
        subtitle: "Khả Năng Thắng Lợi Trước Của Cách Mạng Thuộc Địa",
        bullets: [
          "Thuộc địa có thể nổ ra cách mạng vũ trang và giành thắng lợi trước chính quốc.",
          "Sau khi giành độc lập, thuộc địa sẽ tác động mạnh mẽ giúp đỡ cách mạng ở chính quốc.",
          "Chủ động đánh vào yết hầu kinh tế và nguyên liệu của chủ nghĩa đế quốc.",
          "Khơi dậy khí phách quật khởi của hàng trăm triệu người cùng khổ khắp năm châu."
        ],
        primaryImage: COLOR_IMAGES.bacHoVoNguyenGiap,
        secondaryImage: COLOR_IMAGES.cachMangThangTam,
        quote: "Cách mạng giải phóng dân tộc ở thuộc địa có thể nổ ra và giành thắng lợi trước cách mạng chính quốc!"
      },
      {
        id: "6.4",
        layoutType: "spotlight-center",
        animType: "slide-up",
        subtitle: "Phương Châm 'Đem Sức Ta Mà Tự Giải Phóng Cho Ta'",
        bullets: [
          "Tuyệt đối không có tư tưởng ỉ lại, trông chờ vào sự can thiệp từ bên ngoài.",
          "Nội lực dân tộc là nhân tố quyết định nhất; ngoại lực hỗ trợ là quan trọng.",
          "Tự lực cánh sinh, gian khổ phấn đấu là truyền thống quật cường của dân tộc ta.",
          "Dám đánh, quyết đánh và biết cách đánh thắng mọi kẻ thù xâm lược."
        ],
        primaryImage: COLOR_IMAGES.bacHoTranDiaTenLua,
        secondaryImage: COLOR_IMAGES.quanDoiNhanDan,
        quote: "Đem sức ta mà tự giải phóng cho ta!"
      },
      {
        id: "6.5",
        layoutType: "grid-cards-dual",
        animType: "scale-pop",
        subtitle: "Thực Tiễn Lịch Sử Kiểm Chứng Hùng Hồn",
        bullets: [
          "Cách mạng Tháng Tám năm 1945 nổ ra và thắng lợi trọn vẹn tại Việt Nam.",
          "Lúc bấy giờ, phong trào cách mạng vô sản tại chính quốc Pháp vẫn chưa thành công.",
          "Chiến thắng Điện Biên Phủ năm 1954 làm rung chuyển và sụp đổ chủ nghĩa thực dân kiểu cũ.",
          "Minh chứng hùng hồn cho thiên tài dự báo lý luận xuất chúng của Bác Hồ."
        ],
        primaryImage: COLOR_IMAGES.bacHoDaiDoan308,
        secondaryImage: COLOR_IMAGES.dienBienPhu,
        quote: "Thực tiễn Cách mạng Việt Nam đã chứng minh chân lý sáng ngời của Hồ Chí Minh."
      },
      {
        id: "6.6",
        layoutType: "left-text-right-img",
        animType: "flip-3d",
        subtitle: "Tổng Kết Chương VI: Bản Lĩnh Tự Lực Tự Cường",
        bullets: [
          "Đập tan mặc cảm tự ti, nâng cao lòng tự tôn và ý chí độc lập của dân tộc.",
          "Bài học vô giá về tinh thần chủ động sáng tạo trong thời đại mới.",
          "Tự chủ kinh tế, làm chủ công nghệ, xây dựng nền quốc phòng vững mạnh.",
          "Xây dựng đất nước hùng cường bằng chính trí tuệ và bàn tay người Việt Nam."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.giaiPhong1975,
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
        layoutType: "bento-grid",
        animType: "slide-up",
        subtitle: "Cốt Lõi Đỉnh Cao Trong Tư Tưởng Hồ Chí Minh",
        bullets: [
          "Độc lập dân tộc gắn liền với Chủ nghĩa Xã hội là sợi chỉ đỏ xuyên suốt con đường cách mạng.",
          "Nếu độc lập mà đi theo con đường TBCN thì nhân dân lao động vẫn tiếp tục bị bóc lột.",
          "Chỉ có CNXH mới giải quyết triệt để vấn đề người bóc lột người và bất công xã hội.",
          "Bảo đảm cho đất nước độc lập vĩnh viễn và nhân dân hạnh phúc thực sự."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Độc lập dân tộc là tiền đề, chủ nghĩa xã hội là bảo đảm vững bền."
      },
      {
        id: "7.2",
        layoutType: "left-img-right-text",
        animType: "scale-pop",
        subtitle: "Độc Lập Dân Tộc Là Tiền Đề Tiên Quyết",
        bullets: [
          "Chỉ khi có độc lập dân tộc mới có chính quyền của dân để bắt tay xây dựng CNXH.",
          "Độc lập dân tộc giải phóng sức lao động và tài nguyên đất nước khỏi ách ngoại bang.",
          "Không giành được độc lập thì mọi lý thuyết xây dựng CNXH đều trở nên vô nghĩa.",
          "Độc lập là bậc thang đầu tiên vững chắc để dân tộc bước lên nấc thang CNXH."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.cachMangThangTam,
        quote: "Không có độc lập thì không thể nói tới việc xây dựng chủ nghĩa xã hội."
      },
      {
        id: "7.3",
        layoutType: "top-banner-bottom-split",
        animType: "diagonal-in",
        subtitle: "Chủ Nghĩa Xã Hội Là Bảo Đảm Vững Bền",
        bullets: [
          "CNXH tạo dựng tiềm lực kinh tế, quốc phòng, văn hóa xã hội hùng mạnh vượt bậc.",
          "Xây dựng khối liên minh công - nông - trí thức ngày càng bền vững.",
          "Đem lại cuộc sống ấm no, công bằng, nâng cao dân trí và phẩm hạnh con người.",
          "Làm cho toàn dân đồng lòng quyết tử giữ gìn từng tấc đất thiêng liêng của Tổ quốc."
        ],
        primaryImage: COLOR_IMAGES.bacHoTranDiaTenLua,
        secondaryImage: COLOR_IMAGES.quanDoiNhanDan,
        quote: "Chỉ có chủ nghĩa xã hội mới mang lại thành trì kiên cố bảo vệ nền độc lập."
      },
      {
        id: "7.4",
        layoutType: "spotlight-center",
        animType: "flip-3d",
        subtitle: "Bản Chất Mộc Mạc Của CNXH Theo Bác Hồ",
        bullets: [
          "Không phải là những giáo điều hàn lâm xa lạ với đời sống thực tế.",
          "Chủ nghĩa xã hội là làm cho dân giàu, nước mạnh, công bằng và văn minh.",
          "Là cơm no áo ấm, trẻ em được cắp sách tới trường, người già được phụng dưỡng.",
          "Là giải phóng con người khỏi nghèo nàn, lạc hậu, phát triển tự do toàn diện."
        ],
        primaryImage: COLOR_IMAGES.bacHoThieuNhi,
        secondaryImage: COLOR_IMAGES.bacHo1964,
        quote: "Chủ nghĩa xã hội trước hết là làm cho nhân dân thoát nghèo, được ăn no mặc ấm và sống cuộc đời hạnh phúc."
      },
      {
        id: "7.5",
        layoutType: "grid-cards-dual",
        animType: "slide-right",
        subtitle: "Đặc Điểm Quá Độ Lên CNXH Tại Việt Nam",
        bullets: [
          "Xuất phát điểm là một nước thuộc địa nông nghiệp lạc hậu, chịu tàn phá nặng nề của chiến tranh.",
          "Quá độ tiến thẳng lên CNXH bỏ qua chế độ tư bản chủ nghĩa.",
          "Đây là sự nghiệp sáng tạo vĩ đại nhưng cũng đầy thử thách cam go.",
          "Đòi hỏi đổi mới không ngừng tư duy kinh tế và phương thức quản lý xã hội."
        ],
        primaryImage: COLOR_IMAGES.bacHoBerlinColor,
        secondaryImage: COLOR_IMAGES.bacHoVietBac,
        quote: "Xây dựng chủ nghĩa xã hội là một cuộc cách mạng lâu dài, gian khổ nhưng nhất định thắng lợi."
      },
      {
        id: "7.6",
        layoutType: "left-text-right-img",
        animType: "scale-pop",
        subtitle: "Tổng Kết Chương VII: Ngọn Cờ Sống Còn Của Dân Tộc",
        bullets: [
          "Độc lập dân tộc gắn liền với CNXH là quy luật phát triển tất yếu của lịch sử Việt Nam.",
          "Giúp dân tộc ta vượt qua mọi biến động thăng trầm của lịch sử thế giới.",
          "Soi đường cho công cuộc Đổi mới, phát triển kinh tế thị trường định hướng XHCN.",
          "Khát vọng hiện thực hóa mục tiêu dân giàu, nước mạnh, dân chủ, văn minh."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.giaiPhong1975,
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
        layoutType: "bento-grid",
        animType: "flip-3d",
        subtitle: "Tầm Ảnh Hưởng Tới Nhân Loại Tiến Bộ",
        bullets: [
          "Ngọn hải đăng dẫn đường cho các dân tộc bị áp bức toàn cầu đứng lên tự giải phóng.",
          "Góp phần làm sụp đổ hoàn toàn hệ thống thuộc địa của chủ nghĩa thực dân trên thế giới.",
          "UNESCO ra Nghị quyết tôn vinh Hồ Chí Minh là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất.",
          "Biểu tượng sáng ngời cho tinh thần hòa bình, hữu nghị và hợp tác giữa các quốc gia."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Hồ Chí Minh là biểu tượng bất diệt của khát vọng độc lập, tự do cho các dân tộc."
      },
      {
        id: "8.2",
        layoutType: "left-img-right-text",
        animType: "slide-up",
        subtitle: "Bài Học Cho Công Cuộc Đổi Mới & Hội Nhập",
        bullets: [
          "Giữ vững độc lập tự chủ trong hoạch định đường lối đối nội và đối ngoại.",
          "Kết hợp chặt chẽ nội lực và ngoại lực, trong đó nội lực luôn đóng vai trò quyết định.",
          "Chủ động, tích cực hội nhập quốc tế toàn diện, sâu rộng: 'Hòa nhập nhưng không hòa tan'.",
          "Bảo đảm cao nhất lợi ích quốc gia - dân tộc trên cơ sở luật pháp quốc tế."
        ],
        primaryImage: COLOR_IMAGES.bacHoUncleHoColor,
        secondaryImage: COLOR_IMAGES.bacHoTranDiaTenLua,
        quote: "Dĩ bất biến, ứng vạn biến trong công cuộc bảo vệ và phát triển đất nước."
      },
      {
        id: "8.3",
        layoutType: "top-banner-bottom-split",
        animType: "scale-pop",
        subtitle: "Bảo Vệ Vững Chắc Chủ Quyền Biển Đảo & Lãnh Thổ",
        bullets: [
          "Xây dựng nền quốc phòng toàn dân và an ninh nhân dân vững mạnh toàn diện.",
          "Kiên quyết, kiên trì giữ gìn từng tấc đất biên cương, biển đảo thiêng liêng của Tổ quốc.",
          "Kết hợp sức mạnh quốc phòng với đấu tranh chính trị, pháp lý và ngoại giao hòa bình.",
          "Giữ vững môi trường hòa bình, ổn định bền vững để kiến thiết và phát triển non sông."
        ],
        primaryImage: COLOR_IMAGES.bacHoDaiDoan308,
        secondaryImage: COLOR_IMAGES.quanDoiNhanDan,
        quote: "Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước."
      },
      {
        id: "8.4",
        layoutType: "spotlight-center",
        animType: "diagonal-in",
        subtitle: "Xây Dựng Đảng & Nhà Nước Trong Sạch, Vững Mạnh",
        bullets: [
          "Xây dựng, chỉnh đốn Đảng trong sạch, xứng đáng là người lãnh đạo, người đày tớ của dân.",
          "Quyết liệt đẩy lùi tham nhũng, lãng phí, tiêu cực và suy thoái tư tưởng chính trị.",
          "Thực hành dân chủ rộng rãi, phát huy cao độ quyền làm chủ thực chất của nhân dân.",
          "Củng cố mối quan hệ máu thịt gắn bó keo sơn giữa Đảng và nhân dân."
        ],
        primaryImage: COLOR_IMAGES.bacHo1964,
        secondaryImage: COLOR_IMAGES.quocHoi1946,
        quote: "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên phải thật sự thấm nhuần đạo đức cách mạng."
      },
      {
        id: "8.5",
        layoutType: "grid-cards-dual",
        animType: "slide-right",
        subtitle: "Khát Vọng Kỷ Nguyên Vươn Mình Của Dân Tộc",
        bullets: [
          "Tư tưởng Hồ Chí Minh về độc lập dân tộc là tài sản tinh thần vô giá trường tồn cùng non sông.",
          "Truyền cảm hứng mạnh mẽ cho thế hệ trẻ học tập, rèn đức luyện tài cống hiến cho đất nước.",
          "Hiện thực hóa Di chúc thiêng liêng: Xây dựng đất nước ta đàng hoàng hơn, to đẹp hơn.",
          "Tự tin bước vào kỷ nguyên mới – Kỷ nguyên vươn mình của dân tộc Việt Nam."
        ],
        primaryImage: COLOR_IMAGES.bacHoPortraitColor,
        secondaryImage: COLOR_IMAGES.coDoSaoVang,
        quote: "Toàn Đảng, toàn dân ta quyết tâm xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh."
      }
    ]
  }
];
