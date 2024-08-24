import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button2.css";
import icon_2 from "../../Img/Courses/icon2.svg";

const Button2 = ({
  className = "",
  propWidth,
  propFlex,
  propMinWidth,
  placehoder,
}) => {
  const button2Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div className={`button2 ${className}`} style={button2Style}>
      <div className="placehoder">{placehoder}</div>
      <img className="icon16" alt="" src={icon_2} />
    </div>
  );
};

Button2.propTypes = {
  className: PropTypes.string,
  placehoder: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Button2;
