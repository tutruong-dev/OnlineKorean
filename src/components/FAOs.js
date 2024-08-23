import React from "react";
import Header from "./Header";
import './FAOs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./Footer";

function FAOs()
{
    return(
        <div className="FAOs-container">
            <div className="FAOs-header">
                <Header />
            </div>
            <div className="body">
                <div className="linkpath">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li class="breadcrumb-item active" aria-current="page">FAOs</li>
                        </ol>
                    </nav>
                </div>
                <div className="FAOs-content">
                    <h1>Giải Đáp Thắc Mắc Thường Gặp</h1>
                    <div className="FAOs-content-main">
                        <div className="FAOs-content-main-type1">
                                <div class="FAOs-content-main-dropdown">
                                    <button className="FAOs-content-main-dropdown-button">Học qua nền tảng nào?</button>
                                    <div className="FAOs-content-main-dropdown-button-content">
                                        <p>Nội dung1</p>
                                    </div>  
                                </div>
                                <div class="FAOs-content-main-dropdown">
                                    <button className="FAOs-content-main-dropdown-button">Có diễn đàn hoặc nhóm học tập để trao đổi không?</button>
                                    <div className="FAOs-content-main-dropdown-button-content">
                                        <p>Hoàn toàn có ạ! Chúng tôi rất chú trọng đến việc tạo ra một cộng đồng học tập sôi động và hỗ trợ lẫn nhau. Khi tham gia khóa học tại trung tâm, bạn sẽ được mời vào các diễn đàn của trung tâm, các kênh chat của những lớp học mà bạn sẽ tham gia. Việc tham gia vào cộng đồng học tập này không chỉ giúp bạn nâng cao hiệu quả học tập mà còn giúp bạn làm quen và kết nối với nhiều người bạn cùng sở thích.</p>
                                    </div>  
                                </div>
                                <div class="FAOs-content-main-dropdown">
                                    <button className="FAOs-content-main-dropdown-button">Thời lượng của một buổi học là bao lâu?</button>
                                    <div className="FAOs-content-main-dropdown-button-content">
                                        <p>Nội dung8</p>
                                    </div>  
                                </div>
                            <div class="FAOs-content-main-dropdown">
                                <button className="FAOs-content-main-dropdown-button">Người Giảng Dạy có kinh nghiệm không?</button>
                                <div className="FAOs-content-main-dropdown-button-content">
                                    <p>Nội dung8</p>
                                </div>  
                            </div>
                        </div>
                        <div className="FAOs-content-main-type2">
                                <div class="FAOs-content-main-dropdown">
                            <button className="FAOs-content-main-dropdown-button">Có giới thiệu thêm về trung tâm không?</button>
                            <div className="FAOs-content-main-dropdown-button-content">
                                <p>Nội dung8</p>
                            </div>  
                        </div>
                        <div class="FAOs-content-main-dropdown">
                            <button className="FAOs-content-main-dropdown-button">Sau khi hoàn thành khóa học, tôi sẽ đạt được trình độ nào?</button>
                            <div className="FAOs-content-main-dropdown-button-content">
                                <p>Nội dung8</p>
                            </div>  
                        </div>
                        <div class="FAOs-content-main-dropdown">
                            <button className="FAOs-content-main-dropdown-button">Có Thể Tương Tác Trực Với Người Giảng Dạy Không?</button>
                            <div className="FAOs-content-main-dropdown-button-content">
                                <p>Nội dung8</p>
                            </div>  
                        </div>
                        <div class="FAOs-content-main-dropdown">
                            <button className="FAOs-content-main-dropdown-button">Có chương trình khuyến mãi nào không?</button>
                            <div className="FAOs-content-main-dropdown-button-content">
                                <p>Nội dung8</p>
                            </div>    
                        </div>
                        </div> 
                    </div>
                    <div className="FAOs-content-image">
                        <img src="/FAOs-img.png"></img>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default FAOs;