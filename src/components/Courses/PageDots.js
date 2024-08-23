import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PageDots.css";

const PageDots = ({
  className = "",
  propFlex,
  propBorder,
  propBackgroundColor,
  prop,
  div,
  propWidth,
  propColor,
  propMinWidth,
  component2,
  showComponent2Icon,
}) => {
  const pageDotsStyle = useMemo(() => {
    return {
      flex: propFlex,
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propFlex, propBorder, propBackgroundColor]);

  const div1Style = useMemo(() => {
    return {
      width: propWidth,
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propWidth, propColor, propMinWidth]);

  return (
    <div className={`page-dots ${className}`} style={pageDotsStyle}>
      {!div && (
        <div className="div1" style={div1Style}>
          {prop}
        </div>
      )}
      {showComponent2Icon && (
        <img className="component-2-icon4" alt="" src={component2} />
      )}
    </div>
  );
};

PageDots.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  div: PropTypes.bool,
  component2: PropTypes.string,
  showComponent2Icon: PropTypes.bool,

  /** Style props */
  propFlex: PropTypes.any,
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propWidth: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default PageDots;
