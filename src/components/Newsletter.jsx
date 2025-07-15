import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! (Chức năng demo)');
    setEmail('');
  };

  return (
    <section id="contact" className="newsletter">
      <div className="newsletter-content">
        <h2>Đăng Ký Nhận Tin</h2>
        <p>Nhận thông tin mới nhất về sản phẩm và ưu đãi đặc biệt từ Sâm Thiên Nhiên!</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="newsletter-input" 
            placeholder="Nhập email của bạn" 
            required 
            aria-label="Email để đăng ký nhận tin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-button" aria-label="Đăng ký nhận tin">Đăng ký</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;