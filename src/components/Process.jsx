import React from 'react';

const Process = () => {
  const steps = [
    { number: "1", title: "Chọn Giống Sâm", description: "Lựa chọn giống sâm chất lượng cao, đảm bảo dược tính tối ưu." },
    { number: "2", title: "Trồng Trọt Tự Nhiên", description: "Sâm được trồng tại vùng đất sạch, không sử dụng hóa chất độc hại." },
    { number: "3", title: "Thu Hoạch & Chế Biến", description: "Thu hoạch đúng thời điểm và chế biến theo công nghệ tiên tiến." },
    { number: "4", title: "Kiểm Định Chất Lượng", description: "Mỗi sản phẩm được kiểm tra nghiêm ngặt trước khi đến tay khách hàng." }
  ];

  return (
    <section id="process" className="process">
      <div className="container">
        <h2 className="section-title fade-in">Quy Trình Sản Xuất</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="process-step fade-in" key={index}>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;