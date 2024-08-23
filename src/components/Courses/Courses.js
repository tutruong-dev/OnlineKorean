import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Courses.css";
import component_2 from "../../Img/Courses/component-2.svg";

const Courses = ({
  className = "",
  rectangle139,
  propHeight,
  propWidth,
  photography,
  propDisplay,
  propMinWidth,
  propAlignSelf,
  propFlex,
  propHeight1,
  prop,
  propMinWidth1,
  propDisplay1,
  propAlignSelf1,
  propWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const photographyStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propDisplay, propMinWidth, propAlignSelf, propFlex]);

  const priceStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay1,
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propMinWidth1, propDisplay1, propAlignSelf1, propWidth1]);

  return (
    <div className={`courses1 ${className}`}>
      <div className="image">
        <img className="image-child" alt="" src={rectangle139} />
        <div className="photography-wrapper" style={frameDivStyle}>
          <div className="photography" style={photographyStyle}>
            {photography}
          </div>
        </div>
      </div>
      <div className="content1">
        <div className="by-determined-poitras-parent">
          <div className="by-determined-poitras">bởi Trần Ly Ly</div>
          <div className="create-an-lms">Nâng cao kỹ năng Nghe ở đây</div>
        </div>
        <div className="meta">
          <div className="times">
            <div className="component-2-wrapper">
              <img className="component-2-icon2" alt="" src={component_2} />
            </div>
            <div className="home">2 Tuần</div>
            <div className="home1">Home</div>
            <img className="icon6" alt="" src={component_2} />
          </div>
          <div className="times">
            <div className="component-2-wrapper">
              <img className="component-2-icon2" alt="" src={component_2} />
            </div>
            <div className="home2">156 Học viên</div>
            <div className="home1">Home</div>
            <img className="icon6" alt="" src={component_2} />
          </div>
        </div>
        <div className="line" />
        <div className="price-parent">
          <div className="times" style={priceStyle}>
            <div className="div" style={divStyle}>
              {prop}
            </div>
            <div className="free">199,000 đ</div>
          </div>
          <div className="view-more">{`Xem Thêm   `}</div>
        </div>
      </div>
    </div>
  );
};

Courses.propTypes = {
  className: PropTypes.string,
  rectangle139: PropTypes.string,
  photography: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDisplay1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default Courses;
