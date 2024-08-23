import Breakcrumb from '../components/Courses/Breakcrumb'; // Đảm bảo thư mục và tên đúng
import TopHeading from '../components/Courses/TopHeading'; // Đảm bảo thư mục và tên đúng
import Courses from '../components/Courses/Courses'; // Đảm bảo thư mục và tên đúng
import Pagination from '../components/Courses/Pagination'; // Đảm bảo thư mục và tên đúng
import SidebarCoursesListing from '../components/Courses/SidebarCoursesListing'; // Đảm bảo thư mục và tên đúng
import Header from '../components/Header'; // Đảm bảo thư mục và tên đúng
import Footer from '../components/Footer'; // Đảm bảo thư mục và tên đúng
import DETAIL from '../components/DETAIL'; // Đảm bảo thư mục và tên đúng


const CourseSingle = () => {
  return (
    <div className="course-single">
      <main className="course-details">
        <Header
          headerTop="0"
          headerPosition="sticky"
          menuRowGap="unset"
          component23="./Img/courses/component-2.svg"
          component23="./Img/courses/component-2.svg"
          component23="./Img/courses/component-2.svg"
          component23="./Img/courses/component-2.svg"
          home3="Trang Chủ"
          home3="Khóa Học"
          home3="Test đầu vào"
          home3="Blog"
          home3="FAQS"
          home3="Liên Hệ chúng tôi"
          home14="Home"
          home14="Home"
          home14="Home"
          home14="Home"
          home14="Home"
          home14="Home"
          icon3="./Img/courses/component-2.svg"
          icon3="./Img/courses/component-2.svg"
          icon3="./Img/courses/component-2.svg"
          icon3="./Img/courses/component-2.svg"
          showComponent2Icon3={false}
          showComponent2Icon3={false}
          showComponent2Icon3={false}
          showComponent2Icon3={false}
          showComponent2Icon3={false}
          showComponent2Icon3={false}
          showHome3={false}
          showHome3={false}
          showHome3={false}
          showHome3={false}
          showHome3={false}
          showHome3={false}
          propAlignSelf3="unset"
          propAlignSelf3="unset"
          propAlignSelf3="unset"
          propAlignSelf3="unset"
          propAlignSelf3="unset"
          propAlignSelf3="unset"
          propBackgroundColor3="#fff"
          propBackgroundColor3="#f5f5f5"
          propBackgroundColor3="unset"
          propBackgroundColor3="unset"
          propBackgroundColor3="unset"
          propBackgroundColor3="unset"
          propPadding3="26.5px 20px"
          propPadding3="26.5px 20px"
          propPadding3="26.5px 19px"
          propPadding3="26.5px 20px"
          propPadding3="26.5px 20px"
          propPadding3="26.5px 20px"
          propFlex3="unset"
          propFlex3="unset"
          propFlex3="unset"
          propFlex3="unset"
          propFlex3="unset"
          propFlex3="unset"
          propFontFamily3="Exo"
          propFontFamily3="Exo"
          propFontFamily3="Exo"
          propFontFamily3="Exo"
          propFontFamily3="Exo"
          propFontFamily3="Exo"
          propColor3="#2e71b8"
          propColor3="#ff782d"
          propColor3="#4a90e2"
          propColor3="#4a90e2"
          propColor3="#4a90e2"
          propColor3="#4a90e2"
          propTextTransform3="capitalize"
          propTextTransform3="capitalize"
          propTextTransform3="capitalize"
          propTextTransform3="capitalize"
          propTextTransform3="capitalize"
          propTextTransform3="capitalize"
          propFontWeight3="600"
          propFontWeight3="600"
          propFontWeight3="600"
          propFontWeight3="600"
          propFontWeight3="600"
          propFontWeight3="600"
          propDisplay4="inline-block"
          propDisplay4="inline-block"
          propDisplay4="inline-block"
          propDisplay4="inline-block"
          propDisplay4="inline-block"
          propDisplay4="unset"
          propMinWidth4="76px"
          propMinWidth4="70px"
          propMinWidth4="98px"
          propMinWidth4="34px"
          propMinWidth4="40px"
          propMinWidth4="unset"
          propColor14="#000"
          propColor14="#000"
          propColor14="#000"
          propColor14="#000"
          propColor14="#000"
          propColor14="#000"
          propMinWidth14="unset"
          propMinWidth14="unset"
          propMinWidth14="unset"
          propMinWidth14="unset"
          propMinWidth14="unset"
          propMinWidth14="unset"
          propWidth3="48px"
          propWidth3="48px"
          propWidth3="48px"
          propWidth3="48px"
          propWidth3="48px"
          propWidth3="48px"
          propTextTransform14="capitalize"
          propTextTransform14="capitalize"
          propTextTransform14="capitalize"
          propTextTransform14="capitalize"
          propTextTransform14="capitalize"
          propTextTransform14="capitalize"
          propFontWeight14="500"
          propFontWeight14="500"
          propFontWeight14="500"
          propFontWeight14="500"
          propFontWeight14="500"
          propFontWeight14="500"
          cate4Gap3="4px"
          cate4Gap3="4px"
          cate4Gap3="4px"
          cate4Gap3="4px"
          cate4Gap3="4px"
          cate4Gap3="4px"
          cate4Flex3="unset"
          cate4Flex3="unset"
          cate4Flex3="unset"
          cate4Flex3="unset"
          cate4Flex3="unset"
          cate4Flex3="unset"
          cate4MinWidth3="unset"
          cate4MinWidth3="unset"
          cate4MinWidth3="unset"
          cate4MinWidth3="unset"
          cate4MinWidth3="unset"
          cate4MinWidth3="unset"
          homeFontFamily3="Jost"
          homeFontFamily3="Jost"
          homeFontFamily3="Jost"
          homeFontFamily3="Jost"
          homeFontFamily3="Jost"
          homeFontFamily3="Jost"
        />
        <section className="content">
          <div className="breakcrumb">
            <div className="text">
              <div className="homepage">Trang Chủ</div>
              <img className="icon" alt="" src="./Img/courses/icon-1.svg" />
              <div className="course">Khóa Học</div>
              <img className="icon" loading="lazy" alt="" src="./Img/courses/icon-1.svg" />
              <div className="the-ultimate-guide">
                Khóa học sơ cấp cho người mới bắt đầu
              </div>
            </div>
          </div>
          <DETAIL />
        </section>
        <Footer footerFlexWrap="unset" />
      </main>
    </div>
  );
};

export default CourseSingle;
