import React from 'react';
import '../../index.css';

const Feedback = () => {
  const feedbackData = [
    {
      name: 'Nguyễn Văn A',
      review: 'Chương trình học rất hữu ích và chất lượng giảng dạy xuất sắc. Tôi đã học được nhiều điều mới và áp dụng thành công vào công việc.',
      designation: 'Học viên'
    },
    {
        name: 'Nguyễn Văn A',
        review: 'Chương trình học rất hữu ích và chất lượng giảng dạy xuất sắc. Tôi đã học được nhiều điều mới và áp dụng thành công vào công việc.',
        designation: 'Học viên'
      },
    {
        name: 'Nguyễn Văn A',
        review: 'Chương trình học rất hữu ích và chất lượng giảng dạy xuất sắc. Tôi đã học được nhiều điều mới và áp dụng thành công vào công việc.',
        designation: 'Học viên'
      },
    
  ];

  return (
    <div className="feedback-container">
      {feedbackData.map((item, index) => (
        <div key={index} className="feedback-card">
          <p className="feedback-review">{item.review}</p>
          <h3 className="feedback-name">{item.name}</h3>
          <p className="feedback-designation">{item.designation}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
