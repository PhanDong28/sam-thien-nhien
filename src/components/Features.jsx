import React from 'react';

const Features = () => {
  const features = [
    { icon: "🌱", title: "100% Tự Nhiên", description: "Được trồng và chăm sóc theo phương pháp tự nhiên, không hóa chất, đảm bảo an toàn và chất lượng cao nhất." },
    { icon: "💪", title: "Tăng Cường Sức Khỏe", description: "Sâm thiên nhiên giúp tăng cường năng lượng, cải thiện hệ miễn dịch và hỗ trợ sức khỏe toàn diện." },
    { icon: "🌍", title: "Bền Vững Với Môi Trường", description: "Quy trình sản xuất thân thiện với môi trường, bảo vệ hệ sinh thái và nguồn tài nguyên thiên nhiên." },
    { icon: "🏆", title: "Chứng Nhận Chất Lượng", description: "Sản phẩm được kiểm định và chứng nhận bởi các tổ chức uy tín, đảm bảo độ tinh khiết và hiệu quả." }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title fade-in">Tại sao chọn sâm của chúng tôi?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card fade-in" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;