import React from "react";

const TestInput = () => {
    return(
        <div className="input-survey-container">
            <h1>Bài test đầu vào</h1>
            <div className="test-questions">
                <h3>1. Thông tin cá nhân </h3>
                <input type="email" placeholder="Email" />

                <h3>2. Bạn học tiếng Hàn vì mục tiêu gì? (Có thể chọn nhiều lựa chọn) </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="study" />
                            Du Học
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="work" />
                            Làm Việc
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="travel" />
                            Du Lịch
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="checkbox" name="goal" value="marriage" />
                            Kết Hôn Với Người Hàn
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="hobby" />
                            Sở Thích Cá Nhân
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="other" />
                            Lý Do Khác
                        </label>
                    </div>
                </div>

                <input type="reason" placeholder="Vui lòng ghi rõ lý do khác" />


                <h3>3. Bạn từng học tiếng Hàn bao lâu rồi? (Chỉ chọn một lựa chọn) </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="study" />
                            Chưa từng học
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="work" />
                            Dưới 6 tháng
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="travel" />
                           6 tháng - 1 năm
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="goal" value="marriage" />
                            1 - 2 năm
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="hobby" />
                            Trên 2 năm
                        </label>
                    </div>
                </div>


                <h3>4. Bạn tự đánh giá kỹ năng nghe của mình như thế nào? (Chỉ chọn 1 câu trả lời) </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="study" />
                            Rất Tốt
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="work" />
                            Tốt
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="travel" />
                            Trung Bình
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="goal" value="marriage" />
                            Kém
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="hobby" />
                            Rất Kém
                        </label>
                    </div>
                </div>


                <h3>5. Bạn tự đánh giá kỹ năng nói của mình như thế nào? (Chỉ chọn 1 câu trả lời) </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="study" />
                            Rất Tốt
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="work" />
                            Tốt
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="travel" />
                            Trung Bình
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="goal" value="marriage" />
                            Kém
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="hobby" />
                            Rất Kém
                        </label>
                    </div>
                </div>

                <h3>6. Bạn tự đánh giá kỹ năng đọc của mình như thế nào? (Chỉ chọn 1 câu trả lời) </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="study" />
                            Rất Tốt
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="work" />
                            Tốt
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="travel" />
                            Trung Bình
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="radio" name="goal" value="marriage" />
                            Kém
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="radio" name="goal" value="hobby" />
                            Rất Kém
                        </label>
                    </div>
                </div>
                    <h3>7. Bạn tự đánh giá kỹ năng viết của mình như thế nào? (Chỉ chọn 1 câu trả lời) </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                        <div style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input type="radio" name="goal" value="study" />
                                Rất Tốt
                            </label>
                        </div>
                        <div style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input type="radio" name="goal" value="work" />
                                Tốt
                            </label>
                        </div>
                        <div style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input type="radio" name="goal" value="travel" />
                                Trung Bình
                            </label>
                        </div>
                        <div style={{ flex: '1 1 45%', margin: '5px'}}>
                            <label>
                                <input type="radio" name="goal" value="marriage" />
                                Kém
                            </label>
                        </div>
                        <div style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input type="radio" name="goal" value="hobby" />
                                Rất Kém
                            </label>
                        </div>
                    </div>


                <h3>8. Bạn mong muốn khóa học tập trung vào kỹ năng gì? (Có thể chọn nhiều lựa chọn) </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="study" />
                            Nghe
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="work" />
                            Nói
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="travel" />
                            Đọc
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px'}}>
                        <label>
                            <input type="checkbox" name="goal" value="marriage" />
                            Viết
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="hobby" />
                            Ngữ Pháp
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="other" />
                            Từ Vựng
                        </label>
                    </div>
                    <div style={{ flex: '1 1 45%', margin: '5px' }}>
                        <label>
                            <input type="checkbox" name="goal" value="other" />
                            Văn Hóa Và Phong Tục Tiếng Hàn
                        </label>
                    </div>
                </div>
                <button className="testinput-button-container">Hoàn Thành Khảo Sát</button>

            </div>
        </div>
    )
}

export default TestInput;