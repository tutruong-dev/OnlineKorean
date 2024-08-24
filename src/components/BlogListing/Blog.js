import React, { useState } from 'react';
import '../../index.css';

// Import hình ảnh từ thư mục src
import hocImage from '../../Img/Blog/hoc.jpg'; // Đảm bảo đường dẫn đúng

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      title: "Khóa Giao Tiếp Tiếng Hàn",
      date: "24, 2023",
      description: "Cung cấp kiến thức căn bản về tiếng Hàn giao tiếp.",
      imageUrl: hocImage
    },
    {
      title: "Khóa Luyện Nói Sơ Cấp",
      date: "24, 2023",
      description: "Looking for an amazing & well-educated LearnPress WordPress Theme?",
      imageUrl: hocImage
    },
    {
      title: "Khóa Luyện Thi Topik 1",
      date: "24, 2023",
      description: "Looking for an amazing & well-educated LearnPress WordPress Theme?",
      imageUrl: hocImage
    },
    {
      title: "Khóa Luyện Thi Topik 2",
      date: "24, 2023",
      description: "Looking for an amazing & well-educated LearnPress WordPress Theme?",
      imageUrl: hocImage
    },
    {
      title: "Khóa Luyện Nói Tiếng Hàn Trung Cấp",
      date: "24, 2023",
      description: "Looking for an amazing & well-educated LearnPress WordPress Theme?",
      imageUrl: hocImage
    },
    {
      title: "Khóa Tiếng Hàn Giao Tiếp Tổng Hợp",
      date: "24, 2023",
      description: "Looking for an amazing & well-educated LearnPress WordPress Theme?",
      imageUrl: hocImage
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="header">
        <h1>Danh Sách Lớp</h1>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="course-list">
        {filteredCourses.map((course, index) => (
          <div className="course-item" key={index} style={{ backgroundImage: `url(${course.imageUrl})` }}>
            <div className="course-info">
              <h3>{course.title}</h3>
              <p><i>{course.date}</i></p>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
}

export default Blog;