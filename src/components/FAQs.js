import React from "react";
import { Link } from 'react-router-dom';
import '../index.css';
import FAQs from '../Img/FAOsimg.png'
function FAQ() {
    return (
        <div className="FAOs-container">
            <div className="body">
                <div className="linkpath">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/Home-Page">Trang Chủ</Link></li>
                            <p className="breadcrumb-item active" aria-current="page">FAQs</p>
                        </ol>
                    </nav>
                </div>
                <div className="FAOs-content">
                    <h1>Giải Đáp Thắc Mắc Thường Gặp</h1>
                    <div className="FAOs-content-main">
                        <div className="FAOs-content-main-type1">
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Học qua nền tảng nào?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Tùy vào khóa học mà chúng ta sẽ học qua từng nền tảng theo online hay offline</p>
                                </div>
                            </div>
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Có diễn đàn hoặc nhóm học tập để trao đổi không?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Hoàn toàn có ạ! Chúng tôi rất chú trọng đến việc tạo ra một cộng đồng học tập sôi động và hỗ trợ lẫn nhau. Khi tham gia khóa học tại trung tâm, bạn sẽ được mời vào các diễn đàn của trung tâm, các kênh chat của những lớp học mà bạn sẽ tham gia. Việc tham gia vào cộng đồng học tập này không chỉ giúp bạn nâng cao hiệu quả học tập mà còn giúp bạn làm quen và kết nối với nhiều người bạn cùng sở thích.</p>
                                </div>
                            </div>
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Thời lượng của một buổi học là bao lâu?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Thời lượng một buổi học tùy thuộc vào khóa học online hay offline và tùy theo mức độ khóa học khác nhau</p>
                                </div>
                            </div>
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Người Giảng Dạy có kinh nghiệm không?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Giảng viên có nhiều năm kinh nghiệm trong việc giảng dạy tiếng Hàn cho người nước ngoài là một điểm cộng lớn. Điều này thể hiện qua số năm giảng dạy, số lượng học viên đã được đào tạo và thành tích của học viên trong các kỳ thi TOPIK.</p>
                                </div>
                            </div>
                        </div>
                        <div className="FAOs-content-main-type2">
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Có giới thiệu thêm về trung tâm không?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Đây là các trung tâm tư nhân chuyên dạy tiếng Hàn cho các nhóm học viên đa dạng như học sinh, sinh viên, người đi làm, hoặc những ai muốn du học Hàn Quốc.</p>
                                </div>
                            </div>
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Sau khi hoàn thành khóa học, tôi sẽ đạt được trình độ nào?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Sau khi hoàn thành một khóa học tiếng Hàn, cấp độ đạt được thường phụ thuộc vào thời gian học và nội dung khóa học. Một số mô tả chung về các cấp độ sau khi hoàn thành khóa học tiếng Hàn có thể</p>
                                </div>
                            </div>
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Có Thể Tương Tác Trực Với Người Giảng Dạy Không?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Có thể tương tác với giáo viên qua chức năng chat, nộp bài tập, </p>
                                </div>
                            </div>
                            <div className="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Có chương trình khuyến mãi nào không?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Chương trình khuyến mãi thường phụ thuộc vào từng trung tâm học tiếng Hàn cụ thể, và các trung tâm này có thể tổ chức các chương trình ưu đãi vào các dịp khác nhau trong năm</p>
                                </div>
                            </div>
                        </div>
                        <div className="FAOs-content-image">
                        <img src={FAQs} alt="FAOs illustration" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
