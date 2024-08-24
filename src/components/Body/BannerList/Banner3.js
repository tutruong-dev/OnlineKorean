import React from 'react';
import '../../../index.css';
import profileStudent from '../../../Img/profileStudent.png'
function Banner3() {
    return (
        <div className="Banner3-container">
          <div className="Banner3-content">
            <img src={profileStudent} alt="Profile Icon" className="Banner3-icon" />
            <p className="Banner3-text">Online Korean</p>
            <div className="Banner3-links">
              <a href="/Student" className="Banner3-link">Tôi là Học Viên</a> {/* Cập nhật href Toi Trang Học Viên */}
              <a href="/Teacher" className="Banner3-link">Người Giảng Dạy</a> {/* Cập nhật href Tới Trang của Giáo Viên */}
            </div>
          </div>
        </div>
    );
}
export default Banner3;
