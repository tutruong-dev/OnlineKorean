import React from 'react';
import '../../../index.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Online Korean</h1>
        <p>Khoa học tiếng Hàn với trình độ cơ bản đến nâng cao, đáp ứng nhu cầu học tập của mọi người.
          Trải nghiệm khóa học được đề xuất phù hợp mong muốn của mọi người.</p>
      </div>
      <a href="/khoa-hoc" className="explore-link">Khám Phá Khóa Học</a> {/* Cập nhật href Tới TRang Khóa Học */}
    </div>
  );
};

export default Banner;
