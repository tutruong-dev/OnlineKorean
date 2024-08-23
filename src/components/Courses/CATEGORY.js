import { useMemo } from "react";
import Cate from "./Cate";
import PropTypes from "prop-types";
import "./CATEGORY.css";

const CATEGORY = ({
  className = "",
  courseCategory,
  propDisplay,
  propMinWidth,
  component2,
  component21,
  component22,
  component23,
  home,
  home1,
  home2,
  home3,
  home11,
  home12,
  home13,
  home14,
  icon,
  icon1,
  icon2,
  icon3,
  showComponent2Icon,
  showComponent2Icon1,
  showComponent2Icon2,
  showComponent2Icon3,
  showHome,
  showHome1,
  showHome2,
  showHome3,
  propAlignSelf,
  propAlignSelf1,
  propAlignSelf2,
  propAlignSelf3,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  propPadding,
  propPadding1,
  propPadding2,
  propPadding3,
  propFlex,
  propFlex1,
  propFlex2,
  propFlex3,
  propFontFamily,
  propFontFamily1,
  propFontFamily2,
  propFontFamily3,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propTextTransform,
  propTextTransform1,
  propTextTransform2,
  propTextTransform3,
  propFontWeight,
  propFontWeight1,
  propFontWeight2,
  propFontWeight3,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
  propColor11,
  propColor12,
  propColor13,
  propColor14,
  propMinWidth11,
  propMinWidth12,
  propMinWidth13,
  propMinWidth14,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propTextTransform11,
  propTextTransform12,
  propTextTransform13,
  propTextTransform14,
  propFontWeight11,
  propFontWeight12,
  propFontWeight13,
  propFontWeight14,
  cate4Gap,
  cate4Gap1,
  cate4Gap2,
  cate4Gap3,
  cate4Flex,
  cate4Flex1,
  cate4Flex2,
  cate4Flex3,
  cate4MinWidth,
  cate4MinWidth1,
  cate4MinWidth2,
  cate4MinWidth3,
  homeFontFamily,
  homeFontFamily1,
  homeFontFamily2,
  homeFontFamily3,
}) => {
  const courseCategoryStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`category ${className}`}>
      <div className="course-category" style={courseCategoryStyle}>
        {courseCategory}
      </div>
      <div className="cate-1-parent">
        <Cate
          propAlignSelf={propAlignSelf}
          propBackgroundColor={propBackgroundColor}
          propPadding={propPadding}
          component2={component2}
          showComponent2Icon={showComponent2Icon}
          home={home}
          propFlex={propFlex}
          propFontFamily={propFontFamily}
          propColor={propColor}
          propTextTransform={propTextTransform}
          propFontWeight={propFontWeight}
          propDisplay={propDisplay1}
          propMinWidth={propMinWidth1}
          home1={home11}
          showHome={showHome}
          propColor1={propColor11}
          propMinWidth1={propMinWidth11}
          propWidth={propWidth}
          propTextTransform1={propTextTransform11}
          propFontWeight1={propFontWeight11}
          icon={icon}
          cate4Gap={cate4Gap}
          cate4Flex={cate4Flex}
          cate4MinWidth={cate4MinWidth}
          homeFontFamily={homeFontFamily}
        />
        <Cate
          propAlignSelf={propAlignSelf1}
          propBackgroundColor={propBackgroundColor1}
          propPadding={propPadding1}
          component2={component21}
          showComponent2Icon={showComponent2Icon1}
          home={home1}
          propFlex={propFlex1}
          propFontFamily={propFontFamily1}
          propColor={propColor1}
          propTextTransform={propTextTransform1}
          propFontWeight={propFontWeight1}
          propDisplay={propDisplay2}
          propMinWidth={propMinWidth2}
          home1={home12}
          showHome={showHome1}
          propColor1={propColor12}
          propMinWidth1={propMinWidth12}
          propWidth={propWidth1}
          propTextTransform1={propTextTransform12}
          propFontWeight1={propFontWeight12}
          icon={icon1}
          cate4Gap={cate4Gap1}
          cate4Flex={cate4Flex1}
          cate4MinWidth={cate4MinWidth1}
          homeFontFamily={homeFontFamily1}
        />
        <Cate
          propAlignSelf={propAlignSelf2}
          propBackgroundColor={propBackgroundColor2}
          propPadding={propPadding2}
          component2={component22}
          showComponent2Icon={showComponent2Icon2}
          home={home2}
          propFlex={propFlex2}
          propFontFamily={propFontFamily2}
          propColor={propColor2}
          propTextTransform={propTextTransform2}
          propFontWeight={propFontWeight2}
          propDisplay={propDisplay3}
          propMinWidth={propMinWidth3}
          home1={home13}
          showHome={showHome2}
          propColor1={propColor13}
          propMinWidth1={propMinWidth13}
          propWidth={propWidth2}
          propTextTransform1={propTextTransform13}
          propFontWeight1={propFontWeight13}
          icon={icon2}
          cate4Gap={cate4Gap2}
          cate4Flex={cate4Flex2}
          cate4MinWidth={cate4MinWidth2}
          homeFontFamily={homeFontFamily2}
        />
        <Cate
          propAlignSelf={propAlignSelf3}
          propBackgroundColor={propBackgroundColor3}
          propPadding={propPadding3}
          component2={component23}
          showComponent2Icon={showComponent2Icon3}
          home={home3}
          propFlex={propFlex3}
          propFontFamily={propFontFamily3}
          propColor={propColor3}
          propTextTransform={propTextTransform3}
          propFontWeight={propFontWeight3}
          propDisplay={propDisplay4}
          propMinWidth={propMinWidth4}
          home1={home14}
          showHome={showHome3}
          propColor1={propColor14}
          propMinWidth1={propMinWidth14}
          propWidth={propWidth3}
          propTextTransform1={propTextTransform14}
          propFontWeight1={propFontWeight14}
          icon={icon3}
          cate4Gap={cate4Gap3}
          cate4Flex={cate4Flex3}
          cate4MinWidth={cate4MinWidth3}
          homeFontFamily={homeFontFamily3}
        />
        <div className="cate-5">
          <img className="component-2-icon7" alt="" src="/component-2-16.svg" />
          <div className="home6">Academy</div>
          <div className="home7">15</div>
          <img className="icon9" alt="" src="/icon1.svg" />
        </div>
        <div className="cate-6">
          <img className="component-2-icon7" alt="" src="/component-2-14.svg" />
          <div className="home6">Single family home</div>
          <div className="home7">15</div>
          <img className="icon9" alt="" src="/icon1.svg" />
        </div>
        <div className="cate-6">
          <img className="component-2-icon7" alt="" src="/component-2-14.svg" />
          <div className="home6">Studio</div>
          <div className="home7">15</div>
          <img className="icon9" alt="" src="/icon1.svg" />
        </div>
        <div className="cate-6">
          <img className="component-2-icon7" alt="" src="/component-2-14.svg" />
          <div className="home6">University</div>
          <div className="home7">15</div>
          <img className="icon9" alt="" src="/icon1.svg" />
        </div>
      </div>
    </div>
  );
};

