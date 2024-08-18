import React from "react";
const CourseCard = ({ image, title, instructor, price, oldPrice, lessons }) => {
  return (
    <div className="course-card">
      <img src="{image}" alt="{title}" />
      <div className="course-info">
        <h3>{title}</h3>
        <p>by {instructor}</p>
        <div className="price">
          <span className="old-price">{oldPrice}</span>
          <span className="new-price">{price}</span>
        </div>
        <p>{lessons} Bài học</p>
        <button>Xem Thêm</button>
      </div>
    </div>
  );
};
export default CourseCard;
