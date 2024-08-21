import React from 'react';
import '../../../index.css';

const CousesNew = () => {
  const coursesNew = [
    {
      id: 1,
      videoUrl: 'https://example.com/video.mp4',
      title: 'Nâng Cao Kỹ Năng Đọc',
      date: '01 Tháng 09, 2024',
      instructor: 'Nguyễn Văn A',
    },
    {
      id: 2,
      videoUrl: 'https://example.com/video.mp4',
      title: 'Nâng Cao Kỹ Năng Viết',
      date: '15 Tháng 09, 2024',
      instructor: 'Trần Thị B',
    },
    {
      id: 3,
      videoUrl: 'https://example.com/video.mp4',
      title: 'Nâng Cao Kỹ Năng Nói',
      date: '01 Tháng 10, 2024',
      instructor: 'Lê Văn C',
    },
  ];

  return (
    <div className="courseNew-body">
  {coursesNew.map((course) => (
    <div key={course.id} className="courseNew-card">
      <video controls src={course.videoUrl} className="courseNew-video" />
      <h3 className="courseNew-title">
        <a href={`/courseNew/${course.id}`} className="courseNew-title-link">{course.title}</a>
      </h3>
      <div className="courseNew-details">
        <span className="courseNew-date">
          {/* Biểu tượng ngày tháng sẽ xuất hiện ở đây */}
          {course.date}
        </span>
      </div>
      <p className="courseNew-info-text">Bạn đang tìm khóa học {course.title}?</p>
    </div>
  ))}
</div>

  );
};

export default CousesNew;
