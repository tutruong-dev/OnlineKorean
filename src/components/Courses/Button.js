import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  className = "",
  hasIconEnd = false,
  hasIconStart = false,
  label = "Đăng ký",
  propFlex,
  propBackgroundColor,
  propBorder,
  star,
  propColor,
  propMinWidth,
  x,
  buttonPadding,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      flex: propFlex,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      padding: buttonPadding,
    };
  }, [propFlex, propBackgroundColor, propBorder, buttonPadding]);

  const button1Style = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div className={`button ${className}`} style={buttonStyle}>
      {hasIconStart && <img className="star-icon" alt="" src={star} />}
      <div className="button1" style={button1Style}>
        {label}
      </div>
      {hasIconEnd && <img className="star-icon" alt="" src={x} />}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  label: PropTypes.string,
  star: PropTypes.string,
  x: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  buttonPadding: PropTypes.any,
};

export default Button;
