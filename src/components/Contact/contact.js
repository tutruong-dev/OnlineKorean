import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Img/logo.jpg'
import '../../index.css'

function ContactForm() {
    return (
        <div className='body_Contact'>
            <div className='sideBar'>
                <img src={logo} alt="Contact Us" />
            </div>

            <div className='mainContent'>
                <h2>Liên Hệ Chúng Tôi</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Họ và tên" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Vấn đề cần giải đáp"></textarea>
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
