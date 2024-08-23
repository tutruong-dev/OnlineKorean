import Button1 from "./Button1";
import PropTypes from "prop-types";
import "./Sidebar1.css";
import rectangle_1391_2x from "../../Img/Courses/rectangle-1391@2x.png";
const Sidebar1 = ({ className = "" }) => {
  return (
    <div className={`sidebar ${className}`}>
      <div className="sidebar-content">
        <img
          className="sidebar-content-child"
          loading="lazy"
          alt=""
          src={rectangle_1391_2x}
        />
        <div className="price-button">
          <div className="price1">
            <div className="price-label">499,000 đ</div>
            <div className="price-value">199,000 đ</div>
          </div>
          <Button1
            postsComment="Đăng Ký Ngay"
            propDisplay="inline-block"
            propMinWidth="116px"
          />
        </div>
      </div>
    </div>
  );
};

Sidebar1.propTypes = {
  className: PropTypes.string,
};

export default Sidebar1;
