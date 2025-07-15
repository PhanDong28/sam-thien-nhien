import React from 'react';

const MobileMenu = ({ active, onClose }) => {
  return (
    <div className={`mobile-menu ${active ? 'active' : ''}`}>
      <button className="mobile-menu-close" aria-label="Đóng menu di động" onClick={onClose}>×</button>
      <ul role="navigation">
        <li><a href="#home" onClick={onClose} aria-label="Trang chủ">Trang chủ</a></li>
        <li><a href="#about" onClick={onClose} aria-label="Về chúng tôi">Về chúng tôi</a></li>
        <li><a href="#features" onClick={onClose} aria-label="Lợi ích">Lợi ích</a></li>
        <li><a href="#product" onClick={onClose} aria-label="Sản phẩm">Sản phẩm</a></li>
        <li><a href="#process" onClick={onClose} aria-label="Quy trình">Quy trình</a></li>
        <li><a href="#testimonials" onClick={onClose} aria-label="Đánh giá">Đánh giá</a></li>
        <li><a href="#faq" onClick={onClose} aria-label="FAQ">FAQ</a></li>
        <li><a href="#contact" onClick={onClose} aria-label="Liên hệ">Liên hệ</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;