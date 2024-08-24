import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import logo from "../../Img/logo.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = ({ addUser }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Tên không được để trống')
                .max(30, 'Tên không quá 30 kí tự'),
            email: Yup.string()
                .email('Email không hợp lệ')
                .required('Email không được để trống'),
            username: Yup.string()
                .required('Tên người dùng không được để trống')
                .max(50, 'Tên người dùng không quá 50 kí tự'),
            password: Yup.string()
                .required('Mật khẩu không được để trống')
                .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
                .max(50, 'Mật khẩu không quá 50 kí tự'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
                .required('Xác nhận mật khẩu không được để trống'),
        }),
        onSubmit: (values, { resetForm }) => {
            addUser(values);
            resetForm();
        },
    });

    return (
        <div className="container">
            <div className="body">
                <div className="linkpath">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/Home-Page">Trang Chủ</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <Link to="/Login">Đăng Nhập</Link>/
                                <Link to="/Register">Đăng Ký</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="register-content">
                    <div className="register-content-logo">
                        <img src={logo} alt="logo" />
                        <a>OnlineKorean</a>
                    </div>
                    <div className="register-content-form">
                        <div className="register-content-form-content">
                            <h1>Đăng Ký</h1>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Tên</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                        id="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name && <div className="invalid-feedback">{formik.errors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Tên người dùng</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
                                        id="username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.username && formik.errors.username && <div className="invalid-feedback">{formik.errors.username}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                        id="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''}`}
                                        id="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="invalid-feedback">{formik.errors.confirmPassword}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Đăng Ký
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
