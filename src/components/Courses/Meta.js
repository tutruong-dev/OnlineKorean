import Cate from "./Cate";
import PropTypes from "prop-types";
import "./Meta.css";
import component_21 from "../../Img/Courses/component-21.svg";
import component_2 from "../../Img/Courses/component-2.svg";
import component_2_5 from "../../Img/Courses//component-2-5.svg";
import component_2_4 from "../../Img/Courses//component-2-4.svg";
import component_2_3 from "../../Img/Courses//component-2-3.svg";
const Meta = ({ className = "" }) => {
  return (
    <div className={`meta1 ${className}`}>
      <Cate
        propAlignSelf="unset"
        propBackgroundColor="unset"
        propPadding="unset"
        component2={component_21}
        showComponent2Icon
        home="2 Tuần"
        propFlex="unset"
        propFontFamily="Jost"
        propColor="#9d9d9d"
        propTextTransform="unset"
        propFontWeight="unset"
        propDisplay="inline-block"
        propMinWidth="45px"
        home1="Home"
        showHome={false}
        propColor1="#000"
        propMinWidth1="unset"
        propWidth="50px"
        propTextTransform1="capitalize"
        propFontWeight1="500"
        icon={component_2}
        cate4Gap="8px"
        cate4Flex="unset"
        cate4MinWidth="unset"
        homeFontFamily="Exo"
      />
      <Cate
        propAlignSelf="unset"
        propBackgroundColor="unset"
        propPadding="unset"
        component2={component_21}
        showComponent2Icon
        home="156 Học viên"
        propFlex="unset"
        propFontFamily="Jost"
        propColor="#9d9d9d"
        propTextTransform="unset"
        propFontWeight="unset"
        propDisplay="inline-block"
        propMinWidth="92px"
        home1="Home"
        showHome={false}
        propColor1="#000"
        propMinWidth1="unset"
        propWidth="50px"
        propTextTransform1="capitalize"
        propFontWeight1="500"
        icon={component_2}
        cate4Gap="8px"
        cate4Flex="1"
        cate4MinWidth="75px"
        homeFontFamily="Exo"
      />
      <Cate
        propAlignSelf="unset"
        propBackgroundColor="unset"
        propPadding="unset"
        component2={component_2_3}
        showComponent2Icon
        home="Tất cả trình độ"
        propFlex="unset"
        propFontFamily="Jost"
        propColor="#9d9d9d"
        propTextTransform="unset"
        propFontWeight="unset"
        propDisplay="inline-block"
        propMinWidth="100px"
        home1="Home"
        showHome={false}
        propColor1="#000"
        propMinWidth1="unset"
        propWidth="50px"
        propTextTransform1="capitalize"
        propFontWeight1="500"
        icon={component_2}
        cate4Gap="8px"
        cate4Flex="1"
        cate4MinWidth="81px"
        homeFontFamily="Exo"
      />
      <Cate
        propAlignSelf="unset"
        propBackgroundColor="unset"
        propPadding="unset"
        component2={component_2_4}
        showComponent2Icon
        home="20 Bài học  "
        propFlex="unset"
        propFontFamily="Jost"
        propColor="#9d9d9d"
        propTextTransform="unset"
        propFontWeight="unset"
        propDisplay="inline-block"
        propMinWidth="75px"
        home1="Home"
        showHome={false}
        propColor1="#000"
        propMinWidth1="unset"
        propWidth="50px"
        propTextTransform1="capitalize"
        propFontWeight1="500"
        icon={component_2}
        cate4Gap="8px"
        cate4Flex="unset"
        cate4MinWidth="unset"
        homeFontFamily="Exo"
      />
      <Cate
        propAlignSelf="unset"
        propBackgroundColor="unset"
        propPadding="unset"
        component2={component_2_5}
        showComponent2Icon
        home="3 Bài tập"
        propFlex="unset"
        propFontFamily="Jost"
        propColor="#9d9d9d"
        propTextTransform="unset"
        propFontWeight="unset"
        propDisplay="inline-block"
        propMinWidth="62px"
        home1="Home"
        showHome={false}
        propColor1="#000"
        propMinWidth1="unset"
        propWidth="50px"
        propTextTransform1="capitalize"
        propFontWeight1="500"
        icon={component_2}
        cate4Gap="8px"
        cate4Flex="unset"
        cate4MinWidth="unset"
        homeFontFamily="Exo"
      />
    </div>
  );
};

Meta.propTypes = {
  className: PropTypes.string,
};

export default Meta;
