import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import PaymentPage from "./pages/PaymentPage";
import FAQsPages from "./pages/FAQsPage";
import LoginPages from "./pages/LoginPage";
import ForgetPass from "./components/Login_Logout/ForgetPass";
import RegisterPage from "./pages/RegisterPage";
import TestPages from "./pages/TestPage";
import ContactPages from "./pages/ContactPage";
import Surveys from "./components/Survey";
import CourseListing from "./pages/CourseListing";
import CourseSingle from "./pages/CourseSingle";
import TestInputPage from "./pages/TestInputPage";
import QuestionForm from "./components/CreateQuestion/CreateQuestion";
import CreateCoursePage from "./components/CreateCouses/CreateCouses";
import BlogPage from "./pages/BlogPage";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Home-Page" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/Payment" element={<PaymentPage />} />
      <Route path="/FAQs" element={<FAQsPages />} />
      <Route path="/Đăng-Nhập" element={<LoginPages />} />
      <Route path="/ForgetPass" element={<ForgetPass />} />
      <Route path="/Login" element={<LoginPages />} />
      <Route path="/Đăng-Ký" element={<RegisterPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Opening_Test" element={<TestPages />} />
      <Route path="/Liên-Hệ-Với-Chúng-Tôi" element={<ContactPages />} />
      <Route path="/Kiểm Tra Trình Độ" element={<Surveys />} />
      <Route path="/Khóa-Học" element={<CourseListing />} />
      <Route path="/course/:id" element={<CourseSingle />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/TestInput" element={<TestInputPage />} />
      <Route path="/Teacher" element={<QuestionForm />} />
      <Route path="/Tất Cả Giáo Viên" element={<CreateCoursePage />} />
    </Routes>
    <Footer />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
