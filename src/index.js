import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import PaymentPage from './pages/PaymentPage';
<<<<<<< HEAD
import BlogPage from './pages/BlogPage';
=======
import FAQsPages from './pages/FAQsPage';
import LoginPages from './pages/LoginPage';
import ForgetPass from './components/Login_Logout/ForgetPass';
import RegisterPage from './pages/RegisterPage';
>>>>>>> 0ad7229e065bb60bc9222ee71ed9036479669d61
const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/Home-Page" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/Payment" element={<PaymentPage />} />
<<<<<<< HEAD
      <Route path="/Blog" element={<BlogPage />} />
      
=======
      <Route path="/FAQs" element={<FAQsPages />} />
      <Route path="/Đăng-Nhập" element={<LoginPages />} />
      <Route path="/ForgetPass" element={<ForgetPass />} />
      <Route path="/Login" element={<LoginPages />} />
      <Route path="/Đăng-Ký" element={<RegisterPage />} />
      <Route path="/Login" element={<LoginPages />} />
      <Route path="/Register" element={<RegisterPage />} />
>>>>>>> 0ad7229e065bb60bc9222ee71ed9036479669d61
     {/*<Route path="/Đăng-Ký" element={<Registe />} />
      <Route path="/Đăng-Nhập" element={<Login />} />
      {/* có thể thêm các route khác ở đây */}
    </Routes>
    <Footer />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
