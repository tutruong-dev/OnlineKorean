import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="image">
        <div className="rectangle" />
        <button className="frame">
          <span className="photography">{course.name}</span>
        </button>
      </div>
      <div className="content">
        <div className="frame">
          <span className="by-instructor">bởi {course.instructor}</span>
          <span className="description">{course.description}</span>
        </div>
        <div className="meta">
          <div className="times">
            <span className="duration">{course.duration}</span>
          </div>
          <div className="students">
            <span className="student-count">{course.students} Học viên</span>
          </div>
        </div>
        <div className="line" />
        <div className="frame">
          <div className="price">
            <span className="price-dollar">{course.price}</span>
            <span className="free-price">{course.discountedPrice}</span>
          </div>
          <span className="view-more">Xem Thêm</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
