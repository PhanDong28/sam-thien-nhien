import React from 'react';

const Stats = () => {
  const stats = [
    { number: "10+", label: "Năm kinh nghiệm" },
    { number: "5000+", label: "Khách hàng hài lòng" },
    { number: "100%", label: "Sản phẩm tự nhiên" },
    { number: "24/7", label: "Hỗ trợ khách hàng" }
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item fade-in" key={index}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;