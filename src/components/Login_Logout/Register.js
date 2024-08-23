import React, { useState } from "react";
import { Link } from 'react-router-dom';
import'../../index.css';
import logo from '../../Img/logo.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = ({ addUser }) => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          username:'',
          password:'',
          confirmPassword:'',
          
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .required('Tên không hợp lệ')
            .max(30, 'Tên không quá 30 kí tự!!'),
          email: Yup.string()
            .email('Email không hợp lệ')
            .required('Email is required'),
          username: Yup.string()
            .required('Name is required')
            .max(50, 'Name must be 50 characters or less'),
          password: Yup.string()
            .required('Password is required')
            .max(50, 'Name must be 50 characters or less'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        }),
        onSubmit: (values, { resetForm }) => {
          addUser(values);
          resetForm();
        },
      });
    
    // const [formData, setFormData] = useState({
    //     email: '',
    //     username: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    // const [errors, setErrors] = useState({});

    // const handleInputChange = (e) => {
    //     const { id, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [id]: value
    //     });
    // };

    // const validate = () => {
    //     const newErrors = {};

    //     // Email validation
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailPattern.test(formData.email)) {
    //         newErrors.email = 'Email không hợp lệ';
    //     }

    //     // Username validation
    //     if (formData.username.trim() === '') {
    //         newErrors.username = 'Tên người dùng không được để trống';
    //     }

    //     // Password validation
    //     if (formData.password.trim() === '') {
    //         newErrors.password = 'Mật khẩu không được để trống';
    //     }

    //     // Confirm password validation
    //     if (formData.confirmPassword !== formData.password) {
    //         newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    //     }

    //     return newErrors;
    // };

    //  const handleSubmit = (e) => {
    //      e.preventDefault();
    //      const validationErrors = validationSchema();
    //      setErrors(validationErrors);

    //      if (Object.keys(validationErrors).length === 0) {
    //          // Form is valid, proceed with form submission (e.g., send data to server)
    //          console.log('Form data:', formData);
    //      }
    //  };

    return (
        <div className="container">
            <div className="body">
                <div className="linkpath">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/Home-Page">Trang Chủ</Link></li>
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
                                    <label htmlFor="username" className="form-label">Tên người dùng</label>
                                    <input
                                        type="text"
                                        className={`form-control ${formik.errors.username ? 'is-invalid' : ''}`}
                                        id="username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.username && <div className="invalid-feedback">{formik.errors.username}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        aria-describedby="emailHelp"
                                    />
                                    {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                                    <input
                                        type="password"
                                        className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
                                        id="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
                                    <input
                                        type="password"
                                        className={`form-control ${formik.errors.confirmPassword ? 'is-invalid' : ''}`}
                                        id="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.confirmPassword && <div className="invalid-feedback">{formik.errors.confirmPassword}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    <Link to="/Đăng-Nhập" className="login">Đăng ký</Link>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
