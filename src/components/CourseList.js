import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          instructor={course.instructor}
          price={course.price}
          oldPrice={course.oldPrice}
          lessons={course.lessons}
        />
      ))}
    </div>
  );
};

export default CourseList;
