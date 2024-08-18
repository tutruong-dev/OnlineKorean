import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">Online Korean</div>
      <nav>
        <ul>
          <li>Trang Chủ</li>
          <li>Khóa Học</li>
          <li>Test Đầu Vào</li>
          <li>Blog</li>
          <li>FAQs</li>
          <li>Liên Hệ</li>
        </ul>
      </nav>
      <div className="auth-links">
        <button>Đăng Nhập / Đăng Ký</button>
      </div>
    </header>
  );
};

export default Header;
