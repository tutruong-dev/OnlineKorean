import React from 'react';
import '../../../index.css';
import TeacherListImg from '../../../Img/TeacherListImg.png';

const teachers = [
  { name: 'Nguyễn Văn A', experience: '2 năm', title: 'Học Viên', reviews: 5, studentCount: 30 },
  { name: 'Nguyễn Văn B', experience: '1 năm', title: 'Học Viên', reviews: 4, studentCount: 25 },
  { name: 'Nguyễn Văn C', experience: '10 năm', title: 'Học Viên', reviews: 5, studentCount: 50 },
];

const TeacherList = () => {
  return (
    <div className="teacher-list">
      <div className="teacher-cards">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <img src={TeacherListImg} alt="Teacher" className="teacher-photo" />
            <h2>{teacher.name}</h2>
            <p>{teacher.experience} - {teacher.studentCount}+ {teacher.title}</p>
            <div className="review-section">
              <div className="reviews">
                {'★'.repeat(teacher.reviews)}
                {'☆'.repeat(5 - teacher.reviews)}
              </div>
              <p className="review-text">Đánh Giá</p>
              <a href='xem-them' className="more-info-link">Xem Thêm</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
