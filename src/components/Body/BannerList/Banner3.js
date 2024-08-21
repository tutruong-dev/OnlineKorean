import React from 'react';
import '../../../index.css';
import profileStudent from '../../../Img/Banner/Banner3.png'
function Banner3() {
    return (
        <div className="Banner3-container">
          <div className="Banner3-content">
            <img src={profileStudent} alt="Profile Icon" className="Banner3-icon" />
            <p className="Banner3-text">Bắt Đầu Học Việc...</p>
            <div className="Banner3-links">
              <a href="/student" className="Banner3-link">Tôi là Học Viên</a>
              <a href="/teacher" className="Banner3-link">Người Giảng Dạy</a>
            </div>
          </div>
        </div>
    );
}
export default Banner3;
