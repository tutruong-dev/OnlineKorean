import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../index.css';
import logo from '../../Img/logo.jpg';
import LogoGoogle from '../../Img/LogoGoole.png';
import LogoPhone from '../../Img/LogoPhone.png';
import { db, collection, query, where, getDocs } from '../Firebase/firebaseconfig';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Tạo truy vấn để tìm người dùng theo tên người dùng và mật khẩu
            const q = query(collection(db, "users"), 
                            where("username", "==", username), 
                            where("password", "==", password));
            
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
                // Người dùng hợp lệ, chuyển hướng hoặc thực hiện hành động khác
                window.location.href = "/Home-Page";
            } else {
                // Thông báo lỗi nếu không tìm thấy người dùng
                setError('Tên người dùng hoặc mật khẩu không chính xác');
            }
        } catch (error) {
            setError('Đã xảy ra lỗi khi đăng nhập');
            console.error('Error fetching user:', error);
        }
    };

    return (
        <div className="container">
            <div className="body">
                <div className="linkpath">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/Home-Page">Trang Chủ</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <Link to="/Login">Đăng Nhập</Link>/<Link to="/Register">Đăng Ký</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="login-content">
                    <div className="login-content-logo">
                        <img src={logo} alt="Online Korean Logo" />
                        <a href="#">OnlineKorean</a>
                    </div>
                    <div className="login-content-form">
                        <div className="login-content-form-out">
                            <button type="button">
                                Tiếp tục với Google
                                <img src={LogoGoogle} alt="Google Logo" />
                            </button>
                            <button type="button">
                                Tiếp tục với Số điện thoại 
                                <img src={LogoPhone} alt="Phone Logo" />
                            </button>
                        </div>
                        <div className="login-content-form-content">
                            <h1>Đăng nhập</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Tên người dùng</label>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        placeholder="Tên đăng nhập"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        placeholder="Mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id="rememberMe"
                                    />
                                    <label htmlFor="rememberMe">Lưu mật khẩu</label>                                    
                                </div>                                
                                <button type="submit" className="btn-primary">
                                    Đăng nhập
                                </button>
                                <div className="ForgetPass">
                                    <Link to="/ForgetPass">Quên Mật Khẩu</Link>
                                </div>
                                {error && <div className="error-message">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
