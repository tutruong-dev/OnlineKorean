import React from 'react';
import '../../index.css'
import { Link } from 'react-router-dom';
function Breakcrumb() {
    return (
        <div className="linkpath">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/Home-Page">Trang Chủ</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <p>Test đầu vào</p>
                </li>
            </ol>
        </nav>
    </div>
    )
}
export default Breakcrumb;
