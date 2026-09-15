// Bộ Dữ Liệu Slide Trình Chiếu Mở Rộng: 8 Chương (~42 Slide Chi Tiết)
// Mỗi mục nhỏ gồm 5 - 8 slide phân tích chi tiết, trích dẫn, ảnh tư liệu lịch sử thực tế

export const RELIABLE_IMAGES = {
  bacHoTuyenNgon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/800px-Ho_Chi_Minh_1946.jpg",
  bacHoVietBac: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ho_Chi_Minh_in_1946.jpg/800px-Ho_Chi_Minh_in_1946.jpg",
  quanDoiDienBienPhu: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vietminh_soldiers_in_Dien_Bien_Phu.jpg/800px-Vietminh_soldiers_in_Dien_Bien_Phu.jpg",
  bacHoVoNguyenGiap: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ho_Chi_Minh_and_Vo_Nguyen_Giap.jpg/800px-Ho_Chi_Minh_and_Vo_Nguyen_Giap.jpg",
  hanoi1945: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hanoi_August_1945.jpg/800px-Hanoi_August_1945.jpg",
  saigon1975: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tanks_entering_Independence_Palace_Saigon_1975.jpg/800px-Tanks_entering_Independence_Palace_Saigon_1975.jpg",
  bacHoThamBoDoi: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ho_Chi_Minh_with_soldiers.jpg/800px-Ho_Chi_Minh_with_soldiers.jpg",
  bacHoLamViec: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ho_Chi_Minh_working_in_cave.jpg/800px-Ho_Chi_Minh_working_in_cave.jpg",
  bacHoChienDichBienGioi: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ho_Chi_Minh_at_Dong_Khe_1950.jpg/800px-Ho_Chi_Minh_at_Dong_Khe_1950.jpg"
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
        image: RELIABLE_IMAGES.hanoi1945,
        imageCaption: "Nhân dân Hà Nội chịu ách áp bức thực dân trước khi cách mạng bùng nổ.",
        quote: "Nước mất, nhà tan, nhân dân lầm than trong kiếp nô lệ."
      },
      {
        id: "1.2",
        subtitle: "Hành Trình Tìm Đường Cứu Nước Của Nguyễn Tất Thành",
        bullets: [
          "Ngày 5/6/1911: Người rời Cảng Nhà Rồng ra đi tìm đường cứu nước.",
          "Khác các tiền bối đi sang Nhật, TQ; Người sang phương Tây để tìm hiểu bản chất.",
          "Bắt gặp Chủ nghĩa Mác - Lênin qua Sơ thảo Luận đề Lênin (7/1920).",
          "Khảo sát thực tiễn Cách mạng Mỹ (1776), Pháp (1789) và Cách mạng Tháng Mười Nga (1917)."
        ],
        image: RELIABLE_IMAGES.bacHoVietBac,
        imageCaption: "Nguyễn Ái Quốc khảo sát thực tiễn nhiều nước trên thế giới.",
        quote: "Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!"
      },
      {
        id: "1.3",
        subtitle: "Sự Cần Thiết Phải Sáng Tạo Lý Luận",
        bullets: [
          "Chủ nghĩa Mác - Lênin ra đời ở phương Tây tư bản chủ nghĩa.",
          "Phương Tây: Mâu thuẫn giai cấp (Công nhân vs Tư sản) là mâu thuẫn chủ yếu.",
          "Phương Đông thuộc địa: Mâu thuẫn giữa Toàn thể Dân tộc với Thực dân xâm lược.",
          "Không thể áp dụng giáo điều, phải vận dụng sáng tạo vào hoàn cảnh Việt Nam."
        ],
        image: RELIABLE_IMAGES.bacHoLamViec,
        imageCaption: "Bác Hồ đọc và nghiên cứu tài liệu lý luận tại căn cứ.",
        quote: "Học tập Mác - Lênin là để nắm lấy tinh thần và phương pháp, không giáo điều."
      },
      {
        id: "1.4",
        subtitle: "Cương Lĩnh Chính Trị Đầu Tiên (1930)",
        bullets: [
          "Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam (2/1930).",
          "Thông qua Chánh cương tắt và Sách lược tắt do Nguyễn Ái Quốc soạn thảo.",
          "Đường lối: Làm thổ địa cách mạng và giải phóng dân tộc để tiến sang xã hội cộng sản.",
          "Khẳng định độc lập dân tộc là mục tiêu hàng đầu của cách mạng Việt Nam."
        ],
        image: RELIABLE_IMAGES.bacHoChienDichBienGioi,
        imageCaption: "Nguyễn Ái Quốc trực tiếp lãnh đạo phong trào cách mạng.",
        quote: "Đánh đổ đế quốc Pháp và phong kiến, làm cho nước Nam hoàn toàn độc lập."
      },
      {
        id: "1.5",
        subtitle: "Tổng Kết Chương I: Tầm Vóc Lịch Sử",
        bullets: [
          "Hồ Chí Minh đã chấm dứt thời kỳ khủng hoảng đường lối cứu nước kéo dài hàng thập kỷ.",
          "Kết hợp chủ nghĩa yêu nước chân chính với khoa học Mác - Lênin.",
          "Đặt nền móng lý luận vững chắc cho thắng lợi của Cách mạng Tháng Tám 1945.",
          "Mở ra kỷ nguyên độc lập tự do cho dân tộc Việt Nam."
        ],
        image: RELIABLE_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ đọc Tuyên ngôn Độc lập 1945.",
        quote: "Độc lập dân tộc là ngọn cờ dẫn dắt mọi thắng lợi của cách mạng."
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
          "Tuyên ngôn Độc lập Mỹ (1776): Quyền sống, quyền tự do và mưu cầu hạnh phúc.",
          "Tuyên ngôn Nhân quyền & Dân quyền Pháp (1789): Người ta sinh ra tự do và bình đẳng.",
          "Hạn chế: Chỉ áp dụng cho cá nhân con người trong phạm vi quốc gia tư bản.",
          "Thực dân phương Tây nhân danh 'bảo vệ nhân quyền' nhưng lại đi xâm lược thuộc địa!"
        ],
        image: RELIABLE_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ tại Quảng trường Ba Đình 1945.",
        quote: "Tạo hóa cho họ những quyền không ai có thể xâm phạm được."
      },
      {
        id: "2.2",
        subtitle: "Bước Phát Triển Triết Học & Pháp Lý Của Hồ Chí Minh",
        bullets: [
          "Từ quyền của CÁ NHÂN con người ➔ Suy rộng thành QUYỀN CỦA CÁC DÂN TỘC.",
          "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng.",
          "Dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.",
          "Đây là bước nhảy vọt về triết học pháp lý của nhân loại trong thế kỷ XX."
        ],
        image: RELIABLE_IMAGES.hanoi1945,
        imageCaption: "Quần chúng nhân dân đòi quyền sống và quyền độc lập.",
        quote: "Suy rộng ra, câu ấy có nghĩa là: Tất cả các dân tộc đều sinh ra bình đẳng."
      },
      {
        id: "2.3",
        subtitle: "Độc Lập Dân Tộc Là Tiền Đề Cho Quyền Con Người",
        bullets: [
          "Khi một quốc gia bị mất độc lập, người dân trở thành nô lệ.",
          "Không có độc lập dân tộc thì không bao giờ có quyền con người thực sự.",
          "Quyền dân tộc bình đẳng là điều kiện tiên quyết bảo đảm nhân quyền.",
          "Đấu tranh giải phóng dân tộc chính là cuộc đấu tranh bảo vệ nhân quyền cao nhất."
        ],
        image: RELIABLE_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ tại Chiến khu Việt Bắc.",
        quote: "Nước mất thì nhà tan, dân nô lệ thì lấy đâu ra tự do hạnh phúc!"
      },
      {
        id: "2.4",
        subtitle: "Giá Trị Quốc Tế Đối Với Các Dân Tộc Thuộc Địa",
        bullets: [
          "Cung cấp vũ khí tư tưởng sắc bén cho phong trào giải phóng dân tộc Á - Phi - Mỹ La Tinh.",
          "Khẳng định các dân tộc thuộc địa có quyền tự quyết định vận mệnh của mình.",
          "Đóng góp to lớn vào kho tàng tư tưởng chính trị và luật pháp quốc tế.",
          "Được Liên Hợp Quốc và nhân loại tiến bộ thừa nhận và tôn vinh."
        ],
        image: RELIABLE_IMAGES.quanDoiDienBienPhu,
        imageCaption: "Chiến thắng Điện Biên Phủ cổ vũ các dân tộc bị áp bức.",
        quote: "Tuyên ngôn Độc lập 1945 là bản Tuyên ngôn Nhân quyền của các dân tộc bị áp bức."
      },
      {
        id: "2.5",
        subtitle: "Nghệ Thuật Ngoại Giao Trong Tuyên Ngôn Độc Lập 1945",
        bullets: [
          "Dẫn lời Tuyên ngôn Mỹ & Pháp để 'dùng gậy ông đập lưng ông'.",
          "Buộc các nước Đồng minh phải công nhận nền độc lập hợp pháp của Việt Nam.",
          "Khẳng định Việt Nam đã kiên cường chống Nhật và chống Pháp cùng Đồng minh.",
          "Thể hiện bản lĩnh tư duy pháp lý tài tình và nhạy bén."
        ],
        image: RELIABLE_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ đọc Tuyên ngôn Độc lập trước hàng vạn đồng bào.",
        quote: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập."
      },
      {
        id: "2.6",
        subtitle: "Tổng Kết Chương II: Quyền Dân Tộc Thiêng Liêng",
        bullets: [
          "Độc lập dân tộc không phải là ân huệ ban phát mà là quyền tự nhiên khách quan.",
          "Hồ Chí Minh đã biến lý luận nhân quyền tư sản thành ngọn cờ giải phóng thuộc địa.",
          "Quyền độc lập dân tộc là giá trị thiêng liêng nhất không gì đánh đổi được.",
          "Bài học lịch sử vững bền cho công cuộc bảo vệ chủ quyền ngày nay."
        ],
        image: RELIABLE_IMAGES.saigon1975,
        imageCaption: "Xe tăng giải phóng bảo vệ trọn vẹn chủ quyền dân tộc.",
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
          "Phản đối thứ 'độc lập tự trị' hay 'độc lập trao trả' dưới ách thống trị thực dân.",
          "Độc lập không thể chỉ nằm trên giấy tờ hay trong các tuyên bố rỗng tuếch.",
          "Độc lập phải mang lại sự tự do thực sự cho người dân lao động.",
          "Bác Hồ chỉ rõ: Độc lập thật sự phải là hoàn toàn và triệt để."
        ],
        image: RELIABLE_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ làm việc đơn sơ tại căn cứ kháng chiến.",
        quote: "Nước được độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
      },
      {
        id: "3.2",
        subtitle: "Ba Nhiệm Vụ Cấp Bách Sau Cách Mạng Tháng Tám",
        bullets: [
          "1. Diệt giặc đói: Cung cấp cơm ăn áo mặc cho nhân dân.",
          "2. Diệt giặc dốt: Mở lớp Bình dân học vụ, xóa nạn mù chữ.",
          "3. Diệt giặc ngoại xâm: Bảo vệ thành quả cách mạng vừa giành được.",
          "Gắn chặt độc lập quốc gia với quyền lợi thiết thực hàng ngày của dân."
        ],
        image: RELIABLE_IMAGES.hanoi1945,
        imageCaption: "Nhân dân hưởng ứng phong trào diệt giặc đói, diệt giặc dốt.",
        quote: "Chúng ta phải làm cho dân có ăn, có mặc, có chỗ ở, có học hành."
      },
      {
        id: "3.3",
        subtitle: "Triết Lý Hành Động Cho Chính Quyền Cách Mạng",
        bullets: [
          "Cán bộ cách mạng là 'bộc phệ của dân', là công bộc phục vụ nhân dân.",
          "Việc gì có lợi cho dân, ta phải hết sức làm.",
          "Việc gì có hại cho dân, ta phải hết sức tránh.",
          "Nhà nước của dân, do dân và vì dân."
        ],
        image: RELIABLE_IMAGES.bacHoThamBoDoi,
        imageCaption: "Bác Hồ trò chuyện giản dị cùng các chiến sĩ bộ đội.",
        quote: "Ủy ban nhân dân là người gánh vác việc chung cho dân, chứ không phải để đè đầu cưỡi cổ dân."
      },
      {
        id: "3.4",
        subtitle: "Sự Khác Biệt Giữa Độc Lập Vô Sản & Độc Lập Tư Sản",
        bullets: [
          "Cách mạng tư sản: Thay thế giai cấp bóc lột này bằng giai cấp bóc lột khác.",
          "Nhân dân lao động trong chế độ tư bản vẫn bị tước đoạt thành quả.",
          "Độc lập Hồ Chí Minh: Trả lại quyền làm chủ đất nước cho nhân dân lao động.",
          "Hợp nhất quyền lợi dân tộc và quyền lợi quần chúng nhân dân."
        ],
        image: RELIABLE_IMAGES.bacHoVoNguyenGiap,
        imageCaption: "Bác Hồ và Đại tướng Võ Nguyên Giáp chỉ đạo kháng chiến vì dân.",
        quote: "Cách mệnh đến nơi là làm sao cho quyền lực về tay nhân dân."
      },
      {
        id: "3.5",
        subtitle: "Thước Đo Giá Trị Thực Tiễn Của Độc Lập",
        bullets: [
          "Mức độ ấm no của người dân.",
          "Trình độ dân trí và đời sống văn hóa xã hội.",
          "Quyền tự do dân chủ và làm chủ xã hội.",
          "Sự bình yên và an toàn của mọi gia đình Việt Nam."
        ],
        image: RELIABLE_IMAGES.saigon1975,
        imageCaption: "Niềm vui vỡ òa của nhân dân trong ngày đất nước thống nhất.",
        quote: "Dân chỉ biết giá trị của tự do, độc lập khi dân được ăn no, mặc ấm."
      },
      {
        id: "3.6",
        subtitle: "Tổng Kết Chương III: Độc Lập Vì Con Người",
        bullets: [
          "Độc lập là tiền đề, tự do hạnh phúc của nhân dân là mục đích tối thượng.",
          "Gắn độc lập dân tộc với chủ nghĩa nhân văn cách mạng cao đẹp.",
          "Sự gắn kết này tạo nên sức mạnh vô địch của khối đại đoàn kết toàn dân.",
          "Định hướng xây dựng Nhà nước pháp quyền XHCN Việt Nam hiện nay."
        ],
        image: RELIABLE_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ luôn coi hạnh phúc của nhân dân là mục tiêu sống.",
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
        subtitle: "Khắc Phục Hạn Chế Của Các Sĩ Phu Tiền Bối",
        bullets: [
          "Phan Bội Châu: Dựa vào Nhật Bản (Đông Du) ➔ 'Đuổi hổ cửa trước, rước hùm cửa sau'.",
          "Phan Châu Trinh: Xin Pháp cải cách ➔ 'Xin giặc rủ lòng thương'.",
          "Hoàng Hoa Thám: Nông dân khởi nghĩa Yên Thế ➔ Mang tính tự phát, thiếu đường lối.",
          "Nguyễn Ái Quốc nhận rõ: Không thể giải phóng dân tộc theo con đường cũ."
        ],
        image: RELIABLE_IMAGES.bacHoVietBac,
        imageCaption: "Nguyễn Ái Quốc suy ngẫm con đường cứu nước mới.",
        quote: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản."
      },
      {
        id: "4.2",
        subtitle: "Phân Tích Các Cuộc Cách Mạng Trên Thế Giới",
        bullets: [
          "Cách mạng Mỹ (1776) & Pháp (1789): Là cách mạng tư sản 'không đến nơi'.",
          "Trong thì tước đoạt công nông, ngoài thì áp bức thuộc địa.",
          "Cách mạng Tháng Mười Nga (1917): Là 'cách mệnh đến nơi'.",
          "Giải phóng cả công nhân, nông dân và các dân tộc bị áp bức."
        ],
        image: RELIABLE_IMAGES.bacHoLamViec,
        imageCaption: "Bác Hồ nghiên cứu bài học từ Cách mạng Tháng Mười.",
        quote: "Trong thế giới bây giờ chỉ có cách mệnh Nga là đã thành công, và thành công đến nơi."
      },
      {
        id: "4.3",
        subtitle: "Vai Trò Lãnh Đạo Của Đảng Cộng Sản",
        bullets: [
          "Cách mạng muốn thắng lợi phải có Đảng cách mạng lãnh đạo.",
          "Đảng phải lấy chủ nghĩa Mác - Lênin làm nòng cốt tư tưởng.",
          "Đảng là đội tiên phong của giai cấp công nhân và nhân dân lao động.",
          "Đảng không có lợi ích nào khác ngoài lợi ích của dân tộc và nhân dân."
        ],
        image: RELIABLE_IMAGES.bacHoChienDichBienGioi,
        imageCaption: "Bác Hồ chỉ đạo chiến dịch Biên giới 1950.",
        quote: "Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
      },
      {
        id: "4.4",
        subtitle: "Lực Lượng Nòng Cốt: Liên Minh Công - Nông",
        bullets: [
          "Công nhân và nông dân là hai giai cấp đông đảo và bị bóc lột nặng nề nhất.",
          "Liên minh công - nông là 'gốc' của cách mạng.",
          "Tiểu tư sản, tư sản dân tộc, địa chủ yêu nước là 'bầu bạn' của cách mạng.",
          "Đoàn kết rộng rãi mọi lực lượng yêu nước trong Mặt trận Dân tộc Thống nhất."
        ],
        image: RELIABLE_IMAGES.quanDoiDienBienPhu,
        imageCaption: "Khối liên minh công - nông - binh tại chiến trường Điện Biên Phủ.",
        quote: "Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, địa chủ nhỏ... là bầu bạn cách mệnh."
      },
      {
        id: "4.5",
        subtitle: "Kết Hợp Sức Mạnh Dân Tộc Với Sức Mạnh Thời Đại",
        bullets: [
          "Cách mạng Việt Nam là một bộ phận khăng khít của cách mạng thế giới.",
          "Đoàn kết với phong trào công nhân quốc tế và các dân tộc bị áp bức.",
          "Tranh thủ sự ủng hộ của nhân dân tiến bộ trên toàn thế giới.",
          "Giữ vững tinh thần độc lập, tự chủ và tự lực cánh sinh."
        ],
        image: RELIABLE_IMAGES.saigon1975,
        imageCaption: "Sức mạnh tổng hợp dân tộc và thời đại đưa đến chiến thắng 1975.",
        quote: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại tạo nên sức mạnh tổng hợp."
      },
      {
        id: "4.6",
        subtitle: "Tổng Kết Chương IV: Con Đường Duy Nhất Đúng Đắn",
        bullets: [
          "Đưa cách mạng Việt Nam vào quỹ đạo của cách mạng vô sản thế giới.",
          "Giúp dân tộc Việt Nam thoát khỏi kiếp nô lệ, giành độc lập hoàn toàn.",
          "Chứng minh tính khoa học và cách mạng triệt để của Tư tưởng Hồ Chí Minh.",
          "Bài học ngọn cờ lãnh đạo cho công cuộc đổi mới hiện nay."
        ],
        image: RELIABLE_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ – Người mở đường cho cách mạng Việt Nam.",
        quote: "Con đường cách mạng vô sản là con đường duy nhất dẫn tới tự do hoàn toàn."
      }
    ]
  },
  {
    chapterId: 5,
    title: "Chương V: Giải Quyết Mối Quan Hệ Dân Tộc & Giai Cấp",
    slides: [
      {
        id: "5.1",
        subtitle: "Khác Biệt Thực Tiễn Giữa Châu Âu & Thuộc Địa",
        bullets: [
          "Châu Âu tư bản: Mâu thuẫn giai cấp (Tư sản vs Vô sản) gay gắt.",
          "Mác - Ắngghen đặt trọng tâm vào đấu tranh giai cấp và giải phóng giai cấp.",
          "Phương Đông thuộc địa: Mâu thuẫn giữa Toàn thể Dân tộc với Thực dân xâm lược.",
          "Tất cả các giai cấp ở thuộc địa đều bị ách thực dân áp bức."
        ],
        image: RELIABLE_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ phân tích đặc điểm xã hội thuộc địa Việt Nam.",
        quote: "Cuộc đấu tranh ở thuộc địa trước hết là cuộc đấu tranh giải phóng dân tộc."
      },
      {
        id: "5.2",
        subtitle: "Đặt Giải Phòng Dân Tộc Lên Hàng Đầu, Trên Hết",
        bullets: [
          "Hội nghị Trung ương 8 (5/1941) do Nguyễn Ái Quốc chủ trì.",
          "Quyết định chuyển hướng chiến lược cách mạng lịch sử.",
          "Tạm gác khẩu hiệu 'cách mạng thổ địa', tập trung cho nhiệm vụ giải phóng dân tộc.",
          "Thành lập Mặt trận Việt Minh để tập hợp toàn dân."
        ],
        image: RELIABLE_IMAGES.bacHoChienDichBienGioi,
        imageCaption: "Bác Hồ chủ trì Hội nghị Trung ương 8 tại Pác Bó.",
        quote: "Quyền lợi của bộ phận, của giai cấp phải phục tùng sự sinh tử, tồn vong của quốc gia, của dân tộc."
      },
      {
        id: "5.3",
        subtitle: "Luận Điểm 'Sinh Tử Tồn Vong' Của Quốc Gia",
        bullets: [
          "Nếu không đòi được độc lập tự do cho toàn thể dân tộc thì giai cấp cũng chịu kiếp ngựa trâu.",
          "Quyền lợi của giai cấp chỉ được giải quyết khi quốc gia độc lập.",
          "Giải phóng dân tộc là tiền đề để giải phóng giai cấp.",
          "Độc lập dân tộc thắng lợi mới mở đường cho chủ nghĩa xã hội."
        ],
        image: RELIABLE_IMAGES.hanoi1945,
        imageCaption: "Toàn dân đoàn kết hưởng ứng Lời kêu gọi của Mặt trận Việt Minh.",
        quote: "Nếu không giải phóng được dân tộc thì quyền lợi giai cấp hàng vạn năm cũng không đòi lại được."
      },
      {
        id: "5.4",
        subtitle: "Đại Đoàn Kết Dân Tộc – Động Lực Quyết Định",
        bullets: [
          "Tập hợp mọi người Việt Nam có lòng yêu nước, không phân biệt giai cấp, tôn giáo, dân tộc.",
          "Địa chủ yêu nước, tư sản dân tộc cũng là lực lượng của cách mạng.",
          "Xóa bỏ định kiến giai cấp hẹp hòi để xây dựng khối đại đoàn kết.",
          "Khai thác tối đa tinh thần dân tộc chân chính."
        ],
        image: RELIABLE_IMAGES.bacHoThamBoDoi,
        imageCaption: "Bác Hồ xây dựng đại đoàn kết toàn dân tộc.",
        quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."
      },
      {
        id: "5.5",
        subtitle: "Đóng Góp Phát Triển Lý Luận Mác - Lênin",
        bullets: [
          "Bổ sung vào kho tàng Mác - Lênin luận điểm về cách mạng thuộc địa.",
          "Khẳng định chủ nghĩa dân tộc chân chính là một động lực lớn của đất nước.",
          "Không đối lập giải phóng dân tộc với giải phóng giai cấp mà kết hợp hài hòa.",
          "Được thực tiễn lịch sử Việt Nam chứng minh hoàn toàn đúng đắn."
        ],
        image: RELIABLE_IMAGES.quanDoiDienBienPhu,
        imageCaption: "Chiến thắng Điện Biên Phủ là thành quả của đại đoàn kết dân tộc.",
        quote: "Chủ nghĩa yêu nước chân chính là động lực vĩ đại của cách mạng giải phóng."
      },
      {
        id: "5.6",
        subtitle: "Tổng Kết Chương V: Bài Học Lợi Ích Quốc Gia",
        bullets: [
          "Lợi ích quốc gia dân tộc là tối cao và xuyên suốt.",
          "Giữ vững khối đại đoàn kết toàn dân tộc trong mọi thời kỳ.",
          "Bài học kinh nghiệm quý báu cho công cuộc đổi mới và phát triển đất nước.",
          "Định hướng chính sách ngoại giao và đoàn kết dân tộc hiện đại."
        ],
        image: RELIABLE_IMAGES.saigon1975,
        imageCaption: "Đất nước trọn niềm vui ngày đại thắng 1975.",
        quote: "Sức mạnh đại đoàn kết dân tộc là vạn năng."
      }
    ]
  },
  {
    chapterId: 6,
    title: "Chương VI: Tính Chủ Động Của Cách Mạng Thuộc Địa",
    slides: [
      {
        id: "6.1",
        subtitle: "Bác Bỏ Quan Điểm Thụ Động Của Quốc Tế III",
        bullets: [
          "Quốc tế Cộng sản trước đây coi cách mạng thuộc địa phụ thuộc vào cách mạng vô sản chính quốc.",
          "Coi thuộc địa chỉ là 'hậu phương' thụ động chờ đợi anh em chính quốc thắng lợi.",
          "Hồ Chí Minh kiên quyết bác bỏ quan điểm sai lầm và thụ động này.",
          "Khẳng định thuộc địa có sức mạnh tiềm tàng và tính chủ động rất cao."
        ],
        image: RELIABLE_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ bảo vệ luận điểm sáng tạo tại các hội nghị quốc tế.",
        quote: "Cách mạng thuộc địa không phụ thuộc thụ động vào cách mạng chính quốc."
      },
      {
        id: "6.2",
        subtitle: "Luận Điểm 'Con Đỉa Hai Vòi' Độc Đáo",
        bullets: [
          "Trong 'Bản án chế độ thực dân Pháp' (1925), Người ví CNTB như con đỉa 2 vòi.",
          "Một vòi bám vào vô sản chính quốc, một vòi bám vào nhân dân thuộc địa.",
          "Thuộc địa là nguồn sống, là nọc độc của chủ nghĩa tư bản đế quốc.",
          "Muốn diệt con đỉa CNTB, phải cắt cả 2 vòi, và thuộc địa chính là khâu yếu nhất!"
        ],
        image: RELIABLE_IMAGES.bacHoLamViec,
        imageCaption: "Bác Hồ viết tác phẩm Bản án chế độ thực dân Pháp.",
        quote: "Nọc độc và nguồn sống của con đỉa tư bản chủ nghĩa đang nằm ở các nước thuộc địa."
      },
      {
        id: "6.3",
        subtitle: "Khả Năng Giành Thắng Lợi Trước Của Thuộc Địa",
        bullets: [
          "Cách mạng giải phóng dân tộc ở thuộc địa có thể nổ ra và giành thắng lợi trước chính quốc.",
          "Sau khi giành thắng lợi, thuộc địa tác động mạnh mẽ trở lại giúp đỡ vô sản chính quốc.",
          "Đánh đòn quyết định vào khâu yếu nhất của hệ thống đế quốc chủ nghĩa.",
          "Khơi dậy tinh thần tự lực tự cường của các dân tộc bị áp bức."
        ],
        image: RELIABLE_IMAGES.hanoi1945,
        imageCaption: "Cách mạng Tháng Tám 1945 giành thắng lợi trước khi vô sản Pháp thành công.",
        quote: "Thuộc địa có thể nổ ra cách mạng và giành thắng lợi trước chính quốc!"
      },
      {
        id: "6.4",
        subtitle: "Phương Châm 'Đem Sức Ta Tự Giải Phóng Cho Ta'",
        bullets: [
          "Không trông chờ, ỉ ôi hay thụ động dựa dẫm vào bên ngoài.",
          "Tự lực cánh sinh là phương châm chiến lược hàng đầu.",
          "Nội lực là quyết định, sự giúp đỡ quốc tế là quan trọng.",
          "Đứng trên đôi chân của chính dân tộc mình để giành và giữ độc lập."
        ],
        image: RELIABLE_IMAGES.bacHoChienDichBienGioi,
        imageCaption: "Bác Hồ trực tiếp quan sát mặt trận Đông Khê 1950.",
        quote: "Đem sức ta mà tự giải phóng cho ta!"
      },
      {
        id: "6.5",
        subtitle: "Thực Tiễn Kiểm Chứng Tính Đúng Đắn Thiên Tài",
        bullets: [
          "Cách mạng Tháng Tám 1945 ở Việt Nam bùng nổ và thắng lợi rực rỡ.",
          "Lúc đó cách mạng vô sản ở Pháp vẫn chưa nổ ra.",
          "Chiến thắng Điện Biên Phủ 1954 làm sụp đổ hệ thống thuộc địa thực dân Pháp.",
          "Minh chứng hùng hồn cho thiên tài dự báo của Hồ Chí Minh."
        ],
        image: RELIABLE_IMAGES.quanDoiDienBienPhu,
        imageCaption: "Lính ta phất cờ chiến thắng tại Điện Biên Phủ.",
        quote: "Thực tiễn Cách mạng Tháng Tám và Điện Biên Phủ đã chứng minh hoàn toàn đúng đắn."
      },
      {
        id: "6.6",
        subtitle: "Tổng Kết Chương VI: Tinh Thần Tự Lực Tự Cường",
        bullets: [
          "Đập tan tư tưởng tự ti, thụ động của các dân tộc bị áp bức.",
          "Khơi dậy niềm tự hào và ý chí tự lực tự cường dân tộc.",
          "Bài học xuyên suốt cho sự nghiệp đổi mới: Tự lực, tự cường, hội nhập chủ động.",
          "Định hướng cho công cuộc phát triển kinh tế xã hội hiện đại."
        ],
        image: RELIABLE_IMAGES.saigon1975,
        imageCaption: "Đại thắng mùa Xuân 1975 – Đỉnh cao tinh thần tự lực giải phóng.",
        quote: "Tự lực cánh sinh là chìa khóa của mọi thắng lợi."
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
          "Độc lập dân tộc gắn liền với Chủ nghĩa Xã hội là sợi chỉ đỏ xuyên suốt cách mạng Việt Nam.",
          "Nếu chỉ dừng ở độc lập dân tộc (theo định hướng tư bản), nhân dân vẫn bị bóc lột.",
          "Chỉ có CNXH mới triệt tiêu mọi nguồn gốc áp bức, bất công.",
          "Đưa dân tộc Việt Nam tới sự phát triển toàn diện và bền vững."
        ],
        image: RELIABLE_IMAGES.bacHoTuyenNgon,
        imageCaption: "Bác Hồ khẳng định con đường tiến lên CNXH.",
        quote: "Độc lập dân tộc là tiền đề, CNXH là cơ sở bảo đảm vững bền."
      },
      {
        id: "7.2",
        subtitle: "Độc Lập Dân Tộc Là Tiền Đề Tiên Quyết",
        bullets: [
          "Có độc lập dân tộc mới có chính quyền cách mạng của nhân dân.",
          "Có hòa bình và chủ quyền mới có điều kiện xây dựng xã hội mới.",
          "Không có độc lập thì không thể bàn tới việc xây dựng CNXH.",
          "Độc lập dân tộc mở đường cho sự nghiệp giải phóng giai cấp và con người."
        ],
        image: RELIABLE_IMAGES.hanoi1945,
        imageCaption: "Chính quyền nhân dân ra đời tạo tiền đề xây dựng CNXH.",
        quote: "Độc lập dân tộc là ngọn cờ mở đường tiến lên chủ nghĩa xã hội."
      },
      {
        id: "7.3",
        subtitle: "Chủ Nghĩa Xã Hội Là Bảo Đảm Vững Bền",
        bullets: [
          "CNXH mang lại tiềm lực kinh tế, quốc phòng, an ninh mạnh mẽ.",
          "Tạo cơ sở vật chất vững chắc để bảo vệ độc lập dân tộc trước mọi kẻ thù.",
          "Đem lại cuộc sống ấm no, hạnh phúc, nâng cao đời sống nhân dân.",
          "Làm cho nhân dân thêm gắn bó và quyết tâm bảo vệ thành quả cách mạng."
        ],
        image: RELIABLE_IMAGES.quanDoiDienBienPhu,
        imageCaption: "Bộ đội ta bảo vệ vững chắc thành quả cách mạng.",
        quote: "Chỉ có chủ nghĩa xã hội mới bảo đảm thực sự cho độc lập dân tộc."
      },
      {
        id: "7.4",
        subtitle: "Bản Chất Của Chủ Nghĩa Xã Hội Theo Hồ Chí Minh",
        bullets: [
          "Không phải là những lý thuyết xa xôi hay khẩu hiệu trừu tượng.",
          "CNXH là làm cho dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
          "Là cơm ăn, áo mặc, học hành, nhà ở cho mọi người dân.",
          "Là sự phát triển toàn diện của con người Việt Nam."
        ],
        image: RELIABLE_IMAGES.bacHoThamBoDoi,
        imageCaption: "Bác Hồ luôn chăm lo đời sống vật chất và tinh thần cho dân.",
        quote: "Chủ nghĩa xã hội trước hết là làm cho nhân dân lao động thoát khỏi bần cùng, có công ăn việc làm, được ấm no và sống một đời hạnh phúc."
      },
      {
        id: "7.5",
        subtitle: "Con Đường Quá Độ Tiến Lên CNXH Ở Việt Nam",
        bullets: [
          "Bỏ qua chế độ tư bản chủ nghĩa, tiến thẳng lên CNXH từ một nước nông nghiệp lạc hậu.",
          "Đây là cuộc đấu tranh gay go, phức tạp và lâu dài.",
          "Phải vừa xây dựng kinh tế, vừa cải tạo xã hội, vừa bảo vệ độc lập.",
          "Đỏi hỏi tư duy sáng tạo, không giáo điều máy móc."
        ],
        image: RELIABLE_IMAGES.bacHoVietBac,
        imageCaption: "Bác Hồ hoạch định con đường quá độ phù hợp Việt Nam.",
        quote: "Xây dựng chủ nghĩa xã hội là một sự nghiệp kỳ diệu nhưng phải kinh qua nhiều gian khổ."
      },
      {
        id: "7.6",
        subtitle: "Tổng Kết Chương VII: Mục Tiêu Chiến Lược Vĩnh Cửu",
        bullets: [
          "Độc lập dân tộc gắn liền với CNXH là bài học vô giá của cách mạng Việt Nam.",
          "Giúp Việt Nam vượt qua mọi cơn bão lịch sử và giữ vững chủ quyền.",
          "Định hướng cho sự nghiệp Đổi mới và công nghiệp hóa, hiện đại hóa.",
          "Giữ vững mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
        ],
        image: RELIABLE_IMAGES.saigon1975,
        imageCaption: "Việt Nam độc lập, thống nhất tiến vững chắc lên CNXH.",
        quote: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là con đường sống còn của dân tộc."
      }
    ]
  },
  {
    chapterId: 8,
    title: "Chương VIII: Giá Trị Thời Đại & Bài Học Hiện Nay",
    slides: [
      {
        id: "8.1",
        subtitle: "Đóng Góp Cho Phong Trào Giải Phòng Dân Tộc Thế Giới",
        bullets: [
          "Cổ vũ mạnh mẽ các dân tộc bị áp bức ở Châu Á, Châu Phi và Mỹ La Tinh.",
          "Góp phần làm sụp đổ hoàn toàn chủ nghĩa thực dân cũ và mới trên thế giới.",
          "Hồ Chí Minh được UNESCO tôn vinh là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất.",
          "Trở thành biểu tượng của khát vọng tự do và hòa bình cho nhân loại."
        ],
        image: RELIABLE_IMAGES.bacHoTuyenNgon,
        imageCaption: "Hồ Chí Minh – Biểu tượng chiến đấu cho tự do của các dân tộc.",
        quote: "Hồ Chí Minh là ngọn cờ đầu của phong trào giải phóng dân tộc thế giới."
      },
      {
        id: "8.2",
        subtitle: "Bài Học Cho Công Cuộc Đổi Mới Hiện Nay",
        bullets: [
          "Giữ vững độc lập, tự chủ trong hoạch định đường lối phát triển.",
          "Phát huy tối đa nội lực dân tộc kết hợp tranh thủ hiệu quả ngoại lực.",
          "Chủ động, tích cực hội nhập quốc tế sâu rộng nhưng không hòa tan.",
          "Đặt lợi ích quốc gia - dân tộc lên trên hết và trước hết."
        ],
        image: RELIABLE_IMAGES.bacHoChienDichBienGioi,
        imageCaption: "Bản lĩnh độc lập tự chủ soi đường cho thời kỳ Đổi mới.",
        quote: "Độc lập tự chủ là nguyên tắc vàng trong hội nhập quốc tế."
      },
      {
        id: "8.3",
        subtitle: "Bảo Vệ Vững Chắc Chủ Quyền Quốc Gia Đất Liền & Biển Đảo",
        bullets: [
          "Xây dựng thế trận quốc phòng toàn dân và an ninh nhân dân vững chắc.",
          "Kiên quyết, kiên trì bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ.",
          "Giữ vững môi trường hòa bình, ổn định để phát triển đất nước.",
          "Kết hợp sức mạnh quân sự, ngoại giao và chính trị."
        ],
        image: RELIABLE_IMAGES.quanDoiDienBienPhu,
        imageCaption: "Quân đội Nhân dân Việt Nam trung thành bảo vệ chủ quyền.",
        quote: "Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước."
      },
      {
        id: "8.4",
        subtitle: "Vận Dụng Trong Xây Dựng Đảng & Nhà Nước",
        bullets: [
          "Xây dựng Đảng trong sạch, vững mạnh, thực sự là đạo đức, là văn minh.",
          "Phòng chống tham nhũng, lãng phí, tiêu cực và suy thoái đạo đức.",
          "Thực hiện dân chủ XHCN, phát huy quyền làm chủ của nhân dân.",
          "Củng cố niềm tin của nhân dân đối với Đảng và Nhà nước."
        ],
        image: RELIABLE_IMAGES.bacHoThamBoDoi,
        imageCaption: "Bác Hồ coi xây dựng Đảng trong sạch là nhiệm vụ then chốt.",
        quote: "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng."
      },
      {
        id: "8.5",
        subtitle: "Tổng Kết Toàn Bộ Bài Giảng: Di Sản Trường Tồn",
        bullets: [
          "Tư tưởng Hồ Chí Minh về độc lập dân tộc là tài sản tinh thần vô giá của Đảng và dân tộc.",
          "Là kim chỉ nam soi đường cho cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác.",
          "Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc.",
          "Trách nhiệm thế hệ trẻ hôm nay: Học tập, rèn luyện, bảo vệ và phát triển đất nước."
        ],
        image: RELIABLE_IMAGES.saigon1975,
        imageCaption: "Việt Nam tự cường, phát triển bước vào kỷ nguyên mới.",
        quote: "Khát vọng xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh."
      }
    ]
  }
];
