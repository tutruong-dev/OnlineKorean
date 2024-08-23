import React from "react";
import './Footer.css';

function Footer()
{
    return(
        <div className="container">
            <div className="Footer">
                <div className="Footer-intro">
                    <div className="Footer-logo">
                        <img src="/logo.jpg"></img>
                        <b>OnlineKorean</b>
                    </div>
                    <div className="Footer-introduce-content">
                        <p>Trang web học tiếng Hàn cung cấp bài học ngữ pháp, từ vựng, phát âm và bài tập tương tác, 
                            giúp người học rèn luyện cả 4 kỹ năng ngôn ngữ và tìm hiểu văn hóa Hàn Quốc.</p>
                    </div>
                </div>
                <div className="Footer-function">
                    <div className="Footer-help">
                        <b>Nhận trợ giúp</b>
                        <ul>
                            <li>Liên Hệ Chúng Tôi</li>
                            <li>Khóa Học Mới Nhất</li>
                            <li>FAOs</li>
                        </ul>
                    </div>
                <div className="Footer-Pro">
                    <b>Chương Trình</b>
                    <ul>
                        <li>Nghe</li>
                        <li>Nói</li>
                        <li>Đọc</li>
                        <li>Viết</li>
                        <li>Topik</li>
                    </ul>
                </div>
                <div className="Footer-Contact">
                    <b>Liên Hệ Chúng Tôi</b>
                    <ul>
                        <li>Số Điện Thoại: (+84) 123-456-789</li>
                        <li>Email: online.korean_vn@gmail.com</li>
                        <li>
                            <div className="Footer-icon">
                                <i class="fa-solid fa-envelope"></i>
                                <i class="fa-solid fa-phone"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>                          
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="Footer-Source">
                <p>Copyright © 2024 Korean Warriors | Powered by KS_01</p>
            </div>
    </div>
    );
}

export default Footer;