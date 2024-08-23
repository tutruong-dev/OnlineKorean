import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Category List */}
      <div className="category">
        <span className="course-category">Danh Mục Khóa Học</span>
        <div className="frame">{/* Add category items dynamically */}</div>
      </div>

      {/* Instructor List */}
      <div className="group">
        <span className="text">Người Giảng Dạy</span>
        <div className="wrapper">{/* Add instructor items dynamically */}</div>
      </div>

      {/* Additional sidebar content */}
    </div>
  );
};

export default Sidebar;
