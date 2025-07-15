import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { 
      question: "Sâm Thiên Nhiên có an toàn không?", 
      answer: "Có, sản phẩm của chúng tôi được trồng tự nhiên, không sử dụng hóa chất và được kiểm định chất lượng nghiêm ngặt." 
    },
    { 
      question: "Làm thế nào để sử dụng sâm hiệu quả?", 
      answer: "Sâm có thể được dùng trực tiếp, pha trà, hoặc chế biến trong các món ăn. Hướng dẫn chi tiết được cung cấp cùng sản phẩm." 
    },
    { 
      question: "Thời gian giao hàng là bao lâu?", 
      answer: "Thời gian giao hàng thường từ 2-5 ngày làm việc, tùy thuộc vào khu vực của bạn." 
    }
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title fade-in">Câu Hỏi Thường Gặp</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div 
                className="faq-question" 
                role="button" 
                aria-expanded={activeIndex === index}
                aria-controls={`faq${index}`}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </div>
              <div 
                className={`faq-answer ${activeIndex === index ? 'active' : ''}`} 
                id={`faq${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;