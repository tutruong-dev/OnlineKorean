import React from "react";
import'./Login.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ForgetPass from "./ForgetPass";
import Footer from "./Footer";

function Login()
{
    return (
        <div className="container">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <div className="linkpath">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Đăng nhập/Đăng ký</li>
                        </ol>
                    </nav>
                </div>
                <div className="login-content">
                    <div className="login-content-logo">
                        <img src="/logo.jpg"></img>
                        <a>OnlineKorean</a>
                    </div>
                    <div className="login-content-form">
                        <div className="login-content-form-out">
                                <button href="">Tiếp tục với Google<img src="/Logo-Google.png"></img></button>
                                <button href="">Tiếp tục với Số điện thoại <img src="/Logo-Phone.png"/></button>                     
                        </div>
                        <div className="login-content-form-content">
                        <h1>Đăng nhập</h1>
                        <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Tên người dùng</label>
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <div class="mb-3 form-check">
                                    <input 
                                        type="checkbox" 
                                        class="form-check-input" 
                                        id="exampleCheck1"
                                        />
                                    <label class="form-check-label" for="exampleCheck1">Lưu mật khẩu</label>                                    
                                </div>                                
                                <button type="submit" class="btn btn-primary">Đăng nhập</button>
                                <div className="ForgetPass">
                                    <ForgetPass/>
                                </div>                      
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default Login;