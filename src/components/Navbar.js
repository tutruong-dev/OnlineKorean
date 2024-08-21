// thanh điều hướng ( phần đầu )
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="\logo.png" alt="Online Korean" className="logo" />
        <span className="site-title"></span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Trang Chủ</a></li>
        <li><a href="#">Khóa Học</a></li>
        <li><a href="#">Test Đầu Vào</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Liên Hệ Chúng Tôi</a></li>
      </ul>
      <div className="navbar-right">
        <a href="#"><i className="search-icon">🔍</i></a>
        <a href="#"><i className="cart-icon">🛒</i></a>
        <a href="#" className="login-btn">Đăng nhập</a>
        <a href="#" className="register-btn">Đăng ký</a>
      </div>
    </nav>
  );
}

export default Navbar;
