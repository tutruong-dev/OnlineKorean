import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShoppingCartPage from './pages/ShoppingCartPage';


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/Home-Page" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      {/* Bạn có thể thêm các route khác ở đây */}
    </Routes>
    <Footer />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
