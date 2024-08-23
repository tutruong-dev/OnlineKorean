import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Survey = () => {
    const [email, setEmail] = useState("");
    const [reasons, setReasons] = useState([]);
    const [time, setTime] = useState("");
    const [listening, setListening] = useState("");
    const [speaking, setSpeaking] = useState("");
    const [reading, setReading] = useState("");
    const [writing, setWriting] = useState("");
    const [focus, setFocus] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Replacing useHistory with useNavigate

    const handleCheckboxChange = (setFunction, value) => {
        setFunction(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        let formErrors = {};

        if (!email) formErrors.email = "Vui lòng nhập Email.";
        if (reasons.length === 0) formErrors.reasons = "Vui lòng chọn ít nhất một lý do.";
        if (!time) formErrors.time = "Vui lòng chọn một lựa chọn.";
        if (!listening) formErrors.listening = "Vui lòng chọn một lựa chọn.";
        if (!speaking) formErrors.speaking = "Vui lòng chọn một lựa chọn.";
        if (!reading) formErrors.reading = "Vui lòng chọn một lựa chọn.";
        if (!writing) formErrors.writing = "Vui lòng chọn một lựa chọn.";
        if (focus.length === 0) formErrors.focus = "Vui lòng chọn ít nhất một lựa chọn.";

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            // If there are no errors, navigate to the next page
            console.log("Form is valid. Proceed with submission.");
            navigate("/TestInput");
        }
    };

    return (
        <div className="survey-container">
            <h1>Survey Khảo Sát</h1>
            <div className="questions">
                <h3>1. Thông tin cá nhân</h3>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={errors.email ? { borderColor: "red" } : {}}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <h3>2. Bạn học tiếng Hàn vì mục tiêu gì? (Có thể chọn nhiều lựa chọn)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    {["Du Học", "Làm Việc", "Du Lịch", "Kết Hôn Với Người Hàn", "Sở Thích Cá Nhân", "Lý Do Khác"].map((label, index) => (
                        <div key={index} style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="question-1"
                                    value={label}
                                    onChange={() => handleCheckboxChange(setReasons, label)}
                                    style={errors.reasons ? { borderColor: "red" } : {}}
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.reasons && <p style={{ color: "red" }}>{errors.reasons}</p>}

                <input type="text" placeholder="Vui lòng ghi rõ lý do khác" />

                <h3>3. Bạn từng học tiếng Hàn bao lâu rồi? (Chỉ chọn một lựa chọn)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    {["Chưa từng học", "Dưới 6 tháng", "6 tháng - 1 năm", "1 - 2 năm", "Trên 2 năm"].map((label, index) => (
                        <div key={index} style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input
                                    type="radio"
                                    name="question-2"
                                    value={label}
                                    onChange={(e) => setTime(e.target.value)}
                                    style={errors.time ? { borderColor: "red" } : {}}
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}

                <h3>4. Bạn tự đánh giá kỹ năng nghe của mình như thế nào? (Chỉ chọn 1 câu trả lời)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    {["Rất Tốt", "Tốt", "Trung Bình", "Kém", "Rất Kém"].map((label, index) => (
                        <div key={index} style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input
                                    type="radio"
                                    name="question-3"
                                    value={label}
                                    onChange={(e) => setListening(e.target.value)}
                                    style={errors.listening ? { borderColor: "red" } : {}}
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.listening && <p style={{ color: "red" }}>{errors.listening}</p>}

                <h3>5. Bạn tự đánh giá kỹ năng nói của mình như thế nào? (Chỉ chọn 1 câu trả lời)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    {["Rất Tốt", "Tốt", "Trung Bình", "Kém", "Rất Kém"].map((label, index) => (
                        <div key={index} style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input
                                    type="radio"
                                    name="question-4"
                                    value={label}
                                    onChange={(e) => setSpeaking(e.target.value)}
                                    style={errors.speaking ? { borderColor: "red" } : {}}
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.speaking && <p style={{ color: "red" }}>{errors.speaking}</p>}

                <h3>6. Bạn tự đánh giá kỹ năng đọc của mình như thế nào? (Chỉ chọn 1 câu trả lời)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    {["Rất Tốt", "Tốt", "Trung Bình", "Kém", "Rất Kém"].map((label, index) => (
                        <div key={index} style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input
                                    type="radio"
                                    name="question-5"
                                    value={label}
                                    onChange={(e) => setReading(e.target.value)}
                                    style={errors.reading ? { borderColor: "red" } : {}}
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.reading && <p style={{ color: "red" }}>{errors.reading}</p>}

                <h3>7. Bạn tự đánh giá kỹ năng viết của mình như thế nào? (Chỉ chọn 1 câu trả lời)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    {["Rất Tốt", "Tốt", "Trung Bình", "Kém", "Rất Kém"].map((label, index) => (
                        <div key={index} style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input
                                    type="radio"
                                    name="question-6"
                                    value={label}
                                    onChange={(e) => setWriting(e.target.value)}
                                    style={errors.writing ? { borderColor: "red" } : {}}
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.writing && <p style={{ color: "red" }}>{errors.writing}</p>}

                <h3>8. Bạn mong muốn khóa học tập trung vào kỹ năng gì? (Có thể chọn nhiều lựa chọn)</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '500px', marginLeft: '170px' }}>
                    {["Nghe", "Nói", "Đọc", "Viết", "Ngữ Pháp", "Từ Vựng", "Văn Hóa Và Phong Tục Tiếng Hàn", "Kỹ Năng Khác"].map((label, index) => (
                        <div key={index} style={{ flex: '1 1 45%', margin: '5px' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="question-7"
                                    value={label}
                                    onChange={() => handleCheckboxChange(setFocus, label)}
                                    style={errors.focus ? { borderColor: "red" } : {}}
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.focus && <p style={{ color: "red" }}>{errors.focus}</p>}
            </div>

            <Link to="/TestInput" onClick={handleSubmit} className="buttonSurvey-container">Hoàn Thành Khảo Sát</Link>
        </div>
    );
};

export default Survey;
