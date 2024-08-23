import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  propBorderRadius,
  curriculum,
  propDisplay,
  propMinWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const curriculumStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`curriculum-wrapper ${className}`} style={frameDiv1Style}>
      <div className="curriculum" style={curriculumStyle}>
        {curriculum}
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  curriculum: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
