
import TopHeading from "../components/Courses/TopHeading";
import Courses from "../components/Courses/Courses";
import Pagination from "../components/Courses/Pagination";
import SidebarCoursesListing from "../components/Courses/SidebarCoursesListing";

import "./CourseListing.css";
import rectangle139_2x from '../Img/Courses/rectangle-139@2x.png';
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
                
                  rectangle139={rectangle139_2x}
                  propHeight="unset"
                  propWidth="unset"
                  photography="Nghe"
                  propDisplay="inline-block"
                  propMinWidth="39px"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propHeight1="unset"
                  prop="200,000"
                  propMinWidth1="70px"
                  propDisplay1="inline-block"
                  propAlignSelf1="unset"
                  propWidth1="unset"
                />
                <Courses
                  rectangle139={rectangle139_2x}
                  propHeight="unset"
                  propWidth="unset"
                  photography="Nghe"
                  propDisplay="inline-block"
                  propMinWidth="39px"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propHeight1="unset"
                  prop="499,000 đ"
                  propMinWidth1="84px"
                  propDisplay1="inline-block"
                  propAlignSelf1="unset"
                  propWidth1="unset"
                />
              </div>
              <div className="course-items">
                <Courses
                  rectangle139={rectangle139_2x}
                  propHeight="unset"
                  propWidth="unset"
                  photography="Nghe"
                  propDisplay="inline-block"
                  propMinWidth="39px"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propHeight1="27px"
                  prop="      "
                  propMinWidth1="unset"
                  propDisplay1="flex"
                  propAlignSelf1="stretch"
                  propWidth1="0px"
                />
                <Courses
                  rectangle139={rectangle139_2x}
                  propHeight="unset"
                  propWidth="unset"
                  photography="Nghe"
                  propDisplay="inline-block"
                  propMinWidth="39px"
                  propAlignSelf="unset"
                  propFlex="unset"
                  propHeight1="unset"
                  prop="499,000 đ"
                  propMinWidth1="84px"
                  propDisplay1="inline-block"
                  propAlignSelf1="unset"
                  propWidth1="unset"
                />
              </div>
              <div className="course-items">
                <Courses
                  rectangle139={rectangle139_2x}
                  propHeight="40px"
                  propWidth="24px"
                  photography="        "
                  propDisplay="unset"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propHeight1="unset"
                  prop="499,000 đ"
                  propMinWidth1="84px"
                  propDisplay1="inline-block"
                  propAlignSelf1="unset"
                  propWidth1="unset"
                />
                <Courses
                  rectangle139={rectangle139_2x}
                  photography="Nghe"
                  prop="499,000 đ"
                />
              </div>
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
