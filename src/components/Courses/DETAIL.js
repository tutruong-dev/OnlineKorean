import Top1 from "./Top1";
import TabHeading from "./TabHeading";
import Button2 from "./Button2";
import Cate from "./Cate";
import Button1 from "./Button1";
import PropTypes from "prop-types";
import "./DETAIL.css";
import component2_14 from "../../Img/Courses/component-2-14.svg";
import icon_1 from "../../Img/Courses/icon1.svg";

const DETAIL = ({ className = "" }) => {
  return (
    <div className={`detail ${className}`}>
      <Top1 />
      <div className="detail1">
        <div className="tab">
          <TabHeading />
          <div className="tab-content">
            <div className="kha-hc-ting-container">
              <p className="kha-hc-ting">
                Khóa học tiếng Hàn sơ cấp là chương trình học dành cho những
                người mới bắt đầu làm quen với tiếng Hàn. Khóa học sẽ giúp bạn:
              </p>
              <ul className="nm-vng-bng-ch-ci-hangul">
                <li className="nm-vng-bng">
                  Nắm vững bảng chữ cái Hangul: Tìm hiểu về cấu tạo, cách phát
                  âm và cách viết các chữ cái Hàn Quốc.
                </li>
                <li className="nm-vng-bng">
                  Học từ vựng cơ bản: Làm quen với những từ vựng thường dùng
                  trong cuộc sống hàng ngày như chào hỏi, giới thiệu bản thân,
                  gia đình, sở thích...
                </li>
                <li className="nm-vng-bng">
                  Học ngữ pháp cơ bản: Tìm hiểu các cấu trúc ngữ pháp đơn giản
                  để tạo thành câu.
                </li>
                <li>
                  Rèn luyện các kỹ năng nghe, nói, đọc, viết: Thông qua các bài
                  tập thực hành, bạn sẽ được rèn luyện để có thể giao tiếp cơ
                  bản bằng tiếng Hàn.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="leave-a-comment">
          <div className="top-heading1">
            <div className="li-bnh-lun">Để lại bình luận cho chúng tôi</div>
            <div className="a-ch-email">
              Địa chỉ email của bạn sẽ không được công khai. Dấu * sẽ là những
              phần không được để trống
            </div>
          </div>
          <div className="form">
            <Button2
              propWidth="unset"
              propFlex="1"
              propMinWidth="394px"
              placehoder="Tên*"
            />
            <Button2
              propWidth="unset"
              propFlex="1"
              propMinWidth="394px"
              placehoder="Email*"
            />
            <Button2 placehoder="Bình luận" />
            <Cate
              propAlignSelf="unset"
              propBackgroundColor="unset"
              propPadding="0px 460px 0px 0px"
              component2={component2_14}
              showComponent2Icon
              home="Lưu thông tin cho những lần bình luận tiếp theo"
              propFlex="unset"
              propFontFamily="Jost"
              propColor="#555"
              propTextTransform="unset"
              propFontWeight="unset"
              propDisplay="unset"
              propMinWidth="unset"
              home1="15"
              showHome={false}
              propColor1="#555"
              propMinWidth1="unset"
              propWidth="19px"
              propTextTransform1="unset"
              propFontWeight1="unset"
              icon={icon_1}
              cate4Gap="4px"
              cate4Flex="unset"
              cate4MinWidth="unset"
              homeFontFamily="Jost"
            />
            <Button1 postsComment="Đăng bình luận" />
          </div>
        </div>
      </div>
    </div>
  );
};

DETAIL.propTypes = {
  className: PropTypes.string,
};

export default DETAIL;
