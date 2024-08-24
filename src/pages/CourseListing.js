import React from "react";
import TopHeading from "../components/Courses/TopHeading";
import Courses from "../components/Courses/Courses";
import Pagination from "../components/Courses/Pagination";
import SidebarCoursesListing from "../components/Courses/SidebarCoursesListing";
import "./CourseListing.css";
import "../../src/components/Courses/global.css";
import rectangle139_2x from "../Img/Courses/rectangle-139@2x.png";

const CourseListing = () => {
  return (
    <div className="course-listing-2">
      <section className="page-body">
        <div className="course-listings">
          <div className="listing-content">
            <TopHeading />
            <div className="courses">
              <div className="course-items">
                <Courses
                  id="1"
                  rectangle139={rectangle139_2x}
                  photography="Nghe"
                  prop="200,000"
                />
                <Courses
                  id="2"
                  rectangle139={rectangle139_2x}
                  photography="Nghe"
                  prop="499,000 đ"
                />
              </div>
              {/* Repeat as necessary for other courses */}
              <div className="pagination-container">
                <Pagination />
              </div>
            </div>
          </div>
          <SidebarCoursesListing />
        </div>
      </section>

      <div className="course-listing-2-child" />
    </div>
  );
};

export default CourseListing;
