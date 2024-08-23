import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Option1.css";

const Option1 = ({
  className = "",
  component2,
  component4,
  component5,
  component6,
  component7,
  prop,
  propWidth,
}) => {
  const div2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`option-5 ${className}`}>
      <img className="component-2-icon5" alt="" src={component2} />
      <div className="star">
        <img className="component-3-icon" alt="" src="/component-3.svg" />
        <img className="component-3-icon" alt="" src={component4} />
        <img className="component-3-icon" alt="" src={component5} />
        <img className="component-3-icon" alt="" src={component6} />
        <img className="component-3-icon" alt="" src={component7} />
      </div>
      <div className="text2">
        <div className="div2" style={div2Style}>
          {prop}
        </div>
        <div className="div3">(1,025)</div>
      </div>
    </div>
  );
};

Option1.propTypes = {
  className: PropTypes.string,
  component2: PropTypes.string,
  component4: PropTypes.string,
  component5: PropTypes.string,
  component6: PropTypes.string,
  component7: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default Option1;
