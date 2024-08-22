import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header()
{
    return (
        <div className="Header">
            <div className="Logo">
                <a href="">
                    <img src="/logo.jpg"></img>
                    <a>Online Korean</a>
                </a>
            </div>
            <div className="MenuList">
                <a href="">Trang Chủ</a>
                <a href="">Khóa Học</a>
                <a href="">Test Đầu Vào</a>
                <a href="">Blog</a>
                <a href="">FAOs</a>
                <a href="">Liên Hệ Chúng Tôi</a>
            </div>
            <div className="ButtonFunc">
                <a href=""><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></a>
                <a href=""><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></a>
                <div class="d-grid gap-2 col-6 mx-auto" className="Button-Login">
                    <button type="button" class="btn btn-outline-primary">Đăng nhập</button>
                    <button type="button" class="btn btn-primary">Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default Header;