import React from 'react';

function Help() {
  return (
    <div className="footer-frame">
      <h4>Nhận trợ giúp</h4>
      <ul>
        <li><a href="/contact">Liên Hệ Với Chúng Tôi</a></li> {/* Cập nhật href Toi Trang Liên Hệ Với Chúng Tôi*/}
        <li><a href="/courses">Khóa Học Mới Nhất</a></li> {/* Cập nhật href Toi Trang Khóa Học */}
        <li><a href="/faq">FAQ</a></li> {/* Cập nhật href Toi Trang FAQS */}
      </ul>
    </div>
  );
}

export default Help;