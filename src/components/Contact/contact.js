import React, { useState } from 'react';
import logo from '../../Img/logo.jpg';
import '../../index.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};

        // Validate username
        if (!formData.username.trim()) {
            newErrors.username = 'Họ và tên không được để trống.';
        } else if (formData.username.trim().length < 3) {
            newErrors.username = 'Họ và tên phải có ít nhất 3 ký tự.';
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email không được để trống.';
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data:', formData);
            alert('Form submitted successfully!');
            setFormData({
                username: '',
                email: '',
                message: '',
            });
        }
    };

    return (
        <div className='body_Contact'>
            <div className='sideBar'>
                <img src={logo} alt="Contact Us" />
            </div>

            <div className='mainContent'>
                <h2>Liên Hệ Chúng Tôi</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Họ và tên"
                            value={formData.username}
                            onChange={handleInputChange}
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Vấn đề cần giải đáp"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group checkbox-group">
                        <input type="checkbox" id="save-info" />
                        <label htmlFor="save-info">Lưu Thông Tin Cho Những Lần Tiếp Theo</label>
                    </div>
                    <button type="submit">Liên Hệ Chúng Tôi</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
