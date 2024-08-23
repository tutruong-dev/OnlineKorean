import React, { useState } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
function ForgetPass() {
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    const handleNextStep = () => {
        setStep(2);
    };

    return (
        <>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                Có phải bạn quên mật khẩu?
            </a>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {step === 1 ? 'Khôi phục mật khẩu' : 'Đã gửi OTP ở Email'}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {step === 1 ? (
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">
                                            Nhập email để khôi phục mật khẩu
                                        </label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                </form>
                            ) : (
                                <div className="otp-container">
                                    <p>Chúng tôi đã gửi mã OTP về Email của bạn. Xin vui lòng kiểm tra và nhập vào bên dưới.</p>
                                    <div className="otp-inputs">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleOtpChange(e, index)}
                                                className="otp-input"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            <Link to="/Login">Quay Về Trang Đăng Nhập?</Link>
                            </button>
                            {step === 1 ? (
                                <button type="button" className="btn btn-primary" onClick={handleNextStep}>
                                    Gửi link khôi phục
                                </button>
                            ) : (
                                <button type="button" className="btn btn-primary">
                                    Xác nhận
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgetPass;
