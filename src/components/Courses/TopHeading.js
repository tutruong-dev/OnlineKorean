import PropTypes from "prop-types";
import "./TopHeading.css";

const TopHeading = ({ className = "" }) => {
  return (
    <div className={`top-heading ${className}`}>
      <h1 className="tt-c-kha">Tất cả khóa Học</h1>
      <div className="header-actions">
        <div className="search1">
          <div className="tm-kim"> Tìm kiếm</div>
          <img className="icon3" alt="" src="/icon-2.svg" />
        </div>
        <img className="icon3" alt="" src="/icon-3.svg" />
        <img className="icon3" alt="" src="/icon-4.svg" />
      </div>
    </div>
  );
};

TopHeading.propTypes = {
  className: PropTypes.string,
};

export default TopHeading;
