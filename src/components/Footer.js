// phần đáy của  bài
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="/logo.png" alt="Online Korean" className="logo" />
        <p>Learn Korean online at your convenience.</p>
      </div>
      <div className="footer-section">
        <h3>Nhận Trợ Giúp</h3>
        <ul>
          <li>Liên Hệ Chúng Tôi</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Chương Trình</h3>
        <ul>
          <li>Phần Mềm Học</li>
          <li>Khóa Học Nổi Bật</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Liên Hệ Chúng Tôi</h3>
        <p>Số điện thoại: +84 123 456 789</p>
        <p>Email: korean_warriors@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
