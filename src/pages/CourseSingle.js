import TopHeading from "../components/Courses/TopHeading";
import DETAIL from "../components/Courses/DETAIL";
import "./CourseSingle.css";
import "../../src/components/Courses/global.css";
import component_2 from "../Img/Courses/component-2.svg";
import icon_1 from "../Img/Courses/icon-1.svg";
const CourseSingle = () => {
  return (
    <div className="course-single">
      <main className="course-details">
        <TopHeading
          headerTop="0"
          headerPosition="sticky"
          menuRowGap="unset"
          component23={component_2}
          home3="Liên Hệ chúng tôi"
          home14="Home"
          icon3={component_2}
          showComponent2Icon3={false}
          showHome3={false}
          propAlignSelf3="unset"
          propBackgroundColor3="#fff"
          propPadding3="26.5px 20px"
          propFlex3="unset"
          propFontFamily3="Exo"
          propColor3="#4a90e2"
          propTextTransform3="capitalize"
          propFontWeight3="600"
          propDisplay4="inline-block"
          propMinWidth4="70px"
          propColor14="#000"
          propMinWidth14="unset"
          propWidth3="48px"
          propTextTransform14="capitalize"
          propFontWeight14="500"
          cate4Gap3="4px"
          cate4Flex3="unset"
          cate4MinWidth3="unset"
          homeFontFamily3="Jost"
        />
        <section className="content">
          <div className="breakcrumb">
            <div className="text">
              <div className="homepage">Trang Chủ</div>
              <img className="icon" alt="" src={icon_1} />
              <div className="course">Khóa Học</div>
              <img className="icon" loading="lazy" alt="" src={icon_1} />
              <div className="the-ultimate-guide">
                Khóa học sơ cấp cho người mới bắt đầu
              </div>
            </div>
          </div>
          <DETAIL />
        </section>
      </main>
    </div>
  );
};

export default CourseSingle;
