import Meta from "./Meta";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import "./Top1.css";

const Top1 = ({ className = "" }) => {
  return (
    <div className={`top ${className}`}>
      <div className="course-info">
        <div className="cate-instructor">
          <div className="cate">
            <div className="c-bn">Cơ bản</div>
          </div>
          <div className="bi-trn-ly">bởi Trần Ly Ly</div>
        </div>
        <h1 className="kha-hc-s">Khóa học sơ cấp cho người mới bắt đầu</h1>
        <Meta />
        <Sidebar />
      </div>
    </div>
  );
};

Top1.propTypes = {
  className: PropTypes.string,
};

export default Top1;
