import React from 'react';
import '../../../index.css';
import Banner2Img from '../../../Img/Banner/Banner2.png';

const Banner2 = () => {
  return (
    <div className="banner2">
      <img src={Banner2Img} alt="Banner2 with skills development" className="banner2-image" />
      <div className="banner2-content">
        <h1>Phát triển các kĩ năng của bạn cùng với chúng tôi</h1>
        <ul>
          <li><i className="fas fa-check"></i> Nghe</li>
          <li><i className="fas fa-check"></i> Nói</li>
          <li><i className="fas fa-check"></i> Đọc</li>
          <li><i className="fas fa-check"></i> Viết</li>
          <li><i className="fas fa-check"></i> Topik</li>
        </ul>
        <a href="/khoa-hoc" className="discover-link">Khám Phá Khóa Học</a> {/* Cập nhật href Toi Trang Khóa Học */}
      </div>
    </div>
  );
};

export default Banner2;
