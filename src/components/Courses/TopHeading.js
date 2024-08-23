import PropTypes from "prop-types";
import "./TopHeading.css";
import icon_2 from "../../Img/Courses//icon-2.svg";
import icon_3 from "../../Img/Courses//icon-3.svg";
import icon_4 from "../../Img/Courses//icon-4.svg";
const TopHeading = ({ className = "" }) => {
  return (
    <div className={`top-heading ${className}`}>
      <h1 className="tt-c-kha">Tất cả khóa Học</h1>
      <div className="header-actions">
        <div className="search1">
          <div className="tm-kim"> Tìm kiếm</div>
          <img className="icon3" alt="" src={icon_2} />
        </div>
        <img className="icon3" alt="" src={icon_3} />
        <img className="icon3" alt="" src={icon_4} />
      </div>
    </div>
  );
};

TopHeading.propTypes = {
  className: PropTypes.string,
};

export default TopHeading;
