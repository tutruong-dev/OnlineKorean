import PropTypes from "prop-types";
import "./Breakcrumb.css";
// import icon2 from 'src/Img/Courses/icon-2.svg';

const Breakcrumb = ({ className = "" }) => {
  return (
    <div className={`breakcrumb1 ${className}`}>
      <div className="text1">
        <div className="homepage1">Trang Chủ</div>
        <div className="icon-wrapper">
          <img className="icon2" alt="" src="/Img/Courses/icon-1.svg" />
        </div>
        <div className="course1">Khóa Học</div>
        <img
          className="component-2-icon1"
          alt=""
          src="/Img/Courses/icon-1.svg"
        />
        <div className="the-ultimate-guide1">
          The Ultimate Guide To The BestWordPress LMS Plugin
        </div>
      </div>
    </div>
  );
};

Breakcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breakcrumb;
