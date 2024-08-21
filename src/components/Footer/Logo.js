import React from 'react';
import logo from '../../Img/logo.jpg';
import  '../../index.css';

function Logo() {
  return (
    <div className="footer-logo">
        <div className="logo-container">
      <a href="/Home-Page" className="logo-link"> {/* Sửa thành trang Home */}
        <img src={logo} alt="LogoFooter" className="logo-image" />
        <span className="brand">Online Korean</span>
      </a>
    </div>
      <p className="logo-text">
      Khóa học tiếng Hàn với trình độ cơ bản đến nâng cao, đáp ứng nhu cầu học tập của của mọi người.Trải nghiệm khóa học được đề xuất phù hợp mong muốn của mọi người
      </p>
    </div>
  );
}

export default Logo;