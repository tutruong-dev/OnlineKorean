import React from "react";
import'./Register.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ForgetPass from "./ForgetPass";

function Register()
{
    return (
        <div className="container">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <div className="linkpath">
                        <a>Trang chủ</a>
                        <a>Đăng nhập/đăng ký</a>
                </div>
                <div className="register-content">
                    <div className="register-content-logo">
                        <img src="/logo.jpg"></img>
                        <a>OnlineKorean</a>
                    </div>
                    <div className="login-content-form">
                        <div className="login-content-form-content">
                        <h1>Đăng Ký</h1>
                        <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp"
                                    />
                                
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Tên người dùng</label>
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        id="exampleInputPassword1"
                                    />
                                </div>  
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Xác nhận mật khẩu</label>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        id="exampleInputPassword1"
                                    />
                                </div>                           
                                <button type="submit" class="btn btn-primary">Đăng ký</button>                  
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <a>Đợi components Footer</a>
            </div>
        </div>
    );
}

export default Register;