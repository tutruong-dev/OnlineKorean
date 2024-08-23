import Button1 from "./Button1";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ className = "" }) => {
  return (
    <div className={`sidebar ${className}`}>
      <div className="sidebar-content">
        <img
          className="sidebar-content-child"
          loading="lazy"
          alt=""
          src="/rectangle-1391@2x.png"
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

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
