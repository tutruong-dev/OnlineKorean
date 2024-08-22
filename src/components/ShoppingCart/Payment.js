import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function Payment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    bank: "",
    bankAccount: "",
    expiry: "",
    cvc: "",
    discountCode: "",
  });

  const [errors, setErrors] = useState({});
  const [bankAccountLengths, setBankAccountLengths] = useState({
    MB: 13,
    VCB: 12,
    ACB: 8,
    NganhangKhac: 14,
  });


  const cartTotal = 500000; 
  const discountCode = formData.discountCode;
  const discountAmount = discountCode ? 200000 : 0; 
  const totalAmount = cartTotal - discountAmount;

  const handleBackClick = () => {
    navigate("/shopping-cart");
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "Email không hợp lệ";
    }

  //account number validation
    const selectedBankLength = bankAccountLengths[formData.bank];
    if (formData.bank && !formData.bankAccount.match(`^\\d{${selectedBankLength}}$`)) {
      newErrors.bankAccount = `Số tài khoản không hợp lệ`;
    }

    // Expiry date validation
    if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/[0-9]{2}$/)) {
      newErrors.expiry = "MM/YY không hợp lệ";
    }

    // CVC validation
    if (!formData.cvc.match(/^\d{3}$/)) {
      newErrors.cvc = "CVC không hợp lệ";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "expiry") {
      let formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Card Detail</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Ngân Hàng</label>
            <select
              name="bank"
              value={formData.bank}
              onChange={handleChange}
            >
              <option value="">Chọn Ngân Hàng</option>
              <option value="MB">MB</option>
              <option value="VCB">VCB</option>
              <option value="ACB">ACB</option>
              <option value="NganhangKhac">Ngân Hàng Khác...</option>
            </select>
          </div>

          <div className="form-group">
            <label>Nhập Số Tài Khoản Của Bạn</label>
            <input
              type="text"
              name="bankAccount"
              placeholder="0000 0000 0000 0000"
              value={formData.bankAccount}
              onChange={handleChange}
              className={errors.bankAccount ? "error-input" : ""}
              disabled={!formData.bank}
            />
            {errors.bankAccount && (
              <p className="error-message">{errors.bankAccount}</p>
            )}
          </div>

          <div className="form-group">
            <div className="input-half">
              <label>MM/YY</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className={errors.expiry ? "error-input" : ""}
              />
              {errors.expiry && (
                <p className="error-message">{errors.expiry}</p>
              )}
            </div>
            <div className="input-half">
              <label>CVC</label>
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleChange}
                className={errors.cvc ? "error-input" : ""}
              />
              {errors.cvc && <p className="error-message">{errors.cvc}</p>}
            </div>
          </div>

          <div className="form-group save-info">
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info">Lưu Thông Tin Thẻ</label>
          </div>

          <div className="form-summary">
            <p>
              Giảm Giá: <span className="discount">{discountAmount.toLocaleString()} Đ</span>
            </p>
            <p>
              Tổng Tiền: <span className="total">{totalAmount.toLocaleString()} Đ</span>
            </p>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="back-button"
              onClick={handleBackClick}
            >
              Quay Lại
            </button>
            <button type="submit" className="submit-button">
              Thanh Toán
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
