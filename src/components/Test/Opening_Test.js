import React from "react";
import { Link } from 'react-router-dom';
import "../../index"; 
import TuVan from '../../Img/Test/TuVan.png'
import Nghe from '../../Img/Test/Nghe.png'
import Noi from '../../Img/Test/Noi.png'
import Doc from '../../Img/Test/Doc.png'
import Viet from '../../Img/Test/Viet.png'
import Topik from '../../Img/Test/Topik.png'

const Opening_Test = () => {
  return (
    <div className="Test">
      <div className=" bannerTest-container">
        <div className="left-container">
          <h1>KIỂM TRA TRÌNH ĐỘ NGAY ĐỂ NHẬN NGAY TƯ VẤN LỘ TRÌNH HỌC TIẾNG HÀN</h1>
          <ul>
            <li>Kiểm Tra Trình Độ Online Để Nhận Lộ Trình Học Tiếng Hàn Phù Hợp</li>
            <li>Bài Kiểm Tra Online Phù Hợp Trên Mọi Thiết Bị</li>
            <li>Nhận Kết Quả Và Tư Vấn Ngay Sau Khi Hoàn Thành Bài Kiểm Tra</li>
          </ul>
          <Link to="/Kiểm Tra Trình Độ" className="buttonTest-container">Kiểm Tra Trình Độ Ngay</Link>
        </div>
        <div className="right-container">
          <img src={TuVan} alt="Tư vấn online"></img>
        </div>
      </div>
      <div className="bodyTest-Area">
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
              <img src={Nghe} alt="Nghe" className="skill-img"></img>
              <span>Nghe</span>
            </div>

            <div className="skill">
              <img src={Noi} alt="Nói" className="skill-img"></img>
              <span>Nói</span>
            </div>

            <div className="skill">
              <img src={Doc} alt="Đọc" className="skill-img"></img>
              <span>Đọc</span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill">
            <img src={Viet} className="skill-img" alt="Viết"></img>
              <span>Viết</span>
            </div>

            <div className="skill">
              <img src={Topik} className="skill-img" alt="Topik"></img>
              <span>Topik</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
export default Opening_Test;