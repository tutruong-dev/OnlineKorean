import React from "react";
import "./Opening_Test.css"; 

const Opening_Test = () => {
  return (
    <div className="Test">
      <div className=" banner-container">
        <div className="left-container">
          <h1>KIỂM TRA TRÌNH ĐỘ NGAY ĐỂ NHẬN NGAY TƯ VẤN LỘ TRÌNH HỌC TIẾNG HÀN</h1>
          <ul>
            <li>Kiểm Tra Trình Độ Online Để Nhận Lộ Trình Học Tiếng Hàn Phù Hợp</li>
            <li>Bài Kiểm Tra Online Phù Hợp Trên Mọi Thiết Bị</li>
            <li>Nhận Kết Quả Và Tư Vấn Ngay Sau Khi Hoàn Thành Bài Kiểm Tra</li>
          </ul>
          <button className="button-container">Kiểm Tra Trình Độ Ngay</button>
        </div>
        <div className="right-container">
          <img src="https://png.pngtree.com/png-vector/20230316/ourmid/pngtree-admin-and-customer-service-job-vacancies-vector-png-image_6650726.png" alt="Tư vấn online"></img>
        </div>
      </div>
      <div className="body-Area">
        <h1>Cấu Trúc Bài Kiểm Tra Trình Độ</h1>
        <ol className="test-list">
          <li>Đánh giá cụ thể từng kỹ năng (nghe, nói, đọc, viết, topik) và đề xuất lộ trình học phù hợp với năng lực và mục tiêu đầu ra</li>
          <li>Bài kiểm tra với thời gian làm bài tùy thuộc vào từng kỹ năng</li>
            <ul className="timing-list">
              <li>15 - 30 phút</li>
              <li>45 - 60 phút</li>
              <li>90 phút trở lên...</li>
            </ul>
        </ol>
        <div className="skill-body">
          <div className="skill-row">
            <div className="skill">
              <img src="https://media.istockphoto.com/id/1244097573/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-t%E1%BB%91i-thi%E1%BB%83u-c%E1%BB%A7a-tai-nghe-v%E1%BB%9Bi-s%C3%B3ng-%C3%A2m-thanh.jpg?s=612x612&w=0&k=20&c=L8MKr2NXqjd0CzwiECE8vrqtp-PywmK6TforkcFuS78=" alt="Nghe" className="skill-img"></img>
              <span>Nghe</span>
            </div>

            <div className="skill">
              <img src="https://c1.klipartz.com/pngpicture/148/941/sticker-png-speaker-icon-voice-command-icon-intelligent-automotive-icon-line-furniture-line-art.png" alt="Nói" className="skill-img"></img>
              <span>Nói</span>
            </div>

            <div className="skill">
              <img src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-reading-icon-png-image_3989008.jpg" alt="Đọc" className="skill-img"></img>
              <span>Đọc</span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill">
              <img src="https://media.istockphoto.com/id/928231990/vi/vec-to/vi%E1%BA%BFt-ho%E1%BA%B7c-v%E1%BA%BD-m%E1%BB%99t-b%C3%A0n-tay-b%E1%BA%B1ng-b%C3%BAt-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ph%C3%A1c-th%E1%BA%A3o-ph%C3%A1c-th%E1%BA%A3o-c%C3%B3-th%E1%BB%83-ch%E1%BB%89nh-s%E1%BB%ADa.jpg?s=2048x2048&w=is&k=20&c=7MJ4n-XwiYQoWywhmDMTv2WvLxhBsLfemU0n6MPVcNo=" className="skill-img" alt="Viết"></img>
              <span>Viết</span>
            </div>

            <div className="skill">
              <img src="https://play-lh.googleusercontent.com/c8Hyq2kT7HEEPmR5CuEInPG2PIOCwdPnU3rao0OpC_U6NFNOn5G0D6Ct0wvT5BmMqSj4" className="skill-img" alt="Topik"></img>
              <span>Topik</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
export default Opening_Test;
