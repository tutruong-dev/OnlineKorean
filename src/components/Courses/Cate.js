import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Cate.css";

const Cate = ({
  className = "",
  propAlignSelf,
  propBackgroundColor,
  propPadding,
  component2,
  showComponent2Icon,
  home,
  propFlex,
  propFontFamily,
  propColor,
  propTextTransform,
  propFontWeight,
  propDisplay,
  propMinWidth,
  home1,
  showHome,
  propColor1,
  propMinWidth1,
  propWidth,
  propTextTransform1,
  propFontWeight1,
  icon,
  cate4Gap,
  cate4Flex,
  cate4MinWidth,
  homeFontFamily,
}) => {
  const cate4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      gap: cate4Gap,
      flex: cate4Flex,
      minWidth: cate4MinWidth,
    };
  }, [
    propAlignSelf,
    propBackgroundColor,
    propPadding,
    cate4Gap,
    cate4Flex,
    cate4MinWidth,
  ]);

  const homeStyle = useMemo(() => {
    return {
      flex: propFlex,
      fontFamily: propFontFamily,
      color: propColor,
      textTransform: propTextTransform,
      fontWeight: propFontWeight,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [
    propFlex,
    propFontFamily,
    propColor,
    propTextTransform,
    propFontWeight,
    propDisplay,
    propMinWidth,
  ]);

  const home1Style = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth1,
      width: propWidth,
      textTransform: propTextTransform1,
      fontWeight: propFontWeight1,
      fontFamily: homeFontFamily,
    };
  }, [
    propColor1,
    propMinWidth1,
    propWidth,
    propTextTransform1,
    propFontWeight1,
    homeFontFamily,
  ]);

  return (
    <div className={`cate-4 ${className}`} style={cate4Style}>
      {showComponent2Icon && (
        <img className="component-2-icon6" alt="" src={component2} />
      )}
      <div className="home4" style={homeStyle}>
        {home}
      </div>
      {showHome && (
        <div className="home5" style={home1Style}>
          {home1}
        </div>
      )}
      <img className="icon8" alt="" src={icon} />
    </div>
  );
};

Cate.propTypes = {
  className: PropTypes.string,
  component2: PropTypes.string,
  showComponent2Icon: PropTypes.bool,
  home: PropTypes.string,
  home1: PropTypes.string,
  showHome: PropTypes.bool,
  icon: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propFontFamily: PropTypes.any,
  propColor: PropTypes.any,
  propTextTransform: PropTypes.any,
  propFontWeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propColor1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth: PropTypes.any,
  propTextTransform1: PropTypes.any,
  propFontWeight1: PropTypes.any,
  cate4Gap: PropTypes.any,
  cate4Flex: PropTypes.any,
  cate4MinWidth: PropTypes.any,
  homeFontFamily: PropTypes.any,
};

export default Cate;
