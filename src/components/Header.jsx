import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import logo from '../assets/images/logo2.png'; 

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Sâm Thiên Nhiên Logo" width="100" height="40" />
        </div>

        <ul className="nav-links" role="navigation">
          <li><a href="#home" aria-label="Trang chủ">Trang chủ</a></li>
          <li><a href="#about" aria-label="Về chúng tôi">Về chúng tôi</a></li>
          <li><a href="#features" aria-label="Lợi ích">Lợi ích</a></li>
          <li><a href="#product" aria-label="Sản phẩm">Sản phẩm</a></li>
          <li><a href="#process" aria-label="Quy trình">Quy trình</a></li>
          <li><a href="#testimonials" aria-label="Đánh giá">Đánh giá</a></li>
          <li><a href="#faq" aria-label="FAQ">FAQ</a></li>
          <li><a href="#contact" aria-label="Liên hệ">Liên hệ</a></li>
        </ul>
        <button className="mobile-menu-toggle" aria-label="Mở menu di động" onClick={toggleMobileMenu}>☰</button>
      </nav>
      
      <MobileMenu active={mobileMenuActive} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;