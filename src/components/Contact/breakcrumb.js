import React from 'react';
import '../../index.css'
import { Link } from 'react-router-dom';
function Breakcrumb() {
    return (
            <nav>
                <ul className="breakcrumb">
                    <p><Link to="/Home-Page" className="breakcrumb">Trang Chủ</Link> {'>'} Liên Hệ Với Chúng Tôi</p>
                </ul>
            </nav>
    )
}
export default Breakcrumb;
