import CATEGORY from "./CATEGORY";
import Option1 from "./Option1";
import PropTypes from "prop-types";
import "./SidebarCoursesListing.css";

const SidebarCoursesListing = ({ className = "" }) => {
  return (
    <div className={`sidebar-courses-listing ${className}`}>
      <CATEGORY
        courseCategory="Danh Mục Khóa Học"
        propDisplay="unset"
        propMinWidth="unset"
        component2="/component-2-14.svg"
        component21="/component-2-14.svg"
        component22="/component-2-16.svg"
        component23="/component-2-14.svg"
        home="Nghe"
        home1="Nói"
        home2="Viết"
        home3="Đọc"
        home11="15"
        home12="15"
        home13="15"
        home14="15"
        icon="/icon1.svg"
        icon1="/icon1.svg"
        icon2="/icon1.svg"
        icon3="/icon1.svg"
        showComponent2Icon
        showComponent2Icon1
        showComponent2Icon2
        showComponent2Icon3
        showHome
        showHome1
        showHome2
        showHome3
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propAlignSelf2="stretch"
        propAlignSelf3="stretch"
        propBackgroundColor="unset"
        propBackgroundColor1="unset"
        propBackgroundColor2="unset"
        propBackgroundColor3="unset"
        propPadding="unset"
        propPadding1="unset"
        propPadding2="unset"
        propPadding3="unset"
        propFlex="1"
        propFlex1="1"
        propFlex2="1"
        propFlex3="1"
        propFontFamily="Jost"
        propFontFamily1="Jost"
        propFontFamily2="Jost"
        propFontFamily3="Jost"
        propColor="#555"
        propColor1="#555"
        propColor2="#000"
        propColor3="#555"
        propTextTransform="unset"
        propTextTransform1="unset"
        propTextTransform2="unset"
        propTextTransform3="unset"
        propFontWeight="unset"
        propFontWeight1="unset"
        propFontWeight2="unset"
        propFontWeight3="unset"
        propDisplay1="unset"
        propDisplay2="unset"
        propDisplay3="unset"
        propDisplay4="unset"
        propMinWidth1="unset"
        propMinWidth2="unset"
        propMinWidth3="unset"
        propMinWidth4="unset"
        propColor11="#555"
        propColor12="#555"
        propColor13="#000"
        propColor14="#555"
        propMinWidth11="19px"
        propMinWidth12="19px"
        propMinWidth13="19px"
        propMinWidth14="19px"
        propWidth="unset"
        propWidth1="unset"
        propWidth2="unset"
        propWidth3="unset"
        propTextTransform11="unset"
        propTextTransform12="unset"
        propTextTransform13="unset"
        propTextTransform14="unset"
        propFontWeight11="unset"
        propFontWeight12="unset"
        propFontWeight13="unset"
        propFontWeight14="unset"
        cate4Gap="4px"
        cate4Gap1="4px"
        cate4Gap2="4px"
        cate4Gap3="4px"
        cate4Flex="unset"
        cate4Flex1="unset"
        cate4Flex2="unset"
        cate4Flex3="unset"
        cate4MinWidth="unset"
        cate4MinWidth1="unset"
        cate4MinWidth2="unset"
        cate4MinWidth3="unset"
        homeFontFamily="Jost"
        homeFontFamily1="Jost"
        homeFontFamily2="Jost"
        homeFontFamily3="Jost"
      />
      <CATEGORY
        courseCategory="Người Giảng Dạy"
        propDisplay="unset"
        propMinWidth="unset"
        component2="/component-2-14.svg"
        component21="/component-2-14.svg"
        home="Trần Ly Ly"
        home1="Hà Hiếu"
        home11="15"
        home12="15"
        icon="/icon1.svg"
        icon1="/icon1.svg"
        showComponent2Icon
        showComponent2Icon1
        showHome
        showHome1
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propBackgroundColor="unset"
        propBackgroundColor1="unset"
        propPadding="unset"
        propPadding1="unset"
        propFlex="1"
        propFlex1="1"
        propFontFamily="Jost"
        propFontFamily1="Jost"
        propColor="#555"
        propColor1="#555"
        propTextTransform="unset"
        propTextTransform1="unset"
        propFontWeight="unset"
        propFontWeight1="unset"
        propDisplay1="unset"
        propDisplay2="unset"
        propMinWidth1="unset"
        propMinWidth2="unset"
        propColor11="#555"
        propColor12="#555"
        propMinWidth11="19px"
        propMinWidth12="19px"
        propWidth="unset"
        propWidth1="unset"
        propTextTransform11="unset"
        propTextTransform12="unset"
        propFontWeight11="unset"
        propFontWeight12="unset"
        cate4Gap="4px"
        cate4Gap1="4px"
        cate4Flex="unset"
        cate4Flex1="unset"
        cate4MinWidth="unset"
        cate4MinWidth1="unset"
        homeFontFamily="Jost"
        homeFontFamily1="Jost"
      />
      <CATEGORY
        courseCategory="Giá"
        propDisplay="inline-block"
        propMinWidth="30px"
        component2="/component-2-16.svg"
        component21="/component-2-14.svg"
        component22="/component-2-14.svg"
        home="Tất cả"
        home1="Miễn Phí"
        home2="Trả Phí"
        home11="15"
        home12="15"
        home13="15"
        icon="/icon1.svg"
        icon1="/icon1.svg"
        icon2="/icon1.svg"
        showComponent2Icon
        showComponent2Icon1
        showComponent2Icon2
        showHome
        showHome1
        showHome2
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propAlignSelf2="stretch"
        propBackgroundColor="unset"
        propBackgroundColor1="unset"
        propBackgroundColor2="unset"
        propPadding="unset"
        propPadding1="unset"
        propPadding2="unset"
        propFlex="1"
        propFlex1="1"
        propFlex2="1"
        propFontFamily="Jost"
        propFontFamily1="Jost"
        propFontFamily2="Jost"
        propColor="#000"
        propColor1="#555"
        propColor2="#555"
        propTextTransform="unset"
        propTextTransform1="unset"
        propTextTransform2="unset"
        propFontWeight="unset"
        propFontWeight1="unset"
        propFontWeight2="unset"
        propDisplay1="unset"
        propDisplay2="unset"
        propDisplay3="unset"
        propMinWidth1="unset"
        propMinWidth2="unset"
        propMinWidth3="unset"
        propColor11="#000"
        propColor12="#555"
        propColor13="#555"
        propMinWidth11="19px"
        propMinWidth12="19px"
        propMinWidth13="19px"
        propWidth="unset"
        propWidth1="unset"
        propWidth2="unset"
        propTextTransform11="unset"
        propTextTransform12="unset"
        propTextTransform13="unset"
        propFontWeight11="unset"
        propFontWeight12="unset"
        propFontWeight13="unset"
        cate4Gap="4px"
        cate4Gap1="4px"
        cate4Gap2="4px"
        cate4Flex="unset"
        cate4Flex1="unset"
        cate4Flex2="unset"
        cate4MinWidth="unset"
        cate4MinWidth1="unset"
        cate4MinWidth2="unset"
        homeFontFamily="Jost"
        homeFontFamily1="Jost"
        homeFontFamily2="Jost"
      />
      <div className="nh-gi-parent">
        <div className="nh-gi">Đánh giá</div>
        <div className="star-rating">
          <Option1
            component2="/component-2-14.svg"
            component4="/component-3.svg"
            component5="/component-3.svg"
            component6="/component-3.svg"
            component7="/component-3.svg"
            prop="5.0"
            propWidth="27px"
          />
          <Option1
            component2="/component-2-16.svg"
            component4="/component-3.svg"
            component5="/component-3.svg"
            component6="/component-3.svg"
            component7="/component-7-1.svg"
            prop={`4.0 & Up`}
            propWidth="72px"
          />
          <Option1
            component2="/component-2-14.svg"
            component4="/component-3.svg"
            component5="/component-3.svg"
            component6="/component-7-1.svg"
            component7="/component-7-1.svg"
            prop={`3.0 & Up`}
            propWidth="71px"
          />
          <Option1
            component2="/component-2-14.svg"
            component4="/component-3.svg"
            component5="/component-7-1.svg"
            component6="/component-7-1.svg"
            component7="/component-7-1.svg"
            prop={`2.0 & Up`}
            propWidth="71px"
          />
          <Option1
            component2="/component-2-14.svg"
            component4="/component-7-1.svg"
            component5="/component-7-1.svg"
            component6="/component-7-1.svg"
            component7="/component-7-1.svg"
            prop={`1.0 & Up`}
          />
        </div>
      </div>
      <CATEGORY
        courseCategory="Cấp độ"
        component2="/component-2-14.svg"
        component21="/component-2-14.svg"
        component22="/component-2-16.svg"
        component23="/component-2-14.svg"
        home="Tất Cả Cấp Độ"
        home1="Người Mới Bắt Đầu"
        home2="Trung Cấp"
        home3="Chuyên Gia"
        home11="15"
        home12="15"
        home13="15"
        home14="15"
        icon="/icon1.svg"
        icon1="/icon1.svg"
        icon2="/icon1.svg"
        icon3="/icon1.svg"
        showComponent2Icon
        showComponent2Icon1
        showComponent2Icon2
        showComponent2Icon3
        showHome
        showHome1
        showHome2
        showHome3
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propAlignSelf2="stretch"
        propBackgroundColor="unset"
        propBackgroundColor1="unset"
        propBackgroundColor2="unset"
        propPadding="unset"
        propPadding1="unset"
        propPadding2="unset"
        propFlex="1"
        propFlex1="1"
        propFlex2="1"
        propFontFamily="Jost"
        propFontFamily1="Jost"
        propFontFamily2="Jost"
        propColor="#555"
        propColor1="#555"
        propColor2="#000"
        propTextTransform="unset"
        propTextTransform1="unset"
        propTextTransform2="unset"
        propFontWeight="unset"
        propFontWeight1="unset"
        propFontWeight2="unset"
        propDisplay1="unset"
        propDisplay2="unset"
        propDisplay3="unset"
        propMinWidth1="unset"
        propMinWidth2="unset"
        propMinWidth3="unset"
        propColor11="#555"
        propColor12="#555"
        propColor13="#000"
        propMinWidth11="19px"
        propMinWidth12="19px"
        propMinWidth13="19px"
        propWidth="unset"
        propWidth1="unset"
        propWidth2="unset"
        propTextTransform11="unset"
        propTextTransform12="unset"
        propTextTransform13="unset"
        propFontWeight11="unset"
        propFontWeight12="unset"
        propFontWeight13="unset"
        cate4Gap="4px"
        cate4Gap1="4px"
        cate4Gap2="4px"
        cate4Flex="unset"
        cate4Flex1="unset"
        cate4Flex2="unset"
        cate4MinWidth="unset"
        cate4MinWidth1="unset"
        cate4MinWidth2="unset"
        homeFontFamily="Jost"
        homeFontFamily1="Jost"
        homeFontFamily2="Jost"
      />
    </div>
  );
};

SidebarCoursesListing.propTypes = {
  className: PropTypes.string,
};

export default SidebarCoursesListing;
