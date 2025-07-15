import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { 
      rating: "★★★★★", 
      text: "Sâm Thiên Nhiên giúp tôi cảm thấy khỏe mạnh hơn mỗi ngày. Chất lượng tuyệt vời!", 
      author: "Nguyễn Văn A" 
    },
    { 
      rating: "★★★★★", 
      text: "Trà sâm rất thơm và dễ uống. Tôi đã giới thiệu cho bạn bè!", 
      author: "Trần Thị B" 
    },
    { 
      rating: "★★★★☆", 
      text: "Sản phẩm chất lượng, giao hàng nhanh. Tôi rất hài lòng!", 
      author: "Lê Minh C" 
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title fade-in">Ý Kiến Khách Hàng</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card fade-in" key={index}>
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;