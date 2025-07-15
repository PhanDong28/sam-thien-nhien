import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Về Sâm Thiên Nhiên</h3>
            <p>Chuyên cung cấp các sản phẩm sâm tự nhiên chất lượng cao, đảm bảo sức khỏe và sự hài lòng của khách hàng.</p>
          </div>
          <div className="footer-section">
            <h3>Liên Kết Nhanh</h3>
            <p><a href="#home" aria-label="Trang chủ">Trang chủ</a></p>
            <p><a href="#about" aria-label="Về chúng tôi">Về chúng tôi</a></p>
            <p><a href="#product" aria-label="Sản phẩm">Sản phẩm</a></p>
            <p><a href="#contact" aria-label="Liên hệ">Liên hệ</a></p>
          </div>
          <div className="footer-section">
            <h3>Liên Hệ</h3>
            <p>Email: info@samthiennhien.vn</p>
            <p>Hotline: 0123 456 789</p>
            <p>Địa chỉ: 123 Đường Sâm, TP. Hà Nội</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">FB</a>
              <a href="#" className="social-link" aria-label="YouTube">YT</a>
              <a href="#" className="social-link" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Sâm Thiên Nhiên. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;