import React from 'react';
import '../../index.css'
import { Link } from 'react-router-dom';
function Breakcrumb() {
    return (
                <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        <p><Link to="/Home-Page" className="breakcrumb">Trang Chủ</Link> {'>'} Liên Hệ Với Chúng Tôi</p>
                        </ol>
                    </nav>
    )
}
export default Breakcrumb;