CATEGORY.propTypes = {
  className: PropTypes.string,
  courseCategory: PropTypes.string,
  component2: PropTypes.string,
  component21: PropTypes.string,
  component22: PropTypes.string,
  component23: PropTypes.string,
  home: PropTypes.string,
  home1: PropTypes.string,
  home2: PropTypes.string,
  home3: PropTypes.string,
  home11: PropTypes.string,
  home12: PropTypes.string,
  home13: PropTypes.string,
  home14: PropTypes.string,
  icon: PropTypes.string,
  icon1: PropTypes.string,
  icon2: PropTypes.string,
  icon3: PropTypes.string,
  showComponent2Icon: PropTypes.bool,
  showComponent2Icon1: PropTypes.bool,
  showComponent2Icon2: PropTypes.bool,
  showComponent2Icon3: PropTypes.bool,
  showHome: PropTypes.bool,
  showHome1: PropTypes.bool,
  showHome2: PropTypes.bool,
  showHome3: PropTypes.bool,
  propAlignSelf: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propAlignSelf2: PropTypes.string,
  propAlignSelf3: PropTypes.string,
  propBackgroundColor: PropTypes.string,
  propBackgroundColor1: PropTypes.string,
  propBackgroundColor2: PropTypes.string,
  propBackgroundColor3: PropTypes.string,
  propPadding: PropTypes.string,
  propPadding1: PropTypes.string,
  propPadding2: PropTypes.string,
  propPadding3: PropTypes.string,
  propFlex: PropTypes.string,
  propFlex1: PropTypes.string,
  propFlex2: PropTypes.string,
  propFlex3: PropTypes.string,
  propFontFamily: PropTypes.string,
  propFontFamily1: PropTypes.string,
  propFontFamily2: PropTypes.string,
  propFontFamily3: PropTypes.string,
  propColor: PropTypes.string,
  propColor1: PropTypes.string,
  propColor2: PropTypes.string,
  propColor3: PropTypes.string,
  propTextTransform: PropTypes.string,
  propTextTransform1: PropTypes.string,
  propTextTransform2: PropTypes.string,
  propTextTransform3: PropTypes.string,
  propFontWeight: PropTypes.string,
  propFontWeight1: PropTypes.string,
  propFontWeight2: PropTypes.string,
  propFontWeight3: PropTypes.string,
  propDisplay1: PropTypes.string,
  propDisplay2: PropTypes.string,
  propDisplay3: PropTypes.string,
  propDisplay4: PropTypes.string,
  propMinWidth1: PropTypes.string,
  propMinWidth2: PropTypes.string,
  propMinWidth3: PropTypes.string,
  propMinWidth4: PropTypes.string,
  propColor11: PropTypes.string,
  propColor12: PropTypes.string,
  propColor13: PropTypes.string,
  propColor14: PropTypes.string,
  propMinWidth11: PropTypes.string,
  propMinWidth12: PropTypes.string,
  propMinWidth13: PropTypes.string,
  propMinWidth14: PropTypes.string,
  propWidth: PropTypes.string,
  propWidth1: PropTypes.string,
  propWidth2: PropTypes.string,
  propWidth3: PropTypes.string,
  propTextTransform11: PropTypes.string,
  propTextTransform12: PropTypes.string,
  propTextTransform13: PropTypes.string,
  propTextTransform14: PropTypes.string,
  propFontWeight11: PropTypes.string,
  propFontWeight12: PropTypes.string,
  propFontWeight13: PropTypes.string,
  propFontWeight14: PropTypes.string,
  cate4Gap: PropTypes.string,
  cate4Gap1: PropTypes.string,
  cate4Gap2: PropTypes.string,
  cate4Gap3: PropTypes.string,
  cate4Flex: PropTypes.string,
  cate4Flex1: PropTypes.string,
  cate4Flex2: PropTypes.string,
  cate4Flex3: PropTypes.string,
  cate4MinWidth: PropTypes.string,
  cate4MinWidth1: PropTypes.string,
  cate4MinWidth2: PropTypes.string,
  cate4MinWidth3: PropTypes.string,
  homeFontFamily: PropTypes.string,
  homeFontFamily1: PropTypes.string,
  homeFontFamily2: PropTypes.string,
  homeFontFamily3: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CATEGORY;
