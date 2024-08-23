import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../Img/logo.jpg';
import "../index.css";


function Header() {
  // State để quản lý hiển thị/ẩn menu
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedCourses, setSuggestedCourses] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    // Danh sách Khóa Học
    const popularCoursesData = [
      { name: 'Khóa học Tiếng Hàn Sơ cấp 1', url: '/khoa-hoc/tieng-han-so-cap-1' },
      { name: 'Khóa học Tiếng Hàn Sơ cấp 2', url: '/khoa-hoc/tieng-han-so-cap-2' },
      { name: 'Khóa học Tiếng Hàn Trung cấp', url: '/khoa-hoc/tieng-han-trung-cap' },
      { name: 'Khóa học Tiếng Hàn Cao cấp', url: '/khoa-hoc/tieng-han-cao-cap' },
      { name: 'Khóa học Giao tiếp Tiếng Hàn', url: '/khoa-hoc/giao-tiep-tieng-han' }
    ];
    setPopularCourses(popularCoursesData);

    // Thêm sự kiện click vào toàn bộ tài liệu
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSuggestedCourses([]); // Ẩn danh sách gợi ý
      }
      if (showMenu && !event.target.closest('.cart-menu') && !event.target.closest('.cart-button')) {
        setShowMenu(false); // Ẩn menu giỏ hàng nếu click ở ngoài
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);

  const handleToggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredCourses = popularCourses.filter(course =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestedCourses(filteredCourses);
  };

  const handleSearchClick = () => {
    if (!searchQuery) {
      setSuggestedCourses(popularCourses);
    }
  };

  // Header
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/Home-Page" className="logo-link"> 
            <img src={logo} alt="Logo" className="logo-image" />
            <span className="brand">Online Korean</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/Home-Page" className="nav-link">Trang Chủ</Link>
          <Link to="/Khóa-Học" className="nav-link">Khóa Học</Link>
          <Link to="/TestInputPage" className="nav-link">Test Đầu Vào</Link>
          <Link to="/Blog" className="nav-link">Blog</Link>
          <Link to="/FAQs" className="nav-link">FAQs</Link>
          <Link to="/Liên-Hệ-Với-Chúng-Tôi" className="nav-link">Liên Hệ Chúng Tôi</Link>
        </div>
        <div className="search-container" ref={searchContainerRef}>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            onClick={handleSearchClick}
          />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
          {suggestedCourses.length > 0 && (
            <ul className="suggestion-list">
              {suggestedCourses.map((course, index) => (
                <li key={index}>
                  <Link to={course.url}>{course.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="cart-button" onClick={handleToggleMenu}>
          <i className="fa fa-shopping-cart"></i>
        </button>

        <div class="d-grid gap-2 col-6 mx-auto" className="Login">
                    <Link to="/Đăng-Nhập" className='login'>Đăng nhập</Link>
                    <Link to="/Đăng-Ký" className='Register'>Đăng ký</Link>
        </div>
      </nav>
      {showMenu && (
        <div className="cart-menu">
          <Link to="/shopping-cart" onClick={handleToggleMenu}>Danh sách các khóa học</Link>
          <Link to="/lich-su-thanh-toan" onClick={handleToggleMenu}>Lịch sử thanh toán</Link>
          <Link to="/so-sanh-khoa-hoc" onClick={handleToggleMenu}>So sánh các khóa học</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
