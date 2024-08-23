import Button from "./Button";
import PropTypes from "prop-types";
import "./ButtonGroup.css";

const ButtonGroup = ({
  className = "",
  label,
  label1,
  hasIconEnd,
  hasIconEnd1,
  hasIconStart,
  hasIconStart1,
  propFlex,
  propFlex1,
  propBackgroundColor,
  propBackgroundColor1,
  propBorder,
  propBorder1,
  propColor,
  propColor1,
  propMinWidth,
  propMinWidth1,
  buttonPadding,
  buttonPadding1,
}) => {
  return (
    <div className={`button-group ${className}`}>
      <Button
        hasIconEnd={hasIconEnd}
        hasIconStart={hasIconStart}
        label={label}
        propFlex={propFlex}
        propBackgroundColor={propBackgroundColor}
        propBorder={propBorder}
        star="/star.svg"
        propColor={propColor}
        propMinWidth={propMinWidth}
        x="/x.svg"
        buttonPadding={buttonPadding}
      />
      <Button
        hasIconEnd={hasIconEnd1}
        hasIconStart={hasIconStart1}
        label={label1}
        propFlex={propFlex1}
        propBackgroundColor={propBackgroundColor1}
        propBorder={propBorder1}
        star="/star1.svg"
        propColor={propColor1}
        propMinWidth={propMinWidth1}
        x="/x1.svg"
        buttonPadding={buttonPadding1}
      />
    </div>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconEnd1: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  hasIconStart1: PropTypes.bool,
  propFlex: PropTypes.string,
  propFlex1: PropTypes.string,
  propBackgroundColor: PropTypes.string,
  propBackgroundColor1: PropTypes.string,
  propBorder: PropTypes.string,
  propBorder1: PropTypes.string,
  propColor: PropTypes.string,
  propColor1: PropTypes.string,
  propMinWidth: PropTypes.string,
  propMinWidth1: PropTypes.string,
  buttonPadding: PropTypes.string,
  buttonPadding1: PropTypes.string,
};

export default ButtonGroup;
