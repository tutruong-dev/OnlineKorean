import React from "react";
import '../../index.css';
import { Link } from 'react-router-dom';
import logo from '../../Img/logo.jpg';
import LogoGoogle from '../../Img/LogoGoole.png';
import LogoPhone from '../../Img/LogoPhone.png';

function Login() {
    return (
        <div className="container">
            <div className="body">
                <div className="linkpath">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/Home-Page">Trang Chủ</Link></li>
                            <li class="breadcrumb-item active" aria-current="page"><Link to="/Login">Đăng Nhập</Link>/<Link to="/Register">Đăng Ký</Link></li>
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
                            <form>
                                <div>
                                    <label htmlFor="exampleInputEmail1">Tên người dùng</label>
                                    <input 
                                        type="email" 
                                        id="exampleInputEmail1" 
                                        placeholder="Email hoặc tên đăng nhập"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                                    <input 
                                        type="password" 
                                        id="exampleInputPassword1"
                                        placeholder="Mật khẩu"
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id="exampleCheck1"
                                    />
                                    <label htmlFor="exampleCheck1">Lưu mật khẩu</label>                                    
                                </div>                                
                                <button type="submit" className="btn-primary">
                                    <Link to="/Home-Page" className="login">Đăng nhập</Link>
                                </button>
                                <div className="ForgetPass">
                                <Link to="/ForgetPass">Quên Mật Khẩu</Link>
                                </div>                      
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
