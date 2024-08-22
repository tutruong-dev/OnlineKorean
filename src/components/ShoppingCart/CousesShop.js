import React, { useState } from 'react';
import '../../index.css';
import shoppingCartImg from '../../Img/shoppingCartImg.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CousesShop = () => {
  const [items, setItems] = useState([
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 },
    { id: 3, quantity: 1 }
  ]);

  const handleQuantityChange = (id, delta) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalAmount = items.reduce((total, item) => total + 199000 * item.quantity, 0);

  return (
    <div className="shoppingCart-container">
      <h2 className="shoppingCart-heading">
        <button className="back-button" onClick={() => window.location.href = '/courses'}>←</button>
        Tiếp tục tham khảo
      </h2>
      <div className="shoppingCart-items">
        {items.map((item) => (
          <div key={item.id} className="shoppingCart-item">
            <div className="course-image-container">
              <img src={shoppingCartImg} alt="Course" className="course-image" />
            </div>
            <div className="course-details">
              <p className="course-author">bởi Trần Ly Ly</p>
              <h3 className="course-title">Học TOPIK 2 - Trình Độ Sơ Cấp</h3>
              <div className="course-info-container">
                <span className="course-info-item">2 Tuần</span>
                <span className="course-info-item">156 Học Viên</span>
                <span className="course-info-item">Tất cả trình độ</span>
                <span className="course-info-item">20 Bài học</span>
              </div>
              <div className="course-price">
                <span className="old-price">499,000 Đ</span>
                <span className="new-price">199,000 Đ</span>
              </div>
            </div>
            <button className="more-info-button">Xem Thêm</button>
            <div className="quantity-controls">
              <button className="quantity-button" onClick={() => handleQuantityChange(item.id, -1)}>−</button>
              <input type="number" value={item.quantity} readOnly className="quantity-input" />
              <button className="quantity-button" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>🗑</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
      </div>
      <div className="checkout-section">
        <div className="discount-code">
          <input type="text" placeholder="Nhập mã giảm giá" className="discount-input" />
          <button className="apply-button">Áp Dụng</button>
        </div>
        <div className="total-price">
          <p>Tổng Tiền: <span className="price">${totalAmount.toLocaleString()}</span></p>
          <Link to="/Payment" className="checkout-button">
            ${totalAmount.toLocaleString()} Thanh toán Ngay <FaArrowRight />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CousesShop;
