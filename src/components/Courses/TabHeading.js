import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./TabHeading.css";

const TabHeading = ({ className = "" }) => {
  return (
    <div className={`tab-heading ${className}`}>
      <div className="tab-header-items">
        <div className="tng-quan">Tổng Quan</div>
      </div>
      <div className="line1" />
      <FrameComponent1
        propBorderRadius="unset"
        curriculum="Người giảng Dạy"
        propDisplay="unset"
        propMinWidth="unset"
      />
      <div className="line1" />
      <FrameComponent1
        propBorderRadius="unset"
        curriculum="Hướng dẫn"
        propDisplay="inline-block"
        propMinWidth="103px"
      />
      <div className="line1" />
      <FrameComponent1
        propBorderRadius="unset"
        curriculum="Thắc mắc"
        propDisplay="inline-block"
        propMinWidth="88px"
      />
      <div className="line1" />
      <FrameComponent1 curriculum="Đánh Giá" />
    </div>
  );
};

TabHeading.propTypes = {
  className: PropTypes.string,
};

export default TabHeading;
