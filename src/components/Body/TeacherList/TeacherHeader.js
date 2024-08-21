import React from 'react';
import '../../../index.css';

const TeacherHeader = () => {
  return (
    <header className="TeacherHeader">
      <div className="TeacherHeader-content">
        <h1>Danh Sách Giáo Viên</h1>
        <p>Những người dẫn dắt con bạn trên con đường tri thức.</p>
      </div>
      <a href='/tat-ca-giao-vien' className="all-teachers-link">Tất Cả Giáo Viên</a>
    </header>
  );
};

export default TeacherHeader;
