import React from 'react';
import '../../../index.css';

const Course = () => {
  // Dữ liệu giả (mock data) để kiểm tra giao diện
  const courses = [
    {
      id: 1,
      videoUrl: 'https://example.com/video.mp4',
      title: 'Nâng Cao Kỹ Năng Đọc Ở Đây',
      duration: '4 tuần',
      graduates: '1M+',
      instructor: 'Mr Bearn',
      rating: '4.8',
    },
    {
      id: 2,
      videoUrl: 'https://example.com/video.mp4',
      title: 'Nâng Cao Kỹ Năng Đọc Ở Đây',
      duration: '4 tuần',
      graduates: '1M+',
      instructor: 'Mr Bearn',
      rating: '4.8',
    },
    {
      id: 3,
      videoUrl: 'https://example.com/video.mp4',
      title: 'Nâng Cao Kỹ Năng Đọc Ở Đây',
      duration: '4 tuần',
      graduates: '1M+',
      instructor: 'Mr Bearn',
      rating: '4.8',
    },
  ];

  return (
    <div className="course-body">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <video controls src={course.videoUrl} className="course-video" />
          <h3 className="course-title">{course.title}</h3>
          <div className="course-info">
            <span className="course-duration">
              <i className="icon-clock"></i> {course.duration}
            </span>
            <span className="course-graduates">
              <i className="icon-graduation-cap"></i> {course.graduates}
            </span>
          </div>
          <div className="course-details">
            <span className="course-rating">
              <i className="icon-star"></i> {course.rating}
            </span>
            <span className="course-instructor">
              <i className="icon-person"></i> {course.instructor}
            </span>
          </div>
          <a href="/xem-them" className="course-more-info">Xem thêm</a>
        </div>
      ))}
    </div>
  );
};

export default Course;
