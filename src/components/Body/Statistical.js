import React from 'react';
import '../../index.css';

const Statistical = () => {
  const feedbackData = [
    { number: '25K+', text: 'Học Viên', bgColor: '#F5F5F5' },
    { number: '899', text: 'Tổng Các Khóa Học', bgColor: '#F5F5F5' },
    { number: '158', text: 'Người Giảng Dạy', bgColor: '#F5F5F5' },
    { number: '100%', text: 'Tỷ Lệ Học Viên Hài Lòng', bgColor: '#F5F5F5' },
  ];

  return (
    <div className="statistical-container">
      {feedbackData.map((item, index) => (
        <div key={index} className="statistical-card" style={{ backgroundColor: item.bgColor }}>
          <h2 className="statistical-number">{item.number}</h2>
          <p className="statistical-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistical;
