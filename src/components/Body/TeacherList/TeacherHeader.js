import React from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
const TeacherHeader = () => {
  return (
    <header className="TeacherHeader">
      <div className="TeacherHeader-content">
        <h1>Danh Sách Giáo Viên</h1>
        <p>Những người dẫn dắt con bạn trên con đường tri thức.</p>
      </div>
      <Link to='/Tất Cả Giáo Viên' className="all-teachers-link">Tất Cả Giáo Viên</Link> {/* Cập nhật href Toi Trang Giáo Viên */}
    </header>
  );
};

export default TeacherHeader;
