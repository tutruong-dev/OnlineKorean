import React from 'react';
import '../../../index.css';

const HeroBanner = () => {
  return (
      <div className="hero-banner">
          <div className="hero-content">
              <h1>Xây Dựng Kỹ Năng Với Khóa Học Trực Tuyến</h1>
              <p>Cung cấp các tài liệu phong phú. Khóa học tiếng Hàn với trình
                độ cơ bản đến nâng cao, đáp ứng nhu cầu học tập của của mọi
                  người.Trải nghiệm khóa học được đề xuất phù hợp mong muốn
                  và kiến thức một cách cá nhân hóa</p>
              <div className="cta-buttons">
                  <a href="/Khóa-Học">Tham Gia Khóa Học</a> {/* Cập nhật href Toi Trang Khóa Học */}
                  <a href="/Khóa-Học">Xem Videos Demo Miễn Phí</a>{/* Cập nhật href Toi Trang Khóa Học Miễn Phí */} 
              </div>
          </div>
      </div>
  );
};

export default HeroBanner;
